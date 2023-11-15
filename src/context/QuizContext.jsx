import React, { createContext, useReducer } from 'react'
import quizReducer, { quizInitialState } from '../reducer/QuizReducer'

export const QuizContext = createContext()

function useQuizReducer () {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState)

  const changeTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme })
  }

  const setQuizCategory = (category) => {
    dispatch({ type: 'SET_QUIZ_CATEGORY', payload: category })
  }

  const setCorrectAnswer = (answer) => {
    dispatch({ type: 'SET_CORRECT_ANSWER', payload: answer })
  }

  const selectAnswer = (answer) => {
    dispatch({ type: 'SELECT_ANSWER', payload: answer })
  }

  const setIndex = (index) => {
    dispatch({ type: 'SET_INDEX', payload: index })
  }
  const setScore = (score) => {
    dispatch({ type: 'SET_SCORE', payload: score })
  }

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' })
  }

  return { state, changeTheme, selectAnswer, setCorrectAnswer, setQuizCategory, setIndex, setScore, resetQuiz }
}
const QuizContextProvider = ({ children }) => {
  const { state, changeTheme, selectAnswer, setCorrectAnswer, setQuizCategory, setIndex, setScore, resetQuiz } = useQuizReducer()

  return (
    <QuizContext.Provider value={{ state, changeTheme, selectAnswer, setCorrectAnswer, setQuizCategory, setIndex, setScore, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider
