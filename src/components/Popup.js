export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._closeByEsc = this._closeByEsc.bind(this);
  }
  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._closeByEsc); 
  }
  close() {
    this._popup.classList.remove("popup_opened");
    document.addEventListener('keydown', this._closeByEsc); 
  }
  _closeByEsc(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close(evt);
      }
      if (evt.target.classList.contains("popup__container-button")) {
        this.close(evt);
      }
    });
  }
renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Сохранение...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
renderDeleting(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Удаление...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
