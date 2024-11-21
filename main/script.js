const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageContainer = document.getElementById('message-container');

let messages = [];

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    messages.push({
      text: message,
      sender: 'User 1'
    });
    renderMessages();
    messageInput.value = '';
  }
});

function renderMessages() {
  messageContainer.innerHTML = '';
  messages.forEach((message, index) => {
    const messageHTML = `
      <div class="message ${message.sender === 'User 1' ? 'sent' : 'received'}">
        <span class="sender">${message.sender}</span>
        <p>${message.text}</p>
      </div>
    `;
    const messageElement = document.createElement('div');
    messageElement.innerHTML = messageHTML;
    messageContainer.appendChild(messageElement);
  });
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Add the new code for the chat request button
const chatRequestButtons = document.querySelectorAll('.chat-request-button');

chatRequestButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const seniorId = event.target.closest('.senior-info').dataset.seniorId;
    // Navigate to the chat page with the selected senior
    location.href = `/chat/${seniorId}`;
  });
});

renderMessages();