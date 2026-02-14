async function askAI(startMessage) {

    const welcome__block = document.querySelector('.chat__welcome');
    const message = startMessage ? startMessage : document.getElementById('chatInput').value;

    welcome__block.style.display = 'none';

    if (!message) return;

    // Відображення повідомлення користувача в чаті
    const container = document.querySelector('.chat__messages');
    const message__user = document.createElement('div');

    message__user.classList.add('chat__user-message' , 'chat__message');
    message__user.textContent = message;

    container.appendChild(message__user);
    
    document.getElementById('chatInput').value = '';

    try {
        const res = await fetch('https://c86b-176-98-30-40.ngrok-free.app/api/ask-ai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        console.log(data);

        // Відображення відповіді AI в чаті
        const container = document.querySelector('.chat__messages');
        const aiMessage = document.createElement('div');

        aiMessage.classList.add('chat__ai-message' , 'chat__message');
        aiMessage.textContent = data.answer || 'Упс, щось пішло не так. Спробуйте ще раз.';

        container.appendChild(aiMessage);
    } 
    catch (err) {
        console.log(err);
        document.getElementById('chat__ai-message').innerText = `Помилка при запиті: ${err.message}`;
    }

}