import "../pages/index.css"; // добавьте импорт главного файла стилей
import { enableValidation, validstionConfig } from "./validate.js";
import {
  createStartItems,
  addNewCard,
  inputPlace,
  inputPicture,
} from "./card.js";
import {
  closePopup,
  popupPlace,
  editProfile,
  placeCloseButton,
  placeForm,
  profileForm,
  profileName,
  profileSubname,
  inputName,
  inputSubname,
  openPopup,
  popupAvatar,
  inputAvatar,
} from "./modal.js";
import { postCard, postProfile, addAvatar, getData } from "./api.js";
import { renderLoading } from "./utils.js";
/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector("#elements");
const avatar = document.querySelector("#avatar");
const avatarButton = document.querySelector(".profile__photo");
const avatarForm = document.querySelector(".popup_js-avatar");
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});
export let userId = null;
let allCardsData = null;
let cardId1 = null;
/* ***** ДАННЫЕ С СЕРВЕРА ***** */
getData().then(([cardsData, userData]) => {
  profileName.textContent = userData.name;
  profileSubname.textContent = userData.about;
  avatar.src = userData.avatar;
  avatar.alt = userData.name;
  userId = userData._id;
  allCardsData = cardsData;

  cardsData.forEach((obj) => {
    elements.append(createStartItems(obj, false));
    cardId1 = obj._id;
  });
});
/* ВАЛИДАЦИЯ */
enableValidation(validstionConfig);
placeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  postCard({
    name: inputPlace.value,
    link: inputPicture.value,
  })
    .then((cardData) => {
      createStartItems(cardData);
      closePopup(popupPlace);
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, placeForm);
    });
  renderLoading(true, placeForm);
});
/* ***** Редактирование профиля ***** */
profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  postProfile({
    name: inputName.value,
    about: inputSubname.value,
  })
    .then((profileData) => {
      editProfile(profileData);
    })
    .finally(() => {
      renderLoading(false, profileForm);
    });
  renderLoading(false, profileForm);
});
avatarButton.addEventListener("click", function on() {
  openPopup(popupAvatar);
});
avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addAvatar({ avatar: inputAvatar.value })
  .then(() => {
    closePopup(popupAvatar);
    location.reload();
  })
  .finally(() => {
    renderLoading(false, popupAvatar);
  });
renderLoading(false, popupAvatar);
});

/* popupRemove.addEventListener('submit', (evt) => {
      evt.preventDefault();
      removeCard({_id: target._id})
      .then(() => {
        closePopup(popupRemove);
        elementsCard.remove();
      })
     })   */

/*   function deleteCard(evt) {
    removeCard(cardId)
    .then((x) =>{
      console.log(x);
      evt.remove()
    }) 
  }
addEventListener */

/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/* function showClass(x) {
  console.log(x.classList);
  console.log(userId); 
  console.log(allCardsData);
  console.log(cardId1);
  console.log(x.id);
} */
/* document.addEventListener("click", (evt) => showClass(evt.target)); */
