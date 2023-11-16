import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeItem from '../src/components/HomeComponents/HomeItem'

import { QUIZZES } from '../src/utils/quizzes'
import { BrowserRouter } from 'react-router-dom'
const quiz = QUIZZES[0]

describe('HomeItem', () => {
  test('should add two numbers', () => {
    expect(1 + 1).toBe(2)
  })
  test('should render the component', () => {
    render(
      <BrowserRouter>
        <HomeItem theme={false} icon={quiz.icon} text={quiz.title}/>
      </BrowserRouter>
    )
    expect(screen.getByRole('link').getAttribute('href')).toBe('/html')
    expect(screen.getByText('HTML'))
  })
})
