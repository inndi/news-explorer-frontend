let savedToken;

function checkResponse(res) {

  if (res.ok) {
    // console.log(res);
    return res.json();
  }
  return Promise.reject(`Error: ${res.statusText}`);
}


const api = {
  baseUrl: "http://localhost:3003",
  headers: {
    "Content-Type": "application/json"
  }
};


export const setToken = (token) => {
  if (!token || savedToken === token) return;

  api.headers = {
    ...api.headers,
    "Authorization": `Bearer ${token}`,
  };
  savedToken = token;
}



export const postArticle = (keyword, article) => {
  return fetch(`${api.baseUrl}/articles`, {
    method: 'POST',
    headers: api.headers,
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
    .then((res) => { return checkResponse(res) });
}

export const deleteArticle = (articleId) => {
  return fetch(`${api.baseUrl}/articles/${articleId}`, {
    method: 'DELETE',
    headers: api.headers
  })
    .then((res) => { return checkResponse(res) });
}

export const register = (email, password, username) => {
  return fetch(`${api.baseUrl}/signup`, {
    method: 'POST',
    headers: api.headers,
    body: JSON.stringify({
      email: email,
      password: password,
      name: username
    })
  })
    .then((res) => { return checkResponse(res) });
}

export const login = (email, password) => {
  return fetch(`${api.baseUrl}/signin`, {
    method: 'POST',
    headers: api.headers,
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((res) => { return checkResponse(res) })
    .then((data) => {
      if (data) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
}

export const getCurrentUser = () => {
  return fetch(`${api.baseUrl}/users/me`, {
    headers: api.headers
  })
    .then((res) => { return checkResponse(res) })
}

export const getSavedArticles = () => {
  return fetch(`${api.baseUrl}/articles`, {
    headers: api.headers
  })
    .then((res) => { return checkResponse(res) })
}