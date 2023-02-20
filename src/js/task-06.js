// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.



const textInputRef = document.querySelector('#validation-input');

textInputRef.addEventListener('blur', () => {
if (
     textInputRef.value.length ==
    Number(textInputRef.dataset.length)
  ) {
    textInputRef.classList.add('valid');
    textInputRef.classList.remove('invalid');
  } else {
    textInputRef.classList.add('invalid');
    textInputRef.classList.remove('valid');
  }
});
