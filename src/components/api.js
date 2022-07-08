const key = {
  url: 'https://nomoreparties.co/v1/plus-cohort-13/cards',
  headers: { headers: {
    authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
  },
},
};
/* ***** КАРТОЧКИ ПОЛУЧЕНИЕ ***** */
const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}
export function getCards() {
 return fetch(key.url, 
  key.headers)
 .then(onResponse)
} 
/* ***** ПРОФИЛЬ ***** */

export function getProfile() {
  return fetch ('https://nomoreparties.co/v1/plus-cohort-13/users/me', key.headers)
  .then(onResponse)
  .catch((err) => {
    console.log(err); 
  })
}
/* ***** КАРТОЧКИ ОТПРАВКА ***** */
export function postCard(data) {
  return fetch ('https://nomoreparties.co/v1/plus-cohort-13/cards', {
    method: 'POST',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
  .then(onResponse)
}
export function postProfile(dataProfile) {
  return fetch ('https://nomoreparties.co/v1/plus-cohort-13/users/me', {
    method: 'PATCH',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataProfile),
    })
  .then(onResponse)
}

export function removeCard(dataID) {
  return fetch (`https://nomoreparties.co/v1/plus-cohort-13/cards/${dataID}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(onResponse)
}
export function addLike(dataID) {
  return fetch (`https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${dataID}`, {
    method: 'PUT',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(onResponse)
}
export function removeLike(dataID) {
  return fetch (`https://nomoreparties.co/v1/plus-cohort-13/cards/likes/${dataID}`, {
    method: 'DELETE',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(onResponse)
}
export function addAvatar(avatarData) {
  return fetch ("https://nomoreparties.co/v1/plus-cohort-13/users/me/avatar", {
    method: 'PATCH',
    headers: {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(avatarData),
    })
  .then(onResponse)
}