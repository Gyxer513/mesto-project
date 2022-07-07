import "../pages/index.css"; // добавьте импорт главного файла стилей
import { enableValidation, validstionConfig } from "./validate.js";
import { createStartItems, inputPlace, inputPicture } from "./card.js";
import {
  closePopup,
  popupPlace,
  editProfile,
  placeCloseButton,
  placeForm,
  profileForm,
  profileName,
  profileSubname,
} from "./modal.js";
import { getCards, getProfile, postCard, postProfile } from "./api.js";
import {renderLoading} from "./utils.js"
/* ********** ПЕРЕМЕННЫЕ ********** */
const elements = document.querySelector("#elements");
const avatar = document.querySelector("#avatar");
/* const avatar = document.querySelector() */
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
getProfile().then((dataServerProfile) => {
  enableServerProfile(dataServerProfile);
  
});

/* ***** ДОБАВЛЕНИЕ КАРТОЧКИ ***** */
placeForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  postCard({
    name: inputPlace.value,
    link: inputPicture.value,
  })
    .then((newCardData) => {
      evt.preventDefault();
      elements.append(createStartItems(newCardData, true));
      closePopup(popupPlace);
      placeForm.reset();
      console.log(newCardData.owner._id);
    })
  });

    /* ***** Редактирование профиля ***** */
    profileForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      postProfile({
        name: profileForm.value,
        about: profileForm.value,
      })
      .then ((profileData) => {
        console.log(profileData)
      })
    });
  
  
  
  
  
    /*   .finally(() => {
      renderLoading(false);
    });
  renderLoading(true); */










/* КЛИКАЛКА ДЛЯ ПРОВЕРКИ ЭЛЕМЕНТОВ */
/*  function showClass(x) {
  console.log(x.classList);
} 
project.addEventListener ('click', (evt) => showClass(evt.target));  */


