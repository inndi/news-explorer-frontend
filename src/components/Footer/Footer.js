import React from 'react';
import githubIcon from '../../images/icon-github.svg';
import fbIcon from '../../images/social-fb.svg';

function Footer(params) {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; ///initYear/////// Supersite, Powered by News API</p>
      <div className="footer__container">
        <div className='footer__links'>
          <a className='footer__link' href="">Home</a>
          <a className='footer__link' href="">Practicum by Yandex</a>
        </div>
        <div className="footer__social-media">
          <a className='footer__link' href="">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a className='footer__link' href="">
            <img src={fbIcon} alt="facebook icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;