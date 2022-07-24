/* ***** POPUPS ***** */
export const profilePopup = document.querySelector('.popup_js-edit-profile');
export const placePopup = document.querySelector('.popup_js-add-place');
export const avatarPopup = document.querySelector('.popup_js-avatar');
export const popupZoom = document.querySelector('.zoom');
export const popupSubmitDelete = document.querySelector('.popup_js-remove');

/* ***** BUTTONS ***** */
export const profileButton = document.querySelector(".profile__button-name");
export const placeAddButton = document.querySelector(".profile__button-place");
export const avatarChangeButton = document.querySelector('.profile__photo'); 

/* ***** FORMS ***** */
export const profileForm = document.querySelector('.popup_js-edit-profile');
export const placeForm = document.querySelector('.popup_js-add-place');
export const avatarForm = document.querySelector('.popup_js-avatar');

/* ***** OTHER ***** */
export const elements = document.querySelector('#elements');
export const avatar = document.querySelector('.profile__photo-image');
export const profileName = document.querySelector('.profile__name');
export const profileSubname = document.querySelector('.profile__subname');
export const popupInputName = document.querySelector('#name');
export const popupInputAbout = document.querySelector('#subname');
export const validstionConfig = {
    inputSelector: ".popup__form-input",
    formSelector: ".popup__form",
    submitButtonSelector: ".popup__button-save",
    inactiveButtonClass: "popup__button-save_inactive",
    inputErrorClass: "popup__form-input_error",
    errorClass: "popup__error-text_visible",
  };