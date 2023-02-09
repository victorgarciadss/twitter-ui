import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { Link } from 'react-router-dom'
import { TweetStyle } from "../styles/TweetStyle"

type TweetProps = {
    content: string
}

export const Tweet = (props: TweetProps) => {
    return(
        <TweetStyle>
            <Link to={"/status"} className="link-tweet">
                <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />

                <div className="tweet-content">
                    <div className="tweet-content-header">
                        <strong>Victor Garcia</strong>
                        <span>@victorgarcia</span>
                    </div>

                    <p>
                        {props.content}
                    </p>

                    <div className="tweet-content-footer">
                        <button type="button">
                            <ChatCircle />
                            20
                        </button>

                        <button type="button">
                            <ArrowsClockwise />
                            20
                        </button>

                        <button type="button">
                            <Heart />
                            20
                        </button>
                    </div>
                </div>
            </Link>
        </TweetStyle>
            
        
        
    )
}