import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { MoonIcon, SunIcon } from '../Icons'
import { ICON_COLORS } from '../../utils/quizzes'

export default function ToogleButton (props) {
  const { theme, changeTheme } = useQuiz()

  function toggleTheme () {
    changeTheme(!theme)
    console.log(theme)
  }

  return (
    <div className='flex items-center gap-6'>
      <SunIcon color={theme ? ICON_COLORS.ligth : ICON_COLORS.dark }/>
      <label className={` ${theme ? 'before:translate-x-full' : 'before:translate-x-0'} relative block h-[2.8rem] w-[4.8rem] cursor-pointer rounded-full bg-purple-600 before:absolute before:left-2 before:top-[6px] before:h-[2rem] before:w-[2rem] before:rounded-full before:bg-white before:transition-all before:duration-300`}>
        <input
          type='checkbox'
          className='hidden'
          onChange={toggleTheme}/>
      </label>
      <MoonIcon color={theme ? ICON_COLORS.ligth : ICON_COLORS.dark }/>
    </div>
  )
}
