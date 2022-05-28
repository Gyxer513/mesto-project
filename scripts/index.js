/* **** ОБЪЯВЛЯЕМ ВСЕ ПОПАПЫ **** */
const popupProfile = document.querySelector(".popup_js-edit-profile");
const popupPlace = document.querySelector(".popup_js-add-place");
const popupZoom = document.querySelector(".zoom");

/* ********** ПЕРЕМЕННЫЕ ********** */
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__subname");
const containerTemplate = document.querySelector("#element");
const elementImage = document.querySelector(".element__image");
const zoomImage = document.querySelector(".zoom__image");
const zoomSignature = document.querySelector(".zoom__signature");
const profileForm = popupProfile.querySelector(".popup__form");
const placeForm = popupPlace.querySelector(".popup__form");
const elements = document.querySelector('#elements');

/* **** ОБЪЯВЛЯЕМ ВСЕ КНОПКИ **** */
const profileButton = document.querySelector(".profile__button-name");
const placeAdd = document.querySelector(".profile__button-place");

/* *** */ /* КЛАСС, КОНЕЧНО НУЖНО ПЕРЕИМЕНОВАТЬ, НО ТОГДА НУЖНО МЕНЯТЬ СТРУКТУРУ БЭМ */
const profileCloseButton = popupProfile.querySelector(
  ".popup__container-button"
);
const placeCloseButton = popupPlace.querySelector(
  ".popup__container-button"
);
const zoomCloseButton = popupZoom.querySelector(".popup__container-button");

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
});
function editProfile(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileSubname.textContent = inputSubname.value;
    closePopup(popupProfile);
};
profileForm.addEventListener("submit", editProfile);

/* **** ЗАКРЫВАЕМ **** */
profileCloseButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

/* ********** ПОПАП ДОБАВЛЕНИЯ МЕСТА ********** */

/* **** ОТКРЫВАЕМ **** */
placeAdd.addEventListener("click", function () {
  openPopup(popupPlace);
});
/* **** ДОБАВЛЯЕМ НОВУЮ КАРТОЧКУ **** */
function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  elements.prepend(createstartItems(item));
  closePopup(popupPlace);
  placeForm.reset();
};
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
  
  const elementsCard = containerTemplate.content.querySelector(".element__place").cloneNode(true);
  const buttonDellite = elementsCard.querySelector(".element__button-remove");
  const cardImage = elementsCard.querySelector(".element__image");
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector(".element__name").textContent = items.name;
  elementsCard.querySelector(".element__heart")


  /* РАЛИЗОВАЛИ ЛАЙК */
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__heart_active");
    });
  buttonDellite.addEventListener("click", function () {
    elementsCard.remove();
  });

  /* ОТКРЫВАЕМ ZOOOOOOM*/
  cardImage.addEventListener("click", function () {
    zoomImage.src = items.link;
    zoomImage.alt = items.link;
    zoomSignature.textContent = items.name;
    openPopup(popupZoom);
  });
  return elementsCard;
}
/* ЗАКРЫВАЕМ ZOOOOOOM */
zoomCloseButton.addEventListener("click", function () {
  closePopup(popupZoom);
});
/* БЕРЁМ ЭЛЕМЕНТЫ ИЗ МАССИВА */
const cardsList = initialCards.map(function (items) {
  return createstartItems(items);
});

elements.prepend(...cardsList); /* Я СДЕЛАЛ ЭТО, НО ЗАЧЕМ??? */


