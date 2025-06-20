function applyPersonaTone(response, persona) {
    switch(persona) {
        case 'genz':
            return applyGenZTone(response);
        case 'mentor':
            return applyMentorTone(response);
        case 'sage':
            return applySageTone(response);
        case 'engineer':
        default:
            return applyEngineerTone(response);
    }
}

function applyEngineerTone(response) {
    const prefixes = ["From a technical perspective:", "Optimization suggestion:", "System analysis:", "Technical recommendation:"];
    const suffix = " Let me know if you need further technical details.";
    
    if (Math.random() > 0.7) {
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${response}${suffix}`;
    }
    return response;
}

function applyGenZTone(response) {
    const replacements = [
        { from: "great", to: "fire 🔥" },
        { from: "awesome", to: "slay 💅" },
        { from: "help", to: "help a homie out" },
        { from: "plan", to: "vibe schedule ✨" },
        { from: "today", to: "rn" },
        { from: "Let's", to: "Bet, let's" },
        { from: "Hello", to: "Yo 👋" }
    ];
    
    let newResponse = response;
    replacements.forEach(rep => {
        newResponse = newResponse.replace(new RegExp(rep.from, 'gi'), rep.to);
    });
    
    if (Math.random() > 0.5) {
        const emojis = [" 💯", " 😎", " 👌", " 🤙", " ✌️", " 🚀", " 🤩"];
        newResponse += emojis[Math.floor(Math.random() * emojis.length)];
    }
    
    return newResponse;
}

function applyMentorTone(response) {
    const prefixes = ["Consider this:", "From experience:", "A growth opportunity:", "Something to reflect on:"];
    const questions = [" What would you do differently?", " How does this align with your goals?", " What's your take on this approach?"];
    
    let newResponse = response;
    
    if (Math.random() > 0.6) {
        newResponse = `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${newResponse}`;
    }
    
    if (Math.random() > 0.7) {
        newResponse += questions[Math.floor(Math.random() * questions.length)];
    }
    
    return newResponse;
}

function applySageTone(response) {
    const wisdomPhrases = [
        "As the ancients would say,",
        "In the grand scheme of things,",
        "Wisdom teaches us that",
        "Through contemplation, we find that"
    ];
    
    const endings = [
        " This too shall pass.",
        " Patience reveals all answers.",
        " The journey is as important as the destination.",
        " Balance is key to all things."
    ];
    
    let newResponse = response;
    
    if (Math.random() > 0.5) {
        newResponse = `${wisdomPhrases[Math.floor(Math.random() * wisdomPhrases.length)]} ${newResponse.charAt(0).toLowerCase() + newResponse.slice(1)}`;
    }
    
    if (Math.random() > 0.6) {
        newResponse += endings[Math.floor(Math.random() * endings.length)];
    }
    
    return newResponse;
                  }
