/* СОЗДАНИЕ ЭЛЕМЕНТОВ */
import {
  openPopup,
  popupZoom,
  popupRemove,
  closePopup,
} from "./modal.js";
import { removeCard, addLike, removeLike } from "./api.js";
import { renderDelliting } from "./utils.js";
import { userId, cardId} from "./index.js";
export const inputPlace = document.querySelector("#place");
export const inputPicture = document.querySelector("#picture");
export const inputAvatarPicture = document.querySelector("#avatarPicture");
const zoomImage = document.querySelector(".zoom__image");
const zoomSignature = document.querySelector(".zoom__signature");
const containerTemplate = document.querySelector("#element");
const popupDellite = document.querySelector(".popup_js-remove");
export const zoomCloseButton = popupZoom.querySelector(
  ".popup__container-button"
);
export function createStartItems(items, ownerId) {
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
    function deleteCard(evt) {
      evt.preventDefault();
      removeCard(cardId)
        .then(() => {
          closePopup(popupRemove);
          elementsCard.remove();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          renderDelliting(false, popupDellite);
        });
      renderDelliting(true, popupDellite);
    }
    popupRemove.addEventListener("submit", deleteCard, {
      once: true,
    });
    /* Будем навешиать его только один раз, задав ему параметр { once: true} */
    popupRemove.addEventListener("close", () => {
      popupRemove.removeEventListener("submit", deleteCard, false);
    }, { once: true});
    openPopup(popupRemove);
  });

  if (items.owner._id !== userId) {
    buttonDellite.remove();
  }
  const like = elementsCard.querySelector(".element__heart");
  const likeCount = elementsCard.querySelector(".element__like-count");
  
  items.likes.forEach((element) => {
  if (element._id === userId)
      like.classList.add("element__heart_active");
  });

  like.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("element__heart_active")) {
      removeLike(cardId).then((dataServ) => {
        evt.target.classList.remove("element__heart_active");
        likeCount.textContent=dataServ.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      addLike(cardId).then((dataServ) => {
        evt.target.classList.add("element__heart_active");
        likeCount.textContent= dataServ.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
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
export function addNewCard(item, cardId) {
  item.name = inputPlace.value;
  item.link = inputPicture.value;
  elements.prepend(createStartItems(item, cardId));
} 
