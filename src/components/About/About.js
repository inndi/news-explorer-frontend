import React from 'react';
import authorAvatar from '../../images/author-avatar.png';

function About(params) {
  return (
    <section className='about-author'>
      <div className='about-author__avatar-container'>
        <img className='about-author__avatar' src={authorAvatar} alt="girl sitting on the grass" />
      </div>
      <div className='about-author__info'>
        <h2 className='about-author__title'>About the author</h2>
        <p className='about-author__content'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
        <p className='about-author__content'>You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
      </div>
    </section>
  )
}

export default About;