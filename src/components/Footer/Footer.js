import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icon-github.svg';
import fbIcon from '../../images/social-fb.svg';

function Footer(props) {
  const initYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p className='footer__copyright'>&copy; {initYear} Supersite, Powered by News API</p>
      <nav className="footer__navigation">
        <ul className='footer__links'>
          <li className='footer__link'>
            <Link to='/' onClick={props.handleHomeClick}>Home</Link>
          </li>
          <li className='footer__link'>
            <a target="_blank" href="https://practicum.com/">
              Practicum by Yandex
            </a>
          </li>
        </ul>
        <ul className="footer__social-media">
          <li className='footer__link'>
            <a target="_blank" href="https://github.com/inndi">
              <img className='footer__link-img' src={githubIcon} alt="github icon" />
            </a>
          </li>
          <li className='footer__link'>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100028541162326">
              <img className='footer__link-img' src={fbIcon} alt="facebook icon" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;