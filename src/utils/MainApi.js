class Api {
  constructor(fetchData) {
    this._baseUrl = fetchData.baseUrl;
    this._headers = fetchData.headers;
    this._token = undefined;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  setToken(token) {
    if (!token || this._token === token) return;

    this._headers = {
      ...this._headers,
      "Authorization": `Bearer ${token}`,
    };
    this._token = token;
  }

  postArticle(keyword, article) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword: keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage
      })
    })
      .then((res) => { return this._checkResponse(res) });
  }

  deleteArticle(articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => { return this._checkResponse(res) });
  }


  register(email, password, username) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
        name: username
      })
    })
      .then((res) => { return this._checkResponse(res) });
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => { return this._checkResponse(res) })
      .then((data) => {
        if (data) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => { return this._checkResponse(res) })
  }

  getSavedArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      headers: this._headers
    })
      .then((res) => { return this._checkResponse(res) })
  }
}

const mainApi = new Api({
  baseUrl: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json"
  }
});

export default mainApi;
