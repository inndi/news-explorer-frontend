import React from 'react';
import authorAvatar from '../../images/IMG_2226 (copy).jpg';

function About(props) {
  return (
    <section className='about-author'>
      <div className='about-author__avatar-container'>
        <img className='about-author__avatar' src={authorAvatar} alt="girl sitting on the grass" />
      </div>
      <div className='about-author__info'>
        <h2 className='about-author__title'>About the author</h2>
        <p className='about-author__content'>Hi, my name is Inna I'm a passionate and motivated junior web developer.
          I have knowledge in HTML5, CSS3, JavaScript, Node, React, Redux, Git, SASS, BEM, Webpack, Express, and MongoDB and can use them effectively.
        </p>
        <p className='about-author__content'>I'm able to help businesses grow and increase their audience reach through the convenience of using their product.</p>
      </div>
    </section>
  )
}

export default About;