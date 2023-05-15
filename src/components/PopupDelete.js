import { Popup } from "./Popup";

export class PopupDelete extends Popup {
    constructor(popup) {
        super(popup)
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector(".popup__button-save");
        this._submitButtonText = this._submitButton.textContent;
    }
setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmitCallback()
        
    })
}
confinumDelete(action) {
    this._handleSubmitCallback = action;
  }
}
