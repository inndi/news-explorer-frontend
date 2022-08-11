import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icon-github.svg';
import fbIcon from '../../images/social-fb.svg';

function Footer(params) {
  const initYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {initYear} Supersite, Powered by News API</p>
      <nav className="footer__navigation">
        <ul className='footer__links'>
          <li className='footer__link'>
            <Link to='/' >Home</Link>
          </li>
          <li className='footer__link' href="https://practicum.com/">Practicum by Yandex</li>
        </ul>
        <ul className="footer__social-media">
          <li className='footer__link' href="https://github.com/inndi">
            <img className='footer__link-img' src={githubIcon} alt="github icon" />
          </li>
          <li className='footer__link' href="https://www.facebook.com/profile.php?id=100028541162326">
            <img className='footer__link-img' src={fbIcon} alt="facebook icon" />
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;