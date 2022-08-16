import React from 'react';

function ReceivingErrorSection(props) {
  return (
    <section className='res-err-section'>
      <div className='res-err-section__img'></div>
      <h2 className='res-err-section__title'>Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.</h2>
    </section>
  )
}

export default ReceivingErrorSection;