export class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then((res) => {
        return this._getResponseData(res);
      });
  }

  setUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  signOut() {
    return fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    })
      .then(this._checkResponse)
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  saveMovie(filmInfo) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country: filmInfo.country,
        director: filmInfo.director,
        duration: filmInfo.duration,
        year: filmInfo.year,
        description: filmInfo.description,
        image: `https://api.nomoreparties.co/${filmInfo.image.url}`,
        trailerLink: filmInfo.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${filmInfo.image.formats.thumbnail.url}`,
        movieId: filmInfo.id,
        nameRU: filmInfo.nameRU,
        nameEN: filmInfo.nameEN,
      })
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.clone().json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://movies.legend1796.nomoredomains.icu',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;

  // deleteCard(cardId) {
  //   return fetch(`${this._url}/cards/${cardId}`, {
  //     credentials: "include",
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  //     .then(res => {
  //       return this._getResponseData(res);
  //     });
  // }