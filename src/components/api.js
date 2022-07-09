const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13/',
  headers:  {
    authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d',
    'Content-Type': 'application/json'
  },
};


/* ***** КАРТОЧКИ ПОЛУЧЕНИЕ ***** */
const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export function getData(){
  return Promise.all([getCards(), getProfile()])
}

export function getCards() {
 return fetch(`${config.baseUrl}/cards`, 
  {headers: config.headers})
 .then(checkResponse);
} 
/* ***** ПРОФИЛЬ ***** */

export function getProfile() {
  return fetch (`${config.baseUrl}/users/me`, {headers: config.headers})
  .then(checkResponse);
}
/* ***** КАРТОЧКИ ОТПРАВКА ***** */
export function postCard(data) {
  return fetch (`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data),
    })
  .then(checkResponse)
}
export function postProfile(dataProfile) {
  return fetch (`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(dataProfile),
    })
  .then(checkResponse)
}

export function removeCard(dataID) {
  return fetch (`${config.baseUrl}/cards/${dataID}`, {
    method: 'DELETE',
    headers:  {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(checkResponse)
}
export function addLike(dataID) {
  return fetch (`${config.baseUrl}/cards/likes/${dataID}`, {
    method: 'PUT',
    headers:  {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(checkResponse)
}
export function removeLike(dataID) {
  return fetch (`${config.baseUrl}/cards/likes/${dataID}`, {
    method: 'DELETE',
    headers:  {
      authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
    },
    body: JSON.stringify(dataID),
    })
  .then(checkResponse)
}
export function addAvatar(avatarData) {
  return fetch (`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(avatarData),
    })
  .then(checkResponse)
}