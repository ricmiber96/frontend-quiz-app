import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '../Icons'

export default function ToogleButton (props) {
  const [theme, setTheme] = useState(false)

  function toggleTheme () {
    setTheme((theme) => !theme)
  }

  return (
    <div className='flex items-center gap-6'>
      <SunIcon/>
      <label className={` ${theme ? 'before:translate-x-full' : 'before:translate-x-0'} relative block h-[2.8rem] w-[4.8rem] cursor-pointer rounded-full bg-red-400 before:absolute before:left-2 before:top-[4px] before:h-[2rem] before:w-[2rem] before:rounded-full before:bg-white before:transition-all before:duration-300`}>
        <input
          type='checkbox'
          className='hidden'
          onChange={toggleTheme}/>
      </label>
      <MoonIcon/>
    </div>
  )
}
