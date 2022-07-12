import React from 'react';

function Contacts() {
  return (
    <div className='contacts-container'>
      <h2>Contatos</h2>
      <p>
        Você consegue me encontrar com facilidade no{' '}
        <a
          href='https://www.linkedin.com/in/tayna-macedo/'
          target='_blank'
          rel='noreferrer'
        >
          Linkedin
        </a>{' '}
        e consegue ver o que estou desenvolvendo no meu{' '}
        <a
          href='https://github.com/Tayna-Silva-Macedo'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
        .
      </p>
      <p>
        Está recrutando? Meu CV está disponível para download{' '}
        <a
          href='https://drive.google.com/file/d/17KivduLrH1dUcQFVBUXbdEy7yaiFVOyN/view?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          aqui
        </a>.
      </p>
      <p>Ou se preferir, entre em contato comigo via e-mail: <span>tayna_sm1996@hotmail.com</span>.</p>
    </div>
  );
}

export default Contacts;
