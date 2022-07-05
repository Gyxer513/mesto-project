import '../pages/index.css'; // добавьте импорт главного файла стилей 
import {enableValidation, validstionConfig} from './validate.js';
import {addNewCard, createStartItems} from './card.js';
import {closePopup, popupPlace, editProfile, placeCloseButton, placeForm, profileForm} from './modal.js';
import {key, getCards} from './api.js';

/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector('#elements');
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});
placeForm.addEventListener("submit", addNewCard);
profileForm.addEventListener("submit", editProfile);
/* ВАЛИДАЦИЯ */
enableValidation(validstionConfig);
getCards()
.then((dataServer)=>{
  dataServer.forEach((obj) => {
    elements.prepend(createStartItems(obj));
  })
});


/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/*  function showClass(x) {
  console.log(x.classList);
} 
project.addEventListener ('click', (evt) => showClass(evt.target));  */

/* inputName.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода, 
  // на котором слушаем событие input
  console.log(evt.target.validationMessage);
  console.log(evt.target.validity.valid);
});  */
