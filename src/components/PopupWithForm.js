import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popup, { dataForm }) {
    super(popup);
    this._dataForm = dataForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__form-input");
    this._submitButton = this._popupForm.querySelector(".popup__button-save");
    this._submitButtonText = this._submitButton.textContent;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value; // создание ключа input.name внутри объекта со значением input.value
    });
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._dataForm(this._getInputValues());
      this.close();
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
