import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';

import About from '../About/About';

function Main(params) {
  return (
    <main className='main-content'>
      <SearchForm />
      {/* <NewsCardList></NewsCardList> */}
      <About />
    </main>
  )
}

export default Main;