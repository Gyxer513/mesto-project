/* ******* ВАЛИДАЦИЯ ******* */

export const validstionConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__error-text_visible'
}; 


export const toggleButtonActive = (buttonSave, isActive = false, config) => {
  if(isActive) {
    buttonSave.classList.remove(config.inactiveButtonClass);
    buttonSave.disabled = false;
  } else {
    buttonSave.classList.add(config.inactiveButtonClass);
    buttonSave.disabled = 'disabled';
  }
}


const showError = (errorElement, inputElement, config) => {
  errorElement.classList.add(config.errorClass);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}
const hideError = (errorElement, inputElement, config) => {
  errorElement.classList.remove(config.errorClass);
  inputElement.classList.remove(config.inputErrorClass);
}

const checkInputValidity = (inputElement, formElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!inputElement.validity.valid || (inputElement.textContent = "")) {
    showError(errorElement, inputElement, config);
  } else {
    hideError(errorElement, inputElement, config);
  }
};

const setEventLisentner = (formElement, config) => {
  const inputList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  [...inputList].forEach(input => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, formElement, config);
      toggleButtonActive(submitButton, formElement.checkValidity(), config);
    });
  })
  
}

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  [...forms].forEach(form => {
    setEventLisentner(form, config);
  });
}



