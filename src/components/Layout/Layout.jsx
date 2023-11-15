import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import useQuiz from '../../hooks/useQuiz'
import { WaveIcon } from '../Icons'

export default function Layout (props) {
  const { theme } = useQuiz()

  return (
    <>
      <div className= {`${theme ? 'bg-gray-700' : 'bg-gray-200'}  min-h-screen `}>
        <div className='w-full z-20 fixed overflow-hidden px-56 py-32 transition-all duration-300'>
          <Header/>
          <main className='mt-10'>
            <Outlet/>
          </main>
        </div>
        <div className='absolute bottom-0 left-0 w-full transition-all duration-300 opacity-100 z-10'>
          <WaveIcon theme={theme} />
        </div>
      </div>
    </>
  )
}
