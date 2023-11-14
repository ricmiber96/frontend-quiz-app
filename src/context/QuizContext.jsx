import React, { createContext, useReducer } from 'react'
import quizReducer, { quizInitialState } from '../reducer/QuizReducer'

export const QuizContext = createContext()

function useQuizReducer () {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState)

  const changeTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme })
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

  return { state, changeTheme, selectAnswer, setCorrectAnswer, setIndex }
}
const QuizContextProvider = ({ children }) => {
  const { state, changeTheme, selectAnswer, setCorrectAnswer, setIndex } = useQuizReducer()

  return (
    <QuizContext.Provider value={{ state, changeTheme, selectAnswer, setCorrectAnswer, setIndex }}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider
