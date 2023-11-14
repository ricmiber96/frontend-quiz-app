import React from 'react'
import { BACKGROUND_COLORS } from '../../utils/quizzes'
import { Link } from 'react-router-dom'

export default function HomeItem ({ theme, icon, text }) {
  const bgStyle = {
    backgroundColor: BACKGROUND_COLORS[text.toLowerCase()]
  }
  return (
    <Link to={`/${text.toLowerCase()}`}>
      <li
        className={`${theme ? 'bg-gray-600' : 'bg-white '} flex flex-row items-center rounded-md gap-6 text-2xl font-bold shadow-sm cursor-pointer transition-all duration-300 p-6 mb-8`}>

        <div className='p-2 rounded-md' style={bgStyle}>
          {icon}
        </div>
        <p className={`${theme ? 'text-white' : 'text-black'} text-2xl font-medium`}>
          {text}
        </p>
      </li>
    </Link>
  )
}
