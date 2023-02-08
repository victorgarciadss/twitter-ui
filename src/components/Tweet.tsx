import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"
import { TweetStyle } from "../styles/TweetStyle"


export const Tweet = () => {
    return(
        <TweetStyle>
            <a className="link-tweet" href="#">
                <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />

                <div className="tweet-content">
                    <div className="tweet-content-header">
                        <strong>Victor Garcia</strong>
                        <span>@victorgarcia</span>
                    </div>

                    <p>
                        Assisti ontem finalmente Matrix 4, é um misto de sensações que um tweet não pode
                        descrever, é um dos melhores filmes dos últimos anos, um filme difícil de se entender, não
                        é melhor que os dois primeiros, mas recupera a franquia depois do fiasco que foi Matrix 3
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
            </a>
        </TweetStyle>
            
        
        
    )
}