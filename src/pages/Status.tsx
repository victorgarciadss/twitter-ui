import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { HeaderTimeline } from "../components/HeaderTimeline"
import { Tweet } from "../components/Tweet"
import { StatusStyle } from "../styles/StatusStyle"



export const Status = () => {

    const [newAnswer, setNewAnswer] = useState<string>('');
    const [answers, setAnswers] = useState([
        "Concordo...",
        "Olha, faz sentido!",
        "Belo comentário"
    ])

    const createNewAnswer = (e: FormEvent) => {
        e.preventDefault();

        setAnswers([newAnswer, ...answers]);

        setNewAnswer("");
    }

    const handleHotKeySubmit = (e: KeyboardEvent) => {
        if (e.key === "Enter" && e.ctrlKey) {
            setAnswers([newAnswer, ...answers]);
            setNewAnswer("");
        }
    }

    return (
        <StatusStyle>
            <HeaderTimeline title='Sequência' />


            <Tweet content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas nostrum ipsum atque aperiam omnis, pariatur ab praesentium voluptate qui dolorem, sequi officiis quis explicabo veritatis libero minus expedita? Earum.' />

            <div className='separator' />

            <form onSubmit={createNewAnswer} className='answer-tweet-form' action="">
                <label htmlFor="tweet">
                    <img src="https://github.com/victorgarciadss.png" alt="Imagem Victor" />
                    <textarea
                        id="tweet"
                        placeholder='Tweete sua resposta'
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value);
                        }}
                    />
                </label>

                <button type='submit'>
                    <PaperPlaneRight />
                    <span>Responder</span>
                </button>
            </form>



            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}
        </StatusStyle>
    )
}