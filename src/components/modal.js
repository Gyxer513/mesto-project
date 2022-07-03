import {cleanSpans, removeError, inActiveButton, closePoupEscapeButton, closePopupOnOverlayClick} from './utils.js'

/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
export const popupProfile = document.querySelector(".popup_js-edit-profile");
export const popupPlace = document.querySelector(".popup_js-add-place");
export const popupZoom = document.querySelector(".zoom");
/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
export const profileButton = document.querySelector(".profile__button-name");
export const placeAdd = document.querySelector(".profile__button-place");
/* **** ИНПУТЫ **** */
const inputName = document.querySelector("#name");
const inputSubname = document.querySelector("#subname");
/* **** /-/-/ **** */
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__subname");
/* *** */
export const profileForm = popupProfile.querySelector(".popup__form");
export const placeForm = popupPlace.querySelector(".popup__form");
export const placeCloseButton = popupPlace.querySelector(
  ".popup__container-button"
);
export const profileCloseButton = popupProfile.querySelector(
  ".popup__container-button"
);
/* ********** ОТКРЫТИЕ ПОПАПОВ ********** */
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePoupEscapeButton);
  document.removeEventListener('mousedown', closePopupOnOverlayClick);
}
/* ********** ЗАКРЫТИЕ ПОПАПОВ ********** */
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePoupEscapeButton);
  document.removeEventListener('mousedown', closePopupOnOverlayClick);
}
/* ********** ПОПАП ПРОФИЛЯ ********** */
profileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
  cleanSpans(popupProfile);
  removeError(popupProfile);
  inActiveButton(popupProfile);
});
export function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubname.textContent = inputSubname.value;
  closePopup(popupProfile);
}
/* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */
placeAdd.addEventListener("click", function () {
  openPopup(popupPlace);
  cleanSpans(popupPlace);
  removeError(popupPlace);
  inActiveButton(popupPlace);
});



