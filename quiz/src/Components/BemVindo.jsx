import Quiz from "../img/quiz-image.jpg";
import "./BemVindo.css";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const BemVindo = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="bem-vindo">
        <h2>Seja Bem Vindo ao Quiz.</h2>
        <p>Clique no botão Iniciar abaixo para começar</p>
        <button onClick={() => dispatch({ type: "change_state" })}>Inicar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default BemVindo;