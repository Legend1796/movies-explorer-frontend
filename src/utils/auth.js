export const BASE_URL = 'https://movies.legend1796.nomoredomains.icu';

function getResponseData(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password, email })
  })
    .then((response) => getResponseData(response))
};

export const autorise = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((response) => getResponseData(response))
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((response) => getResponseData(response))
}