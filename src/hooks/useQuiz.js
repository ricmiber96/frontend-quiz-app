import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

export default function useQuiz () {
  const { theme, changeTheme } = useContext(QuizContext)

  if (theme === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }

  return { theme, changeTheme }
}
