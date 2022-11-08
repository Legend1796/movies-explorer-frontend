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
        // country: "США",
        // director: "Стивен Кайак",
        // duration: "61",
        // year: "2010",
        // description: "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
        // image: "https://images.unsplash.com/photo-1664733125707-ab692190574a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        // movieId: "2",
        // nameRU: "«Роллинг Стоунз» в изгнании",
        // nameEN: "Stones in Exile",
        // trailerLink: "https://www.youtube.com/watch?v=UXcqcdYABFw",
        // thumbnail: "https://images.unsplash.com/photo-1664733125707-ab692190574a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
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
  // baseUrl: 'https://movies.legend1796.nomoredomains.icu',
  baseUrl: 'http://localhost:3000',
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