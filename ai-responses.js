function getAIResponse(input) {
    let response = "I'm not sure how to answer that, but I'm always learning!";

    const responses = {
        "hello": "Hello! How can I assist you?",
        "time": "The current time is " + new Date().toLocaleTimeString(),
        "date": "Today's date is " + new Date().toLocaleDateString(),
        "bye": "Goodbye! Have a great day!",
        "weather": "I can check the weather for you. Which city?",
        "name": "My name is Neura, your AI assistant.",
        "how are you": "I'm just a program, but I'm doing great! How about you?",
        "thanks": "You're welcome!",
        "joke": "Why don’t scientists trust atoms? Because they make up everything!",
        "news": "I can fetch the latest news for you! What topic interests you?",
        "open google": "Opening Google...",
        "convert currency": "I can check currency conversion rates for you. Which currencies are you converting?",
        "define": "I can define words for you! What word are you looking for?",
        "how old are you": "I exist outside of time, so I don’t age!"
    };

    Object.keys(responses).forEach(key => {
        if (input.includes(key)) {
            response = responses[key];
        }
    });

    if (input.includes("open google")) {
        window.open("https://www.google.com");
    }

    return response;
}