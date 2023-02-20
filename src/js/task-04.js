// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const counterRef = document.querySelector('#counter');
const incrementBtnRef = document.querySelector('[data-action=increment]');
const decrementBtnRef = document.querySelector('[data-action=decrement]');
const changeValueRef = document.querySelector('#value');

let counterValue = 0;


incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decrementBtnRef.addEventListener('click', () => {
counterValue -= 1;
    value.textContent = counterValue;
});
