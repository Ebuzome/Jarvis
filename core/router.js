function getBotResponse(userMessage, persona) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Route to appropriate module
    if (lowerCaseMessage.includes('hi') || 
        lowerCaseMessage.includes('hello') || 
        lowerCaseMessage.includes('hey')) {
        return applyPersonaTone(getBaseResponse(), persona);
    }
    
    if (lowerCaseMessage.includes('plan') || 
        lowerCaseMessage.includes('today') || 
        lowerCaseMessage.includes('schedule')) {
        return applyPersonaTone(getPlannerResponse(), persona);
    }
    
    // Default response
    return applyPersonaTone(getDefaultResponse(), persona);
}

function getDefaultResponse() {
    const responses = [
        "I'm here to assist you with whatever you need!",
        "Let me know how I can help you with that.",
        "I'm always learning! Could you clarify what you need?",
        "I'm here to support your goals. What would you like to accomplish?",
        "I'd be happy to help with that. Could you provide more details?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
      }
