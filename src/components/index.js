import "../pages/index.css"; // добавьте импорт главного файла стилей
import { enableValidation, validstionConfig } from "./validate.js";
import { createStartItems, inputPlace, inputPicture} from "./card.js";
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
  inputAvatar
} from "./modal.js";
import { getCards, getProfile, postCard, postProfile, addAvatar } from "./api.js";
import {renderLoading} from "./utils.js"
/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector("#elements");
const avatar = document.querySelector("#avatar");
const avatarButton = document.querySelector(".profile__photo");
const avatarForm = document.querySelector('.popup_js-avatar');
placeCloseButton.addEventListener("click", function () {
  closePopup(popupPlace);
});


/* ВАЛИДАЦИЯ */
enableValidation(validstionConfig);

function enableServerProfile(data) {
  profileName.textContent = data.name;
  profileSubname.textContent = data.about;
  avatar.src = data.avatar;
  avatar.alt = data.name;

}
/* ***** РЕНДЕР КАРТОЧЕК **** */
getCards().then((dataServer) => {
  dataServer.forEach((obj) => {
    elements.prepend(createStartItems(obj, false));
  });
});
/* ***** ЗАГРУЗКА ПРОФИЛЯ ***** */
function loadProfile() {
  getProfile().then((dataServerProfile) => {
    enableServerProfile(dataServerProfile);

  });
}
loadProfile();
/* ***** ДОБАВЛЕНИЕ КАРТОЧКИ ***** */
placeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  postCard({
    name: inputPlace.value,
    link: inputPicture.value,
  })
    .then((newCardData) => {
      elements.append(createStartItems(newCardData, true));
      closePopup(popupPlace);
      placeForm.reset();
    })
    .finally(() => {
      renderLoading(false)
    }); 
    renderLoading(true)
  });

    /* ***** Редактирование профиля ***** */
    profileForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      postProfile({
        name: inputName.value,
        about: inputSubname.value,
      })
      .then ((profileData) => {
        editProfile(profileData);
        closePopup(popupPlace);
      placeForm.reset();
      })
      .finally(() => {
        renderLoading(false)
      }); 
      renderLoading(true)
    });


avatarButton.addEventListener('click', function on() {
  openPopup(popupAvatar);
});
avatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addAvatar({avatar: inputAvatar.value})
  .then ((data) => {
    console.log(data)
    loadProfile(data);
    closePopup(popupAvatar)
  }) 

})



/*   
  popupRemove.addEventListener('submit', (evt) => {
      evt.preventDefault();
      removeCard({_id: target._id})
      .then(() => {
        closePopup(popupRemove);
        elementsCard.remove();
      })
     }) */
  
  
  











/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/*  function showClass(x) {
  console.log(x.classList);
} 
project.addEventListener ('click', (evt) => showClass(evt.target));  */


