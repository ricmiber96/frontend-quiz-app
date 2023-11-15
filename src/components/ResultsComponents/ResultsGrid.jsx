import React from 'react'
import { useNavigate } from 'react-router-dom'
import useQuiz from '../../hooks/useQuiz'

export default function ResultsGrid (props) {
  const { score, resetQuiz } = useQuiz()
  const navigate = useNavigate()

  const handleTryAgain = () => {
    resetQuiz()
    navigate('/')
  }

  return (
    <div className='grid grid-cols-2 gap-24'>
      <div>
        <h2 className='text-8xl font-light transition-all duration-300'>Quiz completed <br/>
          <span className='font-medium'>You scored...</span>
        </h2>
      </div>
      <div>
        <div className='flex flex-col items-center bg-white rounded-lg p-20 gap-4'>
          <div className='flex items-center'>
            <p className='text-2xl font-medium transition-all duration-300 text-gray-400'>HTML</p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <p className='text-9xl font-bold transition-all duration-300 text-gray-500'>{score}/10</p>
          </div>
        </div>
        <button onClick={() => handleTryAgain()} className='p-6 rounded-3xl w-full  text-2xl font-medium bg-purple-600 text-white hover:opacity-80 mt-10'>
            Try Again
        </button>
      </div>
    </div>
  )
}
