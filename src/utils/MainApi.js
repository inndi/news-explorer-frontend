const MAIN_API = "http://localhost:3003";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.statusText}`);
}


export const postArticle = (keyword, article) => {
  return fetch(`${MAIN_API}/articles`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      keyword: keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source,
      link: article.url,
      image: article.urlToImage
    })
  })
    .then((res) => { return checkResponse(res) });
}

export const deleteArticle = (isSelected, articleId) => {
  if (isSelected) {
    fetch(`${MAIN_API}/articles/${articleId}`, {

    })
  }
}