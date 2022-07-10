import {closePopup} from "./modal";
import {profileName, profileSubname} from "./modal.js"
const buttonSave = document.querySelector('.popup__button-save');
const popups = document.querySelectorAll('.popup');
export const avatar = document.querySelector("#avatar");

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
 function disableButton(evt) {
    const button = evt.querySelector(".popup__button-save");
    button.classList.add("popup__button-save_inactive");
    button.disabled = "disabled";
  }
  export function closePoupEscapeButton(evt) {
    if (evt.key === "Escape") {
      const popupActive = document.querySelector(".popup_opened");
      if (popupActive) {
        closePopup(popupActive);
      }
    }
  }
export function resetVadidation(popup) {
  cleanSpans(popup);
  removeError(popup);
  disableButton(popup);
};
  popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
          if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
          }
          if (evt.target.classList.contains('popup__container-button')) {
            closePopup(popup)
          }
      })
  })

  export function renderLoading(isLoading, popup) {
    const popupButton = popup.querySelector('.popup__button-save');
    if (isLoading) {
      popupButton.textContent = 'Сохранение...'
    } else {
      popupButton.textContent = 'Сохранить'
  }
  };
  export function renderDelliting(isLoading, popup) {
    const popupdelButton = popup.querySelector('.popup__button-remove_js-profile');
    if (isLoading) {
      popupdelButton.textContent = 'Удаление...'
    } else {
      popupdelButton.textContent = 'Удалить'
  }
  };

  export const setUserInfo = ({userName, userDescription, userAvatar}) => {
    if (userName) profileName.textContent = userName;
    if (userDescription) profileSubname.textContent = userDescription;
    if (userAvatar) avatar.src = userAvatar}