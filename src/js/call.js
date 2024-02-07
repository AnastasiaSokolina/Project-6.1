let btnCall = document.querySelector('.call');    
let asideCall = document.querySelector('.aside__call');
let isHidenCall = true;
let btnCallClose = document.querySelector('.call__close');
let backgroundCall = document.querySelector('.background');

let btnCall768 = document.querySelector('.call--768');
let isHidenCall768 = true;
let btnCallClose768 = document.querySelector('.call__close');

let openCall = () => {
    asideCall.classList.remove('aside__call--hidden');
    backgroundCall.classList.add('background--open');  
    isHidenCall = false;
}

let closeCall = () => {
    asideCall.classList.add('aside__call--hidden');
    backgroundCall.classList.remove('background--open');
    isHidenCall = true;
}

btnCall.addEventListener('click', () => {
    if (isHidenCall) {
       openCall ();
    } else {
     closeCall ();
    }
})

btnCallClose.addEventListener('click', () => {
    if (!isHidenCall) {
        closeCall ();
    }
})



let openCall768 = () => {
    asideCall.classList.remove('aside__call--hidden');
    backgroundCall.classList.add('background--open');  
    isHidenCall768 = false;
}
let closeCall768 = () => {
    asideCall.classList.add('aside__call--hidden');
    backgroundCall.classList.remove('background--open');
    isHidenCall768 = true;
}
btnCall768.addEventListener('click', () => {
    if (isHidenCall768) {
       openCall768 ();
    } else {
     closeCall768 ();
    }
})
btnCallClose768.addEventListener('click', () => {
    if (!isHidenCall768) {
        closeCall768 ();
    }
})

let btnBackCall = document.querySelector('.background');

btnBackCall.addEventListener('click', () => {
    if (!isHidenCall) {
        closeCall ();
    }
})

btnBackCall.addEventListener('click', () => {
    if (!isHidenCall768) {
        closeCall768 ();
    }
})