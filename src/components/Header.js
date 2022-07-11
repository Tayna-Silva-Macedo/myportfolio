import React from 'react';

function Header() {
  return (
    <header className='header-container'>
      <div className='header'>
        <div className='checkbox-container'>
          <div className='checkbox-wrapper'>
            <input type='checkbox' id='toogle' />
            <label className='checkbox' htmlFor='toogle'>
              <div className='trace'></div>
              <div className='trace'></div>
              <div className='trace'></div>
            </label>
            <div className='menu'></div>
            <nav className='menu-items'>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>Sobre</a>
                </li>
                <li>
                  <a href='#'>Projetos</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <h1>Tayná Silva Macêdo</h1>
      <h2>Front-end developer</h2>
      <div className='social-media'>
        <a href='#'>Linkedin</a>
        <a href='#'>GitHub</a>
      </div>
    </header>
  );
}

export default Header;
