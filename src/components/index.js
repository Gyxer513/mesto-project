import '../pages/index.css'; // добавьте импорт главного файла стилей 
import {enableValidation, ValidstionConfig} from './validate.js';
import {cardsList, addNewCard} from './card.js';
import { closePoupEscapeButton, closePopup, popupPlace, editProfile, placeCloseButton, placeForm, profileForm} from './modal.js';



const project = document.querySelector(".project")
/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector('#elements');




placeForm.addEventListener("submit", addNewCard);

/* **** ЗАКРЫВАЕМ **** */
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});

elements.prepend(...cardsList);



placeForm.addEventListener("submit", addNewCard);
profileForm.addEventListener("submit", editProfile);
project.addEventListener('keydown', closePoupEscapeButton);

function closePopupOnOverlayClick (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}
project.addEventListener('click', closePopupOnOverlayClick)


/* ВАЛИДАЦИЯ */

enableValidation(ValidstionConfig);



 







/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/* function showClass(x) {
  console.log(x.classList);
} 
project.addEventListener ('click', (evt) => showClass(evt.target)); */

/* inputName.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода, 
  // на котором слушаем событие input
  console.log(evt.target.validationMessage);
  console.log(evt.target.validity.valid);
});  */

