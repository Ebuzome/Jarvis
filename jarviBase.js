document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const chatContainer = document.getElementById('chat-container');
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const typingIndicator = document.getElementById('typing-indicator');
    const personaButtons = document.querySelectorAll('.persona-btn');
    
    // State
    let currentPersona = 'engineer';
    
    // Auto-resize textarea
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
    
    // Send message on Enter (without Shift)
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Send button click handler
    sendBtn.addEventListener('click', sendMessage);
    
    // Persona selection
    personaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            personaButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPersona = btn.dataset.persona;
        });
    });
    
    // Send message function
    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        addMessageToChat(message, 'user');
        
        // Clear input
        messageInput.value = '';
        messageInput.style.height = '56px';
        
        // Show typing indicator
        typingIndicator.style.display = 'flex';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Get response after delay
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            const response = getBotResponse(message, currentPersona);
            addMessageToChat(response, 'bot');
        }, 1500);
    }
    
    // Add message to chat container
    function addMessageToChat(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
        
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.classList.add(sender === 'user' ? 'user-avatar' : 'bot-avatar');
        
        const avatarIcon = document.createElement('i');
        avatarIcon.classList.add('fas', sender === 'user' ? 'fa-user' : 'fa-robot');
        avatarDiv.appendChild(avatarIcon);
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = text;
        contentDiv.appendChild(contentParagraph);
        
        messageElement.appendChild(avatarDiv);
        messageElement.appendChild(contentDiv);
        
        chatContainer.appendChild(messageElement);
        
        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});
