/* import {enableValidation, validstionConfig} from './validate.js'; */

/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
export const popupProfile = document.querySelector(".popup_js-edit-profile");
export const popupPlace = document.querySelector(".popup_js-add-place");
export const popupZoom = document.querySelector(".zoom");

/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
export const profileButton = document.querySelector(".profile__button-name");
export const placeAdd = document.querySelector(".profile__button-place");
/* *** */
export const profileForm = popupProfile.querySelector(".popup__form");
export const placeForm = popupPlace.querySelector(".popup__form");
export const placeCloseButton = popupPlace.querySelector(
  ".popup__container-button"
);
export const profileCloseButton = popupProfile.querySelector(
  ".popup__container-button"
);

/* ТРИ ФУНКЦИИ НИЖЕ, ВОЗМОЖНО, СЛЕДУЕТ ПЕРЕНЕСТИ В utils */
function cleanSpans(evt) {
  const spans = evt.querySelectorAll(".popup__error-text");
  [...spans].forEach((span) => {
    span.classList.remove("popup__error-text_visible");
  });
}
function removeError(evt) {
  const inputs = evt.querySelectorAll(".popup__form-input");
  [...inputs].forEach((input) => {
    input.classList.remove("popup__form-input_error");
  });
}
function inActiveButton(evt) {
  const button = evt.querySelector(".popup__button-save");
  button.classList.add("popup__button-save_inactive");
  button.disabled = "disabled";
}

/* ********** ОТКРЫТИЕ ПОПАПОВ ********** */
export function openPopup(popup) {
  popup.classList.add("popup_opened");
}
/* **** ИНПУТЫ **** */
const inputName = document.querySelector("#name");
const inputSubname = document.querySelector("#subname");

/* ********** ЗАКРЫТИЕ ПОПАПОВ ********** */
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__subname");

/* ********** ПОПАП ПРОФИЛЯ ********** */

/* **** ОТКРЫВАЕМ **** */
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

/* **** ЗАКРЫВАЕМ **** */
profileCloseButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

/* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */

/* **** ОТКРЫВАЕМ **** */
placeAdd.addEventListener("click", function () {
  openPopup(popupPlace);
  cleanSpans(popupPlace);
  removeError(popupPlace);
  inActiveButton(popupPlace);
});

/* **** ЗАКРЫВАЕМ **** */
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});

export function closePoupEscapeButton(evt) {
  if (evt.key === "Escape") {
    const popupActive = document.querySelector(".popup_opened");
    if (popupActive) {
      popupActive.classList.remove("popup_opened");
    }
  }
}
