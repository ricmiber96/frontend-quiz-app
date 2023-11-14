export const quizInitialState = {
  theme: false,
  questions: [],
  currentQuestion: 0,
  score: 0,
  isFinished: false
}

const quizReducer = (state, action) => {
  const { type, payload } = action

  const QUIZ_ACTION_TYPES = {
    SET_THEME: 'SET_THEME',
    SET_QUESTIONS: 'SET_QUESTIONS',
    SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
    SET_SCORE: 'SET_SCORE',
    SET_IS_FINISHED: 'SET_IS_FINISHED'
  }

  switch (type) {
  case QUIZ_ACTION_TYPES.SET_THEME:{
    return {
      ...state,
      theme: payload
    }
  }
  }
}

export default quizReducer
