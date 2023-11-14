import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

export default function useQuiz () {
  const { state, changeTheme, selectAnswer, setCorrectAnswer, setIndex } = useContext(QuizContext)
  console.log('Estado', state)
  if (state === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }

  return { theme: state.theme, index: state.index, choosenAnswer: state.choosenAnswer, correctAnswer: state.correctAnswer, changeTheme, selectAnswer, setCorrectAnswer, setIndex }
}
