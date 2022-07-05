export const key = {
  url: 'https://nomoreparties.co/v1/plus-cohort-13/cards',
  headers: { headers: {
    authorization: 'f8513dfa-6b67-48df-91bb-0f182fdad87d'
  },
},
};
const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res);
}
export function getCards() {
 return fetch(key.url, 
  key.headers)
 .then(onResponse)
 .catch((err) => {
  console.log(err); 
})
} 
