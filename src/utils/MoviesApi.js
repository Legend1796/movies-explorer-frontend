export class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: "include",
      headers: this._headers
    })
      .then((res) => {
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

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi;