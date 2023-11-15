import React from 'react'
import ToogleButton from './ToggleButton'
import useQuiz from '../../hooks/useQuiz'
import { BACKGROUND_COLORS, QUIZES_ICONS } from '../../utils/quizzes'
import { Link } from 'react-router-dom'

export default function Header (props) {
  const { theme, quizCategory } = useQuiz()
  const bgStyle = {
    backgroundColor: quizCategory ? BACKGROUND_COLORS[quizCategory] : '#FFF'
  }
  return (
    <header className='z-[2] flex items-center justify-between'>
      <div className={`${quizCategory ? 'opacity-100' : 'opacity-0'} flex items-center gap-6`}>
        <div className='p-1 bg-white rounded-md' style={bgStyle}>
          <Link to='/'>
            {QUIZES_ICONS[quizCategory]}
          </Link>
        </div>
        <p className={`${theme ? 'text-white' : 'text-gray-600'} text-3xl font-medium`}>
          {quizCategory.toUpperCase()}
        </p>
      </div>
      <ToogleButton/>
    </header>
  )
}
