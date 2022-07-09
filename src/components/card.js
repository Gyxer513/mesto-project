/* СОЗДАНИЕ ЭЛЕМЕНТОВ */
import {
  openPopup,
  popupZoom,
  popupRemove,
  closePopup,
  popupAvatar,
} from "./modal.js";
import { removeCard, addLike, removeLike } from "./api.js";
import { renderDelliting } from "./utils.js";
import { userId } from "./index.js";
export const inputPlace = document.querySelector("#place");
export const inputPicture = document.querySelector("#picture");
export const inputAvatarPicture = document.querySelector("#avatarPicture");
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
  const cardImage = elementsCard.querySelector(".element__image");
  cardImage.src = items.link;
  cardImage.alt = items.name;
  elementsCard.querySelector(".element__name").textContent = items.name;

  /* ***** УДАЛЕНИЕ КАРТОЧКИ ***** */
  const buttonDellite = elementsCard.querySelector(".element__button-remove");
  const cardId = items._id;

  buttonDellite.addEventListener("click", function () {
    function submitted(evt) {
      evt.preventDefault();
      removeCard(cardId)
        .then(() => {
          closePopup(popupRemove);
          elementsCard.remove();
        })
        .finally(() => {
          renderDelliting(false);
        });
      renderDelliting(true);
    }
    popupRemove.addEventListener("submit", submitted, {
      once: true,
    });
    popupRemove.addEventListener("close", (event) => {
      popupRemove.removeEventListener("submit", submitted, false);
    });

    openPopup(popupRemove);
  });

  if (items.owner._id !== userId) {
    buttonDellite.remove();
  }

  const like = elementsCard.querySelector(".element__heart");
  const likeCount = elementsCard.querySelector(".element__like-count");
  items.likes.forEach((element) => {
    if (element._id === "05d3d3f5b84fd3710ec0b673")
      like.classList.add("element__heart_active");
  });

  like.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("element__heart_active")) {
      removeLike(cardId).then(() => {
        evt.target.classList.remove("element__heart_active");
        likeCount.textContent--;
      });
    } else {
      addLike(cardId).then(() => {
        evt.target.classList.add("element__heart_active");
        likeCount.textContent++;
      });
    }
  });
  likeCount.textContent = [...items.likes].length;
  /* ОТКРЫВАЕМ ZOOOOOOM*/
  cardImage.addEventListener("click", function () {
    zoomImage.src = items.link;
    zoomImage.alt = items.link;
    zoomSignature.textContent = items.name;
    openPopup(popupZoom);
  });
  return elementsCard;
}
/* export function addNewCard(evt) {
  evt.preventDefault();
  const item = {};
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  elements.prepend(createStartItems(item));
  closePopup(popupPlace);
  placeForm.reset();
} */
