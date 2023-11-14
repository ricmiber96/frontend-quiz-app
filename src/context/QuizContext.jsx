import React, { createContext, useReducer } from 'react'
import quizReducer, { quizInitialState } from '../reducer/QuizReducer'

export const QuizContext = createContext()

function useQuizReducer () {
  const [state, dispatch] = useReducer(quizReducer, quizInitialState)

  const changeTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme })
  }

  return { state, changeTheme }
}
const QuizContextProvider = ({ children }) => {
  const { state, changeTheme } = useQuizReducer()

  return (
    <QuizContext.Provider value={{ theme: state.theme, changeTheme }}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider
