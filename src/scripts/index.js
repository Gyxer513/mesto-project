const project = document.querySelector(".project")
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

/* *** */ 

const placeCloseButton = popupPlace.querySelector(".popup__container-button");
const zoomCloseButton = popupZoom.querySelector(".popup__container-button");
const profileCloseButton = popupProfile.querySelector(".popup__container-button");

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

elements.prepend(...cardsList); 




function closePoupEscapeButton (evt) {
  if (evt.key === "Escape") {
    closePopup(popupPlace);
    closePopup(popupZoom);
    closePopup(popupProfile);
  }
}
project.addEventListener('keydown', closePoupEscapeButton);

function closePopupOnOverlayClick (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}
project.addEventListener('click', closePopupOnOverlayClick)


/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/* function showClass(x) {
  console.log(x.classList);
} 
project.addEventListener ('click', (evt) => showClass(evt.target)); */

/* inputName.addEventListener('input', function (evt) {
  // Выведем в консоль значение свойства validity.valid поля ввода, 
  // на котором слушаем событие input
  console.log(evt.target.validationMessage);
  console.log(evt.target.validity.valid);
});  */


/* ВАЛИДАЦИЯ */
const toggleButtonActive = (buttonSave, isActive = false) => {
  if(isActive) {
    buttonSave.classList.remove('popup__button-save_inactive');
    buttonSave.disabled = false;
  } else {
    buttonSave.classList.add('popup__button-save_inactive');
    buttonSave.disabled = 'disabled';
    profileForm.removeEventListener("submit", editProfile);
    profileForm.removeEventListener("submit", addNewCard);
  }
}


const showError = (errorElement, inputElement) => {
  errorElement.classList.add('popup__error-text_visible');
  inputElement.classList.add('popup__form-input_error');
  errorElement.textContent = inputElement.validationMessage;
}
const hideError = (errorElement, inputElement) => {
  errorElement.classList.remove('popup__error-text_visible');
  inputElement.classList.remove('popup__form-input_error');
}

const checkInputValidity = (inputElement, formElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  if (!inputElement.validity.valid || (inputElement.textContent = "")) {
    showError(errorElement, inputElement);
  } else {
    hideError(errorElement, inputElement);
  }
};

const setEventLisentner = (formElement) => {
  const inputList = formElement.querySelectorAll('.popup__form-input');
  const submitButton = formElement.querySelector('.popup__button-save');
  [...inputList].forEach(input => {
    input.addEventListener('input', (e) => {
      checkInputValidity(input, formElement);
      toggleButtonActive(submitButton, formElement.checkValidity());
    });
  })
  
}

const enableValidation = () => {
  const forms = document.querySelectorAll('.popup__form');
  [...forms].forEach(form => {
    setEventLisentner(form);
  });
}
enableValidation();



