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
import { renderLoading, setUserInfo, avatar } from "./utils.js";
/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector("#elements");
const avatarButton = document.querySelector(".profile__photo");
const avatarForm = document.querySelector(".popup_js-avatar");
const formAvatar = document.querySelector(".popup_js-form-avatar");
export let userId = null;
let allCardsData = null;
let cardId = null;
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
  })
}).catch((err) => {
  console.log(err);
});
/* ВАЛИДАЦИЯ */
enableValidation(validstionConfig);
/* ДОБАВЛЯЕМ КАРТОЧКУ */
placeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  postCard({
    name: inputPlace.value,
    link: inputPicture.value,
  })
    .then((cardData) => {
      addNewCard(cardData, cardId);
      closePopup(popupPlace);
      placeForm.reset();
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
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profileForm);
    });
  renderLoading(true, profileForm);
});
avatarButton.addEventListener("click", function on() {
  openPopup(popupAvatar);
});
avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addAvatar({ avatar: inputAvatar.value })
  .then((data) => {
    setUserInfo({
      userAvatar: data.avatar
    })
    formAvatar.reset();
    closePopup(popupAvatar);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, avatarForm);
  });
renderLoading(true, avatarForm);
});



/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
 function showClass(x) {
  console.log(x.classList);
/*   console.log(userId); 
  console.log(allCardsData);
  console.log(cardId1);
  console.log(x.id); */
}
/* document.addEventListener("click", (evt) => showClass(evt.target));  */
