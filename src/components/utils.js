import {closePopup} from "./modal";
const buttonSave = document.querySelector('.popup__button-save_inactive');
const popups = document.querySelectorAll('.popup');

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

  export function renderLoading(isLoading) {
    if (isLoading) {
      buttonSave.textContent = 'Сохранение...'
    } else {
      buttonSave.textContent = 'Сохранить'
  }
  };
  export function renderDelliting(isDelliting) {
    if (isDelliting) {
      buttonSave.textContent = 'Удаление...'
    } else {
      buttonSave.textContent = 'Удалить'
  }
  };