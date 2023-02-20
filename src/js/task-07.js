// Напиши скрипт, який реагує на зміну значення input#font-size-control 
// (подія input) і змінює інлайн-стиль span#text, 
// оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.



const rangeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = rangeControlRef.value + 'px';

const textResize = () => {
textRef.style.fontSize = `${rangeControlRef.value}px`;
};

rangeControlRef.addEventListener('input', textResize);

// rangeControlRef.addEventListener('change', textResize);
