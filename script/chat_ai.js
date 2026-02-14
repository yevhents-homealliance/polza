let open__button = document.querySelector('.ai-btn');
let open__button_mobile = document.querySelector('.ai-btn-mobile');
let chat = document.querySelector('.chat');
let close__button = document.querySelector('.chat__close-icon');


console.log(open__button_mobile);
console.log(close__button);


if (open__button) {
    open__button.addEventListener('click', () => {
        chat.style.display = 'block';
        console.log('open');
    })
}

if (open__button_mobile) {
    open__button_mobile.addEventListener('click', () => {
        chat.style.display = 'block';
        console.log('open mobile');
    });
}

if (close__button) {
    close__button.addEventListener('click', () => {
        chat.style.display = 'none';
        console.log('close');
    });
}