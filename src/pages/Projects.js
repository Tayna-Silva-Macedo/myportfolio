import React from 'react';

function Projects() {
  return (
    <main className='projects-container'>
      <div className='card-container'>
        <div className='card shopping-cart'>
          <div className='card-wrapper'>
            <h2>Shopping Cart</h2>
            <p>Vem ver!</p>
          </div>
        </div>
        <div className='card-text'>
          Nesse projeto foi desenvolvido um carrinho de compras totalmente
          dinâmico consumindo dados diretamente da API do Mercado Livre!
        </div>
      </div>
      <div className='card-container'>
        <div className='card trybe-tunes'>
          <div className='card-wrapper'>
            <h2>Trybe Tunes</h2>
            <p>Vem ver!</p>
          </div>
        </div>
        <div className='card-text'>
          O TrybeTunes é uma aplicação capaz de reproduzir músicas das mais
          variadas bandas e artistas, criar uma lista de músicas favoritas e
          editar o perfil da pessoa usuária logada.
        </div>
      </div>
      <div className='card-container'>
        <div className='card trybe-wallet'>
          <div className='card-wrapper'>
            <h2>Trybe Wallet</h2>
            <p>Vem ver!</p>
          </div>
        </div>
        <div className='card-text'>
          O TrybeWallet é uma carteira de controle de gastos com conversor de
          moedas.
        </div>
      </div>
      <div className='card-container'>
        <div className='card trivia'>
          <div className='card-wrapper'>
            <h2>Trivia</h2>
            <p>Vem ver!</p>
          </div>
        </div>
        <div className='card-text'>
        O Trivia é um jogo de perguntas e respostas.
        </div>
      </div>
    </main>
  );
}

export default Projects;