import React from 'react'
import { render, screen } from '@testing-library/react'
import QuizItem from '../src/components/QuizComponents/QuizItem'
import { BrowserRouter } from 'react-router-dom'
import QuizContextProvider from '../src/context/QuizContext'
import { QUIZZES } from '../src/utils/quizzes'

const option = QUIZZES[0].questions[0].options[0]
describe('QuizItem', () => {
  test('should render the component', () => {
    render(
      <BrowserRouter>
        <QuizContextProvider>
          <QuizItem optionIndex={0} option={option} userAnswer='' theme={false}/>
        </QuizContextProvider>
      </BrowserRouter>
    )
    expect(screen.getByText('A'))
    expect(screen.getByText('Hyperlinks and Text Markup Language'))
  })
})
