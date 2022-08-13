import React from 'react';

function NotFoundSection(props) {
  return (
    <section className='not-found-section'>
      <div className='not-found-section__img'></div>
      <h2 className='not-found-section__title'>Nothing found</h2>
      <p className='not-found-section__text'>Sorry, but nothing matched
        your search terms.</p>
    </section>
  )
}

export default NotFoundSection;