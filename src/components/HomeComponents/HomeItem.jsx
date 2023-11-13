import React from 'react'
import { BACKGROUND_COLORS } from '../../utils/quizzes'

export default function HomeItem ({ icon, text }) {
  const bgStyle = {
    backgroundColor: BACKGROUND_COLORS[text.toLowerCase()]
  }
  return (
    <li
      className='flex items-center rounded-md gap-6 text-2xl font-bold bg-white shadow-sm cursor-pointer hover:text-black transition-all duration-300 p-6 mb-8'>
      <div className='p-2 rounded-md' style={bgStyle}>
        {icon}
      </div>
      <p className='text-2xl font-medium text-black'>
        {text}
      </p>
    </li>
  )
}
