const popup = document.querySelector(".popup");
const openButton = document.querySelector(".profile__button-name");
const closeButton = document.querySelector(".popup__container-button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const scontainer = document.querySelector('#elements');
const elementImage = document.querySelector('.elements__image');
const zoom = document.querySelector('.zoom');
const zoomImage = document.querySelector('.zoom__image');
const zoomSignature = document.querySelector('.zoom__signature');
const zcloseButton = document.querySelector('.zoom__container-button');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');
const submitprofileButton = document.querySelector('.popup__button-save');
const placeButton = document.querySelector('.profile__button-place');




/* ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ИЗМЕНЕНИЕ ИМЕНИ */
openButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  submitprofileButton.classList.remove("placeAddButton");
  submitprofileButton.classList.add("editButton")
  console.log(profileName);
  firstInput.value = profileName.textContent;
  secondInput.value = profileSubname.textContent;

  submitprofileButton.addEventListener("click", function () {
    profileName.textContent = firstInput.value;
    profileSubname.textContent = secondInput.value;
    popup.classList.remove("popup_opened");
    return createstartItems(items);
  });

});


closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});



let popupEdit = document.querySelector("popup_edit");
function editProfile() {
  profileName.value = nameValue.textContent;
  profileSubname.value = jobValue.textContent;
  activeButtonElement(buttonElement, formElementList);
  openPopup(popupEdit);
}





/* ОТКРЫТИЕ И ЗАКРЫТИЕ ПОПАПА ДОБАВЛЕНИЕ МЕСТА*/
let addButton = document.querySelector(".profile__button-place");

addButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  submitprofileButton.classList.remove("editButton");
  submitprofileButton.classList.add("placeAddButton");

  submitprofileButton.addEventListener("click", function () {
    
    const item = {};
    item.name = firstInput.value;
    item.link = secondInput.value;
    scontainer.prepend(createstartItems(item));
    submitprofileButton.removeEventListener("click", this.name, false);     
    popup.classList.remove("popup_opened");
    });


  console.log(profileName);
  firstInput.value = 'Введите название';
  secondInput.value = 'Дай ссылку';  
});


closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
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
  const scards = document.querySelector('#elements').content;
  const elementsCard = scards.querySelector('.elements__place').cloneNode(true);
  const dellButton =  elementsCard.querySelector('.elements__button-remove');
  const cardImage =  elementsCard.querySelector('.elements__image');
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector('.elements__name').textContent = items.name;
  elementsCard.querySelector('.elements__heart').addEventListener('click', function (evt) { /* РАЛИЗОВАЛИ ЛАЙК */
    evt.target.classList.toggle("elements__heart_active");
   });
   elementsCard.querySelector('.elements__button-remove').addEventListener ('click', function (){ /* УДАЛЕНИЕ КАРТОЧКИ */
    elementsCard.remove();
  });
  cardImage.addEventListener ('click', function (){ /* ОТКРЫВАЕМ И ЗАКРЫВАЕМ ZOOOOOOM */
    zoomImage.src = items.link;
    zoomImage.alt = items.link;
    zoomSignature.textContent = items.name;
    zoom.classList.add("zoom_active");
  });
  zcloseButton.addEventListener("click", function () {
    zoom.classList.remove("zoom_active");
  });
  return elementsCard;
}
const cardsList = initialCards.map (function (items) {     /* БЕРЁМ ЭЛЕМЕНТЫ ИЗ МАССИВА */
  return createstartItems(items);
});

function AddCard(something) {
  scontainer.prepend(createstartItems(something));  
};

scontainer.append (...cardsList);



