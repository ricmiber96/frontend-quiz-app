import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { CorrectIcon, ErrorIcon } from '../Icons'

export default function QuizItem ({ optionIndex, option, userAnswer, theme }) {
  const optionLetter = String.fromCharCode(65 + optionIndex)
  const { selectAnswer, choosenAnswer, correctAnswer } = useQuiz()

  const isItemSelected = choosenAnswer.toLowerCase() === option.toLowerCase()
  const isNotEmpty = (userAnswer !== '') && (option === correctAnswer || option !== correctAnswer)
  const isAnswerCorrect = (userAnswer.toLowerCase() === option.toLowerCase() && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) || (option.toLowerCase() === correctAnswer.toLowerCase() && isNotEmpty)
  const isAnswerWrong = (userAnswer.toLowerCase() === option.toLowerCase() && userAnswer.toLowerCase() !== correctAnswer.toLowerCase())

  const handleSelected = (userOption) => {
    if (choosenAnswer === '' || userAnswer === '') { selectAnswer(userOption) }
  }

  return (
    <button
      onClick={() => handleSelected(option)}
      className={`w-full bg-white flex flex-row items-center  gap-12 rounded-3xl font-medium shadow-sm cursor-pointer transition-all duration-300 p-4 border-4 
      ${isAnswerCorrect
      ? 'border-green-400'
      : isAnswerWrong
        ? 'border-red-400'
        : isItemSelected
          ? 'border-purple-400 '
          : 'border-transparent'} 
      ${isNotEmpty ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
      <span className={`text-2xl p-4 bg-gray-200 rounded-lg 
      ${isAnswerCorrect ? 'bg-green-400 text-white' : isAnswerWrong ? 'bg-red-400  text-white' : isItemSelected ? 'bg-purple-400 text-white' : 'bg-gray-200'}
      `}>
        {optionLetter}
      </span>
      <span className='text-3xl font-medium'>
        {option}
      </span>
      {
        isNotEmpty &&
          (isAnswerCorrect
            ? (
              <div className='ml-auto'>
                <CorrectIcon />
              </div>
            )
            : (
              isAnswerWrong && (
                <div className='ml-auto'>
                  <ErrorIcon />
                </div>
              )
            )
          )
      }
    </button>
  )
}
