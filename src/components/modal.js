/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
export const popupProfile = document.querySelector(".popup_js-edit-profile");
export const popupPlace = document.querySelector(".popup_js-add-place");


/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
export const profileButton = document.querySelector(".profile__button-name");
export const placeAdd = document.querySelector(".profile__button-place");
/* *** */ 
export const profileForm = popupProfile.querySelector(".popup__form");
export const placeForm = popupPlace.querySelector(".popup__form");
export const placeCloseButton = popupPlace.querySelector(".popup__container-button");
export const profileCloseButton = popupProfile.querySelector(".popup__container-button");

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
    /* **** ЗАПИСЫВАЕМ ЗНАЧЕНИЯ **** */
    inputName.value = profileName.textContent;
    inputSubname.value = profileSubname.textContent;
  });
  export function editProfile(evt) {
      evt.preventDefault();
      profileName.textContent = inputName.value;
      profileSubname.textContent = inputSubname.value;
      closePopup(popupProfile);
  };
  
  
  /* **** ЗАКРЫВАЕМ **** */
  profileCloseButton.addEventListener("click", function () {
    closePopup(popupProfile);
  });
  
  /* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */
  
  /* **** ОТКРЫВАЕМ **** */
  placeAdd.addEventListener("click", function () {
    openPopup(popupPlace);
  });
  
  
 
  
  /* **** ЗАКРЫВАЕМ **** */
  placeCloseButton.addEventListener("click", function () {
    closePopup(popupPlace);
  });






















export function closePoupEscapeButton (evt) {
    if (evt.key === "Escape") {
      closePopup(popupPlace);
      closePopup(popupZoom);
      closePopup(popupProfile);
    }
  }