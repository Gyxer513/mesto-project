import '../pages/index.css'; // добавьте импорт главного файла стилей 
import {enableValidation, ValidstionConfig} from './validate.js';
import {cardsList, popupZoom} from './card.js';



/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
export const popupProfile = document.querySelector(".popup_js-edit-profile");
const popupPlace = document.querySelector(".popup_js-add-place");
const project = document.querySelector(".project")


/* ********** ПЕРЕМЕННЫЕ ********** */
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__subname");


export const profileForm = popupProfile.querySelector(".popup__form");
const placeForm = popupPlace.querySelector(".popup__form");
const elements = document.querySelector('#elements');

/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
const profileButton = document.querySelector(".profile__button-name");
const placeAdd = document.querySelector(".profile__button-place");

/* *** */ 

const placeCloseButton = popupPlace.querySelector(".popup__container-button");

const profileCloseButton = popupProfile.querySelector(".popup__container-button");

/* *** */
const profileSaveButton = document.querySelector(
  ".popup__button-save_js-profile"
);
const placeSaveButton = document.querySelector(".popup__button-save_js-place");

/* **** ИНПУТЫ **** */
const inputName = document.querySelector("#name");
const inputSubname = document.querySelector("#subname");
const inputPlace = document.querySelector("#place");
const inputPicture = document.querySelector("#picture");

/* ********** ОТКРЫТИЕ ПОПАПОВ ********** */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

/* ********** ЗАКРЫТИЕ ПОПАПОВ ********** */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/* ********** ПОПАП ПРОФИЛЯ ********** */

/* **** ОТКРЫВАЕМ **** */
profileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  /* **** ЗАПИСЫВАЕМ ЗНАЧЕНИЯ **** */
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
});
export function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSubname.textContent = inputSubname.value;
    closePopup(popupProfile);
};
profileForm.addEventListener("submit", editProfile);

/* **** ЗАКРЫВАЕМ **** */
profileCloseButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

/* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */

/* **** ОТКРЫВАЕМ **** */
placeAdd.addEventListener("click", function () {
  openPopup(popupPlace);
});
/* **** ДОБАВЛЯЕМ НОВУЮ КАРТОЧКУ **** */
export function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  elements.prepend(createstartItems(item));
  closePopup(popupPlace);
  placeForm.reset();
};
placeForm.addEventListener("submit", addNewCard);

/* **** ЗАКРЫВАЕМ **** */
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});

elements.prepend(...cardsList);




function closePoupEscapeButton (evt) {
  if (evt.key === "Escape") {
    closePopup(popupPlace);
    closePopup(popupZoom);
    closePopup(popupProfile);
  }
}
project.addEventListener('keydown', closePoupEscapeButton);

function closePopupOnOverlayClick (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}
project.addEventListener('click', closePopupOnOverlayClick)


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


/* ВАЛИДАЦИЯ */

enableValidation(ValidstionConfig);



 