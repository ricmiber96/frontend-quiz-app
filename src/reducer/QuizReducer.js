export const quizInitialState = {
  theme: false,
  index: 17,
  correctAnswer: '',
  choosenAnswer: '',
  score: 0,
  isFinished: false
}

export default function quizReducer (state, action) {
  const { type, payload } = action

  const QUIZ_ACTION_TYPES = {
    SET_THEME: 'SET_THEME',
    SET_INDEX: 'SET_INDEX',
    SET_QUESTIONS: 'SET_QUESTIONS',
    SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
    SELECT_ANSWER: 'SELECT_ANSWER',
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
  case QUIZ_ACTION_TYPES.SET_CORRECT_ANSWER:{
    return {
      ...state,
      correctAnswer: payload
    }
  }
  case QUIZ_ACTION_TYPES.SELECT_ANSWER:{
    return {
      ...state,
      choosenAnswer: payload
    }
  }
  case QUIZ_ACTION_TYPES.SET_INDEX:{
    const newState = structuredClone(state)
    newState.index += 1
    return newState
  }
  case QUIZ_ACTION_TYPES.SET_SCORE:{
    const newState = structuredClone(state)
    newState.score += 1
    return newState
  }
  }
}
