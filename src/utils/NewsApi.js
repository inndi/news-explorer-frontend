const NEWS_URL = 'https://newsapi.org';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.statusText}`);
}

const past7Days = [...Array(7).keys()].map(index => {
  const date = new Date();
  date.setDate(date.getDate() - index);

  return date.toLocaleDateString('en-CA');
});


export const getNews = (keyword) => {
  return fetch(`${NEWS_URL}/v2/everything?q=${keyword}&apiKey=c5d8f41ce48242b088b85eeb364070b1&from=${past7Days[6]}&to=${past7Days[0]}&pageSize=100`)
    .then((res) => {
      // console.log(res.json());
      return checkResponse(res);
    })
}