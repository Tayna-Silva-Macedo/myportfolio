import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [checkbox, setCheckbox] = useState(false);

  const closeMenu = () => {
    if (!checkbox) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  };

  return (
    <header className='header-container'>
      <div className='header'>
        <div className='checkbox-container'>
          <div className='checkbox-wrapper'>
            <input
              type='checkbox'
              id='toogle'
              checked={checkbox}
              onChange={closeMenu}
            />
            <label className='checkbox' htmlFor='toogle'>
              <div className='trace'></div>
              <div className='trace'></div>
              <div className='trace'></div>
            </label>
            <div className='menu'></div>
            <nav className='menu-items'>
              <ul>
                <li>
                  <Link to='/' onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/projects' onClick={closeMenu}>
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link to='/contacts' onClick={closeMenu}>
                    Contatos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <h1>Tayná Silva Macêdo</h1>
      <h2>Estudante de desenvolvimento web</h2>
      <div className='social-media'>
        <a
          href='https://www.linkedin.com/in/tayna-macedo/'
          target='_blank'
          rel='noreferrer'
        >
          Linkedin
        </a>
        <a
          href='https://github.com/Tayna-Silva-Macedo'
          target='_blank'
          rel='noreferrer'
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;
