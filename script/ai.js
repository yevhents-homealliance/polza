/*async function askAI(startMessage) {

    const welcome__block = document.querySelector('.chat__welcome');
    const message = startMessage ? startMessage : document.getElementById('chatInput').value;
    const chatInput = document.querySelector('.chat__input');
    chatInput.style.bottom = '0px';

    welcome__block.style.display = 'none';

    if (!message) return;

    const container = document.querySelector('.chat__messages');
    const message__user = document.createElement('div');

    message__user.classList.add('chat__user-message' , 'chat__message');
    message__user.textContent = message;


    container.appendChild(message__user);

    setTimeout(() => {
        message__user.classList.add('chat__message--visible');
    }, 10);
    
    document.getElementById('chatInput').value = '';

    try {
        const res = await fetch('https://c86b-176-98-30-40.ngrok-free.app/api/ask-faq', {
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

        const container = document.querySelector('.chat__messages');
        const aiMessage = document.createElement('div');

        aiMessage.classList.add('chat__ai-message' , 'chat__message');
        aiMessage.textContent = data.answer || 'Упс, щось пішло не так. Спробуйте ще раз.';

        container.appendChild(aiMessage);

        setTimeout(() => {
            aiMessage.classList.add('chat__message--visible');
        }, 10);
    } 
    catch (err) {
        console.log(err);
        document.getElementById('chat__ai-message').innerText = `Помилка при запиті: ${err.message}`;
    }

}*/

async function askAI(startMessage) {

    const sendBtn = document.getElementById('sendBtn');
    sendBtn.classList.add('loading');
    sendBtn.disabled = true;

    const welcome__block = document.querySelector('.chat__welcome');
    const message = startMessage ? startMessage : document.getElementById('chatInput').value;
    const chatInput = document.querySelector('.chat__input');
    chatInput.style.bottom = '0px';

    welcome__block.style.display = 'none';

    if (!message) {
        sendBtn.classList.remove('loading');
        sendBtn.disabled = false;
        return;
    }

    const container = document.querySelector('.chat__messages');
    const message__user = document.createElement('div');

    message__user.classList.add('chat__user-message', 'chat__message');
    message__user.textContent = message;

    container.appendChild(message__user);

    setTimeout(() => {
        message__user.classList.add('chat__message--visible');
    }, 10);

    document.getElementById('chatInput').value = '';

    try {
        const res = await fetch('https://c86b-176-98-30-40.ngrok-free.app/api/ask-faq', {
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

        const aiMessage = document.createElement('div');
        aiMessage.classList.add('chat__ai-message', 'chat__message');
        aiMessage.textContent = data.answer || 'Упс, щось пішло не так. Спробуйте ще раз.';

        container.appendChild(aiMessage);

        setTimeout(() => {
            aiMessage.classList.add('chat__message--visible');
        }, 10);

    } catch (err) {
        console.log(err);
    } finally {
        sendBtn.classList.remove('loading');
        sendBtn.disabled = false;
    }
}
