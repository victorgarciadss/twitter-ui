import { TimelineStyle } from '../styles/TimelineStyle';

import { HeaderTimeline } from '../components/HeaderTimeline';

import { Tweet } from '../components/Tweet';
import { FormEvent, KeyboardEvent, useState } from 'react';




export const Timeline = () => {

  const [newTweet, setNewTweet] = useState<string>('');
  const [tweets, setTweets] = useState([
    "Meu primeiro Tweet",
    "Legal esse lugar",
    "Show"
  ])

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault();

    setTweets([newTweet, ...tweets]);

    setNewTweet("");
  }

  const handleHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      setTweets([newTweet, ...tweets]);
      setNewTweet("");
    }
}


    return(
        <TimelineStyle>
            <HeaderTimeline title='Página Inicial'/>

            
            
            <form onSubmit={createNewTweet} className='new-tweet-form' action="">
              <label htmlFor="tweet">
                <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />
                <textarea
                  id="tweet"
                  placeholder='O que está acontencendo?'
                  value={newTweet}
                  onKeyDown={handleHotKeySubmit}
                  onChange={(event) => {
                    setNewTweet(event.target.value);
                  }}
                />
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