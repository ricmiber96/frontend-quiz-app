import React from 'react'
import useQuiz from '../../hooks/useQuiz'

export default function QuizItem ({ optionIndex, option, answer, theme }) {
  const optionLetter = String.fromCharCode(65 + optionIndex)
  const { selectAnswer, choosenAnswer, correctAnswer } = useQuiz()
  const isItemSelected = choosenAnswer.toLowerCase() === option.toLowerCase()
  const isAnswerCorrect = isItemSelected && choosenAnswer.toLowerCase() === correctAnswer.toLowerCase()

  const handleSelected = (userOption) => {
    if (userOption === '') return
    selectAnswer(userOption)
  }

  return (
    <button
      onClick={() => handleSelected(option)}
      className={`${isItemSelected ? 'border-purple-400 ' : 'border-transparent'} bg-white flex flex-row items-center rounded-3xl gap-6 font-medium  shadow-sm cursor-pointer transition-all duration-300 p-6 border-2 `}>
      <span className='text-2xl  p-6 bg-gray-200 rounded-md'>
        {optionLetter}
      </span>
      <span className='text-3xl font-medium'>
        {option}
      </span>
    </button>
  )
}
