import React from 'react';

function Skills() {
  return (
    <div className='skills-container'>
      <h2>Habilidades</h2>
      <h3>Hard-Skills</h3>
      <div className='hard-skills-container'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
            width='36'
            height='36'
            alt='HTML5'
          />
        </a>
        <a
          href='https://www.w3.org/TR/CSS/#css'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
            width='36'
            height='36'
            alt='CSS3'
          />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
            width='36'
            height='36'
            alt='JavaScript'
          />
        </a>
        <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
          <img
            src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
            width='36'
            height='36'
            alt='React'
          />
        </a>
        <a href='https://redux.js.org/' target='_blank' rel='noreferrer'>
          <img
            src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg'
            width='36'
            height='36'
            alt='Redux'
          />
        </a>
        <a href='https://jestjs.io/pt-BR/' target='_blank' rel='noreferrer'>
          <img
            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
            height='36'
            width='36'
            alt='Jest'
          />
        </a>
        <a
          href='https://testing-library.com/docs/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src='https://raw.githubusercontent.com/testing-library/dom-testing-library/main/other/octopus.png'
            height='40'
            width='40'
            alt='Testing Library'
          />
        </a>
      </div>
      <h3>Soft-skills</h3>
      <ul>
        <li>
          Tenho um bom <span>controle emocional</span>, sei lidar com os meus
          sentimentos;
        </li>
        <li>
          Não desisto com facilidade, gosto de <span>resolver problemas</span>;
        </li>
        <li>
          Estou sempre em busca de<span> aprender coisas novas </span>, me
          manter atualizada sempre será uma prioridade;
        </li>
        <li>
          Sou muito<span> organizada</span>, o que me ajuda muito no meu dia a
          dia.
        </li>
      </ul>
    </div>
  );
}

export default Skills;
