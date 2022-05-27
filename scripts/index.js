/* ********** ПЕРЕМЕННЫЕ ********** */
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__subname");
const containerTemplate = document.querySelector("#element");
const elementImage = document.querySelector(".element__image");
const zoomImage = document.querySelector(".zoom__image");
const zoomSignature = document.querySelector(".zoom__signature");
const profileForm = document.querySelector(".popup__form_js-profile");
const placeForm = document.querySelector(".popup__form_js-place");

/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
const popupProfile = document.querySelector(".popup_js-edit-profile");
const popupPlace = document.querySelector(".popup_js-add-place");
const popupZoom = document.querySelector(".zoom");

/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
const profileButton = document.querySelector(".profile__button-name");
const addPlace = document.querySelector(".profile__button-place");

/* *** */
const profileCloseButton = document.querySelector(
  ".popup__container-button_js-profile"
);
const placeCloseButton = document.querySelector(
  ".popup__container-button_js-place"
);
const zoomCloseButton = document.querySelector(".zoom__container-button");

/* *** */
const profileSaveButton = document.querySelector(
  ".popup__button-save_js-profile"
);
const placeSaveButton = document.querySelector(".popup__button-save_js-place");

/* **** ИНПУТЫ **** */
const inputName = document.querySelector("#name");
const inputSubname = document.querySelector("#subname");
const inputPlace = document.querySelector("#place");
const inputPicture = document.querySelector("#picture");

/* ********** ОТКРЫТИЕ ПОПАПОВ ********** */
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

/* ********** ЗАКРЫТИЕ ПОПАПОВ ********** */
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

/* ********** ПОПАП ПРОФИЛЯ ********** */

/* **** ОТКРЫВАЕМ **** */
profileButton.addEventListener("click", function () {
  openPopup(popupProfile);
  /* **** ЗАПИСЫВАЕМ ЗНАЧЕНИЯ **** */
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
  profileForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSubname.textContent = inputSubname.value;
    closePopup(popupProfile);
  });
});
/* **** ЗАКРЫВАЕМ **** */
profileCloseButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

/* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */

/* **** ОТКРЫВАЕМ **** */
addPlace.addEventListener("click", function () {
  openPopup(popupPlace);
  inputPlace.placeholder = "Название";
  inputPicture.placeholder = "Ссылка на картинку";
});
/* **** ДОБАВЛЯЕМ НОВУЮ КАРТОЧКУ **** */
function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  containerTemplate.prepend(createstartItems(item));
  closePopup(popupPlace);
  inputPlace.value = "";
  inputPicture.value = "";
}
placeForm.addEventListener("submit", addNewCard);

/* **** ЗАКРЫВАЕМ **** */
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});

/* СОЗДАНИЕ ЭЛЕМЕНТОВ */
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорск",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createstartItems(items) {
  const containerTemplate = document.querySelector("#element").content;
  const elementsCard = containerTemplate
    .querySelector(".element__place")
    .cloneNode(true);
  const buttonDellite = elementsCard.querySelector(".element__button-remove");
  const cardImage = elementsCard.querySelector(".element__image");
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector(".element__name").textContent = items.name;
  elementsCard
    .querySelector(".element__heart")
    /* РАЛИЗОВАЛИ ЛАЙК */
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__heart_active");
    });
  buttonDellite.addEventListener("click", function () {
    elementsCard.remove();
  });
  /* ОТКРЫВАЕМ И ЗАКРЫВАЕМ ZOOOOOOM */
  cardImage.addEventListener("click", function () {
    zoomImage.src = items.link;
    zoomImage.alt = items.link;
    zoomSignature.textContent = items.name;
    openPopup(popupZoom);
  });
  zoomCloseButton.addEventListener("click", function () {
    closePopup(popupZoom);
  });
  return elementsCard;
}
/* БЕРЁМ ЭЛЕМЕНТЫ ИЗ МАССИВА */
const cardsList = initialCards.map(function (items) {
  return createstartItems(items);
});

function addCard(something) {
  containerTemplate.prepend(createstartItems(something));
}

containerTemplate.append(...cardsList);
