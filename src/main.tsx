import React from 'react'
import ReactDOM from 'react-dom/client'

import './app.css'
import twitterLogo from './assets/logo-twitter.svg';

import { LayoutStyle } from './styles/LayoutStyle'

import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User
} from 'phosphor-react';

import { TimelineStyle } from './styles/TimelineStyle';
import { Tweet } from './components/Tweet';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutStyle>
      <div className='layout-container'>
        <aside className='sidebar'>
          <img className='logo' src={twitterLogo} alt="Logo" />

          <nav className='main-navigation'>
            <a className='active' href="">
              <House weight='fill' />
              Página inicial
            </a>

            <a href="">
              <Hash />
              Explorar
            </a>

            <a href="">
              <Bell />
              Notificações
            </a>

            <a href="">
              <Envelope />
              Mensagens
            </a>

            <a href="">
              <BookmarkSimple />
              Itens Salvos
            </a>

            <a href="">
              <FileText />
              Listas
            </a>

            <a href="">
              <User />
              Perfil
            </a>

            <a href="">
              <DotsThreeCircle />
              Mais
            </a>
          </nav>

          <button className='new-tweet' type='button'>
            Tweetar
          </button>
        </aside>


        <div className='content'>
          <TimelineStyle>
            <div className='timeline-header'>
              Home
              <Sparkle />
            </div>

            <form className='new-tweet-form' action="">

              <label htmlFor="tweet">
                <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />
                <textarea id="tweet" placeholder='O que está acontencendo?' />
              </label>

              <button type='submit'>Tweetar</button>
            </form>

            <div className='separator' />

            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            
          </TimelineStyle>
        </div>

      </div>
    </LayoutStyle>

  </React.StrictMode>,
)
