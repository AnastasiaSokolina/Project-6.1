let btnChat = document.querySelector('.chat');    
let asideChat = document.querySelector('.aside__chat');
let isHidenChat = true;
let btnChatClose = document.querySelector('.chat__close');
let backgroundChat = document.querySelector('.background'); 


let btnChat768 = document.querySelector('.chat--768');
let isHidenChat768 = true;
let btnChatClose768 = document.querySelector('.chat__close');

let openChat = () => {
    asideChat.classList.remove('aside__chat--hidden');
    backgroundChat.classList.add('background--open');  
    isHidenChat = false;
}

let closeChat = () => {
    asideChat.classList.add('aside__chat--hidden');
    backgroundChat.classList.remove('background--open');
    isHidenChat = true;
}

btnChat.addEventListener('click', () => {
    if (isHidenChat) {
       openChat ();
    } else {
     closeChat ();
    }
})

btnChatClose.addEventListener('click', () => {
    if (!isHidenChat) {
        closeChat ();
    }
})

let openChat768 = () => {
    asideChat.classList.remove('aside__chat--hidden');
    backgroundChat.classList.add('background--open');  
    isHidenChat768 = false;
}
let closeChat768 = () => {
    asideChat.classList.add('aside__chat--hidden');
    backgroundChat.classList.remove('background--open');
    isHidenChat768 = true;
}
btnChat768.addEventListener('click', () => {
    if (isHidenChat768) {
       openChat768 ();
    } else {
     closeChat768 ();
    }
})
btnChatClose768.addEventListener('click', () => {
    if (!isHidenChat768) {
        closeChat768 ();
    }
})

let btnBackChat = document.querySelector('.background');

btnBackChat.addEventListener('click', () => {
    if (!isHidenChat) {
        closeChat ();
    }
})

btnBackChat.addEventListener('click', () => {
    if (!isHidenChat768) {
        closeChat768 ();
    }
})