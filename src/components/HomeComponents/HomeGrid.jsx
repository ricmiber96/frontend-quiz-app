import React from 'react'
import { QUIZZES } from '../../utils/quizzes'
import HomeItem from './HomeItem'
import useQuiz from '../../hooks/useQuiz'

export default function HomeGrid (props) {
  const { theme } = useQuiz()

  return (
    <section className='grid grid-cols-2 gap-24 mt-10'>
      <div className={` ${theme ? 'text-white' : 'text-black'} flex flex-col space-y-6`}>
        <h1 className='text-8xl text-light'>Welcome to <br/>
          <span className='font-bold'>Frontend Quiz!</span>
        </h1>
        <p className='italic text-2xl'>Pick a subject to get started</p>
      </div>
      <div className='space-y-8'>
        <ul>
          {
            QUIZZES.map((quiz, i) => {
              return (
                <HomeItem theme={theme} key={i} icon={quiz.icon} text={quiz.title}/>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
