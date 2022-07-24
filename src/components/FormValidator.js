export class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._formSelector = config.formSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputs = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._formElement = this._form.querySelector(this._formSelector);
  }
  enableValidation() {
    this._form.addEventListener('submit', (evt) => this._handleSubmit(evt));
    this._form.addEventListener('input', () => this._setSubmitButtonType());
    [...this._inputs].forEach((input) => {
      input.addEventListener("input", () => {
        this._handleFieldValidation(input);
      });
    });
  }
  _handleSubmit(evt) {
    evt.preventDefault()
  }
  _setSubmitButtonType() {
    this._button.disabled = !this._formElement.checkValidity();
    this._button.classList.toggle(this._inactiveButtonClass, !this._formElement.checkValidity());
  }
  _handleFieldValidation(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }
  _showError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }
  _hideError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = "";
  }
}
