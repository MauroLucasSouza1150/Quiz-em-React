import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Acerto from "../img/quiz-acerto.png"

import "./GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="game-over">
        <h2>Fim de Jogo !!</h2>
        <p>Parabéns por ter feito o Quiz.</p>
        <p>Sua Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <img src={Acerto} alt="Finalizou o Quiz" />
        <button onClick={() => dispatch({ type: "new_game" })}>Refazer Quiz</button>
    </div>
  )
}

export default GameOver