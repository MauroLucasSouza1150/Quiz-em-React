import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'
import './App.css'


import BemVindo from './Components/BemVindo'
import Question from './Components/Question'
import GameOver from './Components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhar as perguntas
    dispatch({ type: "reorder_questions" })
  }, [])
  return (
    <>
      <div className='App'>
        <h1>Quiz em React</h1>
        {quizState.gameStage === "Start" && <BemVindo />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </>
  )
}

export default App
