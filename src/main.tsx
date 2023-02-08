import React from 'react'
import ReactDOM from 'react-dom/client'

import './app.css'


import { LayoutStyle } from './styles/LayoutStyle'



import { TimelineStyle } from './styles/TimelineStyle';
import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar'
import { HeaderTimeline } from './components/HeaderTimeline';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LayoutStyle>
      <div className='layout-container'>
        
        <Sidebar />

        <div className='content'>
          <TimelineStyle>
            <HeaderTimeline title='Página Inicial'/>

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
