import React from 'react';

function SearchForm(props) {
  return (
    <form className='search-form'>
      <h1 className='search-form__title'>What's going on in the world?</h1>
      <p className='search-form__info'>Find the latest news on any topic and save them in your personal account.</p>
      <div className='search-form__field-container'>
        <input className='search-form__field' type="text" placeholder='Text not entered' />
        <button className='search-form__button'>Search</button>
      </div>
    </form>
  )
}

export default SearchForm;