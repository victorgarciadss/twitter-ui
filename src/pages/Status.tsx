import { HeaderTimeline } from "../components/HeaderTimeline"
import { Tweet } from "../components/Tweet"
import { StatusStyle } from "../styles/StatusStyle"

const answers = [
    "Concordo...",
    "Olha, faz sentido!",
    "Belo comentário"
]

export const Status = () => {
    return (
        <StatusStyle>
            <HeaderTimeline title='Sequência' />


            <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nostrum ipsum atque aperiam omnis, pariatur ab praesentium voluptate qui dolorem, sequi officiis quis explicabo veritatis libero minus expedita? Earum.'/>

            <div className='separator' />

            <form className='answer-tweet-form' action="">
                <label htmlFor="tweet">
                    <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />
                    <textarea id="tweet" placeholder='Tweete sua resposta' />
                </label>

                <button type='submit'>Responder</button>
            </form>

            

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}
        </StatusStyle>
    )
}