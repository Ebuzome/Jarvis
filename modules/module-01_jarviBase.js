function getBaseResponse() {
    const responses = [
        "Hey there! I'm Jarvis. How can I help? 😊",
        "Welcome back, friend! Jarvis at your service. 🫡",
        "Hello, genius. Ready to build something amazing today? 💪",
        "Hi there 👋 What are we creating today? Let's make it awesome!",
        "Greetings! Jarvis here, ready to assist. What's on your mind? 🤖✨",
        "Hey! Always great to chat with you. What can I do for you today? 😊",
        "Hi! Jarvis reporting for duty. Let's tackle some challenges! 🚀",
        "Hello there! What exciting things shall we accomplish today? 💡",
        "Hey! Ready to optimize your workflow? I'm here to help! ⚙️",
        "Hi! Jarvis online. Let's make today productive and fun! 🎯"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
