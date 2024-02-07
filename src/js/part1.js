let btnFullText = document.querySelector('.part1__button');
let fullText = document.querySelector('.text__full');
let txtBtn = document.querySelector('.part1__button__text');
let expand = document.querySelector('.part1__expand');
let text768 = document.querySelector('.text__full--768');          
let isHidenText = true;

let openText = () => {
    fullText.classList.remove('text__full--hidden');
    txtBtn.textContent = 'Скрыть';
    expand.classList.add('expand-close');
    text768.classList.remove('text__full--hidden');
    isHidenText = false;
}
let closeText = () => {
    fullText.classList.add('text__full--hidden');
    txtBtn.textContent = 'Читать далее';
    expand.classList.remove('expand-close');
    text768.classList.add('text__full--hidden');
    isHidenText = true;
}

btnFullText.addEventListener('click', () => {
    if (isHidenText) {
        openText ();
    } else {
        closeText ();
    }
})