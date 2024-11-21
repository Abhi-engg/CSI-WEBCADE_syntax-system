const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');
        const clearButton = document.getElementById('clear-chat');

        function addMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message-container');
            messageElement.innerHTML = `
                <div class="${sender.toLowerCase()}-message">
                    <strong>${sender}:</strong>
                    <p>${message}</p>
                </div>
            `;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function botResponse(message) {
            const lowerMessage = message.toLowerCase();
            if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                return "Hello! How can I help you today?";
            } else if (lowerMessage.includes('how are you')) {
                return "I'm doing well, thank you for asking. How about you?";
            } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
                return "Goodbye! Have a great day!";
            } else if (lowerMessage.includes('weather')) {
                return "I'm sorry, I don't have access to real-time weather information. You might want to check a weather website or app for the most up-to-date forecast.";
            } else if (lowerMessage.includes('name')) {
                return "My name is ChatBot. It's nice to meet you!";
            } else if (lowerMessage.includes('thank')) {
                return "You're welcome! I'm glad I could help.";
            } else if (lowerMessage.includes('joke')) {
                const jokes = [
                    "Why don't scientists trust atoms? Because they make up everything!",
                    "Why did the scarecrow win an award? He was outstanding in his field!",
                    "Why don't eggs tell jokes? They'd crack each other up!",
                    "What do you call a fake noodle? An impasta!",
                    "Why did the math book look so sad? Because it had too many problems!",
                    "What do you call a bear with no teeth? A gummy bear!",
                    "Why did the cookie go to the doctor? Because it was feeling crumbly!",
                    "What do you call a sleeping bull? A bulldozer!",
                    "Why did the bicycle fall over? Because it was two-tired!",
                    "What do you call a can opener that doesn't work? A can't opener!"
                ];
                return jokes[Math.floor(Math.random() * jokes.length)];
            } else if (lowerMessage.includes('time')) {
                return "I'm sorry, I don't have access to the current time. You can check your device's clock for that information.";
            } else {
                return "I'm sorry, I don't understand. Can you please rephrase your question?";
            }
        }

        function sendMessage() {
            const message = userInput.value.trim();
            if (message) {
                addMessage('You', message);
                userInput.value = '';

                setTimeout(() => {
                    const response = botResponse(message);
                    addMessage('Bot', response);
                }, 500);
            }
        }

        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });

        sendButton.addEventListener('click', sendMessage);

        clearButton.addEventListener('click', function() {
            chatMessages.innerHTML = '';
        });