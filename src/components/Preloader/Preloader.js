import React from 'react';

function Preloader(props) {
  return (
    <section className="preloader">
      <div className="preloader__circle-box">
        <i className="preloader__circle-animation"></i>
      </div>
      <p className="preloader__text">Searching for news...</p>
    </section>
  )
}

export default Preloader;