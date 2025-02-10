// Initialize Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.continuous = true; // Always listening
recognition.interimResults = false;

// AI Speaking Function
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name.includes("Google US English")) || voices[0];
        window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        window.speechSynthesis.speak(utterance);
    }

    document.getElementById("output").innerText = "Neura: " + text;
}

// Process voice input
recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    document.getElementById("output").innerText = "You: " + transcript;
    const response = getAIResponse(transcript);
    speak(response);
};

// Start speech recognition
function startListening() {
    recognition.start();
}

// Restart recognition if it stops
recognition.onend = () => {
    setTimeout(() => {
        recognition.start();
    }, 500);
};

// Theme Handling
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

document.getElementById("theme-select").addEventListener("change", function () {
    setTheme(this.value);
});

// Load Theme from Local Storage
window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "default";
    document.body.className = savedTheme;
    document.getElementById("theme-select").value = savedTheme;

    speak("Hello! I am Neura, your AI assistant. How can I help you today?");
    startListening();
};