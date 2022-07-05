/* СОЗДАНИЕ ЭЛЕМЕНТОВ */
import {
  closePopup,
  openPopup,
  popupPlace,
  placeForm,
  popupZoom,
} from "./modal.js";
import {getCards} from "./api.js";
import { data } from "autoprefixer";
const inputPlace = document.querySelector("#place");
const inputPicture = document.querySelector("#picture");
/* const elementImage = document.querySelector(".element__image"); */
const zoomImage = document.querySelector(".zoom__image");
const zoomSignature = document.querySelector(".zoom__signature");
const containerTemplate = document.querySelector("#element");
export const zoomCloseButton = popupZoom.querySelector(
  ".popup__container-button"
);
export function createStartItems(items) {
  const elementsCard = containerTemplate.content
    .querySelector(".element__place")
    .cloneNode(true);
  const buttonDellite = elementsCard.querySelector(".element__button-remove");
  const cardImage = elementsCard.querySelector(".element__image");
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector(".element__name").textContent = items.name;
  elementsCard
    .querySelector(".element__heart")
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
/* **** ДОБАВЛЯЕМ НОВУЮ КАРТОЧКУ **** */
export function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  elements.prepend(createStartItems(item));
  closePopup(popupPlace);
  placeForm.reset();
}
