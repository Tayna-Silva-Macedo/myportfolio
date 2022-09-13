import React from 'react';

function Skills() {
  return (
    <div className='skills-container'>
      <h2>Habilidades</h2>
      <h3>Hard-Skills</h3>
      <div className='hard-skills-container'>
        <div>
          <h4>Front-end</h4>
          <div className='front-end-skills-container'>
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
              href='https://www.w3schools.com/css/'
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
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                alt='javascript'
                width='40'
                height='40'
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
          </div>
        </div>
        <div>
          <h4>Back-end</h4>
          <div className='back-end-skills-container'>
            <a href='https://www.docker.com/' target='_blank' rel='noreferrer'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg'
                alt='docker'
                width='40'
                height='40'
              />
            </a>
            <a href='https://www.mysql.com/' target='_blank' rel='noreferrer'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg'
                alt='mysql'
                width='40'
                height='40'
              />
            </a>
            <a href='https://nodejs.org' target='_blank' rel='noreferrer'>
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
                alt='nodejs'
                width='40'
                height='40'
              />
            </a>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
                alt='javascript'
                width='40'
                height='40'
              />
            </a>
          </div>
        </div>
        <div>
          <h4>Testes</h4>
          <div className='testes-skills-container'>
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
            <a href='https://mochajs.org' target='_blank' rel='noreferrer'>
              <img
                src='https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg'
                alt='mocha'
                width='40'
                height='40'
              />
            </a>
            <a href='https://www.chaijs.com' target='_blank' rel='noreferrer'>
              <img
                src='https://opencollective-production.s3-us-west-1.amazonaws.com/76dc6780-9bb2-11e8-927c-71f29759abab.png'
                height='40'
                alt='Chai logo'
              />
            </a>
            <a href='https://sinonjs.org' target='_blank' rel='noreferrer'>
              <img
                src='https://sinonjs.org/assets/images/logo.png'
                height='45'
                alt='Sinon_logo'
              />
            </a>
          </div>
        </div>
      </div>
      <h3>Soft-Skills</h3>
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
