import React from 'react';

function Projects() {
  return (
    <main className='projects-container'>
      <h2>Projetos</h2>
      <div className='card-container'>
        <div className='card shopping-cart'>
          <div className='card-wrapper'>
            <h2>Shopping Cart</h2>
          </div>
        </div>
        <div className='card-text'>
          O Shopping Cart é uma aplicação de carrinho de compras totalmente
          dinâmico que consome dados diretamente da API do Mercado Livre.
          <div className='links-container'>
            <a
              href='https://tayna-silva-macedo.github.io/project-shoppingcart/'
              target='_blank'
              rel='noreferrer'
            >
              Aplicação
            </a>
            <a
              href='https://github.com/Tayna-Silva-Macedo/project-shoppingcart'
              target='_blank'
              rel='noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card trybe-tunes'>
          <div className='card-wrapper'>
            <h2>Trybe Tunes</h2>
          </div>
        </div>
        <div className='card-text'>
          O TrybeTunes é uma aplicação capaz de reproduzir músicas das mais
          variadas bandas e artistas, criar uma lista de músicas favoritas e
          editar o perfil da pessoa usuária logada.
          <div className='links-container'>
            <a
              href='https://tayna-silva-macedo.github.io/project-trybetunes/#/'
              target='_blank'
              rel='noreferrer'
            >
              Aplicação
            </a>
            <a
              href='https://github.com/Tayna-Silva-Macedo/project-trybetunes'
              target='_blank'
              rel='noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card trybe-wallet'>
          <div className='card-wrapper'>
            <h2>Trybe Wallet</h2>
          </div>
        </div>
        <div className='card-text'>
          O TrybeWallet é uma carteira de controle de gastos com conversor de
          moedas.
          <div className='links-container'>
            <a
              href='https://tayna-silva-macedo.github.io/project-trybewallet/#/'
              target='_blank'
              rel='noreferrer'
            >
              Aplicação
            </a>
            <a
              href='https://github.com/Tayna-Silva-Macedo/project-trybewallet'
              target='_blank'
              rel='noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card trivia'>
          <div className='card-wrapper'>
            <h2>Trivia</h2>
          </div>
        </div>
        <div className='card-text'>
          O Trivia é um jogo de perguntas e respostas. Onde o usuário responde a
          5 perguntas com 4 alternativas ou perguntas do tipo verdadeiro ou
          falso.
          <div className='links-container'>
            <a
              href='https://tayna-silva-macedo.github.io/project-trivia/#/'
              target='_blank'
              rel='noreferrer'
            >
              Aplicação
            </a>
            <a
              href='https://github.com/Tayna-Silva-Macedo/project-trivia'
              target='_blank'
              rel='noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
      </div>
      <div className='card-container'>
        <div className='card recipes-app'>
          <div className='card-wrapper'>
            <h2>App de receitas</h2>
          </div>
        </div>
        <div className='card-text'>
          O App de receitas é uma aplicação que usa duas APIs distintas como
          base de dados para disponibilizar diversas receitas de comidas e
          bebidas para o usuário.
          <div className='links-container'>
            <a
              href='https://tayna-silva-macedo.github.io/project-recipes-app/#/'
              target='_blank'
              rel='noreferrer'
            >
              Aplicação
            </a>
            <a
              href='https://github.com/Tayna-Silva-Macedo/project-recipes-app'
              target='_blank'
              rel='noreferrer'
            >
              Repositório
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;
