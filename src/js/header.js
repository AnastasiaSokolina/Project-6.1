let aside = document.querySelector('.aside');
let btnAside = document.querySelector('.burger');
let isHiden = true;
let btnClose = document.querySelector('.close');
let background = document.querySelector('.background'); 

let open = () => {
    aside.classList.remove('aside--hidden');
    background.classList.add('background--open');  
    isHiden = false;
}

let close = () => {
    aside.classList.add('aside--hidden');
    background.classList.remove('background--open');
    isHiden = true;
}

btnAside.addEventListener('click', () => {
    if (isHiden) {
       open ();
    } else {
     close ();
    }
})

btnClose.addEventListener('click', () => {
    if (!isHiden) {
        close ();
    }
})

let btnBack = document.querySelector('.background');

btnBack.addEventListener('click', () => {
    if (!isHiden) {
        close ();
    }
})