import "../pages/index.css"; // добавьте импорт главного файла стилей
import Api from "./Api.js";
import Card from "./Card";
import Section from "./Section";
import { PopupWithForm } from "./PopupWithForm";
import { PopuoWithImage } from "./PopuoWithImage";
import UserInfo from "./UserInfo";
import { FormValidator } from "./FormValidator";
import { PopupDelete } from "./PopupDelete";
import {
  profilePopup,
  placePopup,
  avatarPopup,
  profileButton,
  placeAddButton,
  avatarChangeButton,
  elements,
  popupZoom,
  avatar,
  profileName,
  profileSubname,
  profileForm,
  placeForm,
  avatarForm,
  validstionConfig,
  popupInputName,
  popupInputAbout,
  popupSubmitDelete,
} from "./utils";

let userId = null;

/* ***** ЗАПУСКАЕМ ВАЛИДАЦИЮ ***** */
const profileFormValidatorActive = new FormValidator(
  validstionConfig,
  profileForm
);
profileFormValidatorActive.enableValidation();

const addCardFormValidatorActive = new FormValidator(
  validstionConfig,
  placeForm
);
addCardFormValidatorActive.enableValidation();

const avatarFormValidatorActive = new FormValidator(
  validstionConfig,
  avatarForm
);
avatarFormValidatorActive.enableValidation();

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-13",
  headers: {
    authorization: "f8513dfa-6b67-48df-91bb-0f182fdad87d",
    "Content-Type": "application/json",
  },
});
Promise.all([api.getCards(), api.getProfile()]).then(
  ([cardsData, userData]) => {
    userId = userData._id;
    sectionCard.renderItems(cardsData);
    userProfileInfo.setAvatar(userData);
    userProfileInfo.setUserInfo(userData);
  }
);

const userProfileInfo = new UserInfo(profileName, profileSubname);

/* ***** СОЗДАНИЕ И РЕНДЕР КАРТОЧЕК ***** */
const sectionCard = new Section(
  {
    renderer: (item) => {
      const cardItem = createCard(item);
      sectionCard.addItem(cardItem, "after");
    },
  },
  elements
);
function createCard(data) {
  const card = new Card(data, "#element", handleCardClick, userId, {
    handleDeleteClick: () => {
      popupDelete.open();
      popupDelete
        .confinumDelete(() => {
          api
            .removeCard(data._id)
            .then(() => {
              card.deleteCard();
              popupDelete.close();
            })
            .catch((err) => {
              console.log(err);
            })
        .finally(() => {
          popupDelete.renderDeleting(false);
        });
        popupDelete.renderDeleting(true);
    });
  },
    addLike: () => {
      api
        .addLike(data._id)
        .then((data) => {
          card.refreshCount(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    removeLike: () => {
      api
        .removeLike(data._id)
        .then((data) => {
          card.refreshCount(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  const cardElement = card.generate();
  return cardElement;
}
/* ***** ПОПАП DELETE ***** */
const popupDelete = new PopupDelete(popupSubmitDelete);
popupDelete.setEventListeners();
/* ***** ОТКРЫТИЕ ПОПАПОВ С ФОРМАМИ ***** */

const editProfile = new PopupWithForm(profilePopup, {
  dataForm: (data) => {
    api.postProfile(data).then((res) => {
      userProfileInfo.setUserInfo(res);
      editProfile.close();
    }).finally(() => {
      editProfile.renderLoading(false);
    });
    editProfile.renderLoading(true);
  },
});
editProfile.setEventListeners();
profileButton.addEventListener("click", () => {
  editProfile.open();
  const infoProfile = userProfileInfo.getUserInfo();
  popupInputName.value = infoProfile.name;
  popupInputAbout.value = infoProfile.about;
});

const addCard = new PopupWithForm(placePopup, {
  dataForm: (data) => {
    api
      .postCard(data)
      .then((res) => {
        const cardItem = createCard(res);
        sectionCard.addItem(cardItem);
        addCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        addCard.renderLoading(false);
      });
    addCard.renderLoading(true);
  },
});
addCard.setEventListeners();
placeAddButton.addEventListener("click", () => {
  addCard.open();
});
const editAvatar = new PopupWithForm(avatarPopup, {
  dataForm: (data) => {
    api
      .addAvatar(data)
      .then(() => {
        avatar.src = data.avatar;
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        editAvatar.renderLoading(false);
      });
      editAvatar.renderLoading(true);
  },
});
editAvatar.setEventListeners();
avatarChangeButton.addEventListener("click", () => {
  editAvatar.open();
});
/* ***** ПОПАП ZOOOOM ***** */
const popupZoomPhoto = new PopuoWithImage(popupZoom);

function handleCardClick(name, link) {
  popupZoomPhoto.open(name, link);
  popupZoomPhoto.setEventListeners();
}
