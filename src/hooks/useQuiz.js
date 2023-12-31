import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

export default function useQuiz () {
  const { state, changeTheme, selectAnswer, setCorrectAnswer, setQuizCategory, setIndex, setScore, resetQuiz } = useContext(QuizContext)

  if (state === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }

  return { theme: state.theme, quizCategory: state.quizCategory, index: state.index, score: state.score, choosenAnswer: state.choosenAnswer, correctAnswer: state.correctAnswer, changeTheme, selectAnswer, setCorrectAnswer, setQuizCategory, setIndex, setScore, resetQuiz }
}
