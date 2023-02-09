import { TimelineStyle } from '../styles/TimelineStyle';

import { HeaderTimeline } from '../components/HeaderTimeline';

import { Tweet } from '../components/Tweet';

const tweets = [
    "Meu primeiro Tweet",
    "Legal esse lugar",
    "Show"
]


export const Timeline = () => {
    return(
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

            {tweets.map(tweet => {
                return <Tweet  key={tweet} content={tweet} />
            })}
            
          </TimelineStyle>
    )
}