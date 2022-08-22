import React, { useState } from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function SearchForm(props) {
  const { values, handleChange } = useFormAndValidation();

  const [errorText, setErrorText] = useState('');

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (values.searchKeyword) {
      setErrorText('');
      props.onSearchClick(values.searchKeyword);
    } else {
      setErrorText('❗Please enter a keyword');
    }
  }

  return (
    <form className='search-form'
      onSubmit={handleSearchSubmit}
    >
      <h1 className='search-form__title'>What's going on in the world?</h1>
      <p className='search-form__info'>Find the latest news on any topic and save them in your personal account.</p>
      <div className='search-form__field-container'>

        <div className="search-form__error-container">
          <span className="search-form__field-error">{errorText}</span>
        </div>
        <input
          className='search-form__field'
          type="text"
          placeholder='Text not entered'
          autoComplete="off"
          name='searchKeyword'
          value={values.searchKeyword || ''}
          onChange={handleChange}
        />
        <button className='search-form__button' type='submit'>Search</button>
      </div>
    </form>
  )
}

export default SearchForm;