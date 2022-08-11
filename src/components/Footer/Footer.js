import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icon-github.svg';
import fbIcon from '../../images/social-fb.svg';

function Footer(params) {
  const initYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {initYear} Supersite, Powered by News API</p>
      <div className="footer__container">
        <div className='footer__links'>
          <Link to='/' className='footer__link'>Home</Link>
          <a className='footer__link' href="https://practicum.com/">Practicum by Yandex</a>
        </div>
        <div className="footer__social-media">
          <a className='footer__link' href="https://github.com/inndi">
            <img className='footer__link-img' src={githubIcon} alt="github icon" />
          </a>
          <a className='footer__link' href="https://www.facebook.com/profile.php?id=100028541162326">
            <img className='footer__link-img' src={fbIcon} alt="facebook icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;