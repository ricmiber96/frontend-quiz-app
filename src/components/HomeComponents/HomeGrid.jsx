import React from 'react'
import { QUIZZES } from '../../utils/quizzes'
import HomeItem from './HomeItem'

export default function HomeGrid (props) {
  return (
    <section className='grid grid-cols-2 gap-24 mt-10'>
      <div className='flex flex-col text-gray-500 space-y-6'>
        <h1 className='text-8xl '>Welcome to <br/>
          <span className='text-black font-bold'>Frontend Quiz!</span>
        </h1>
        <p className='italic text-2xl'>Pick a subject to get started</p>
      </div>
      <div className='space-y-8'>
        <ul>
          {
            QUIZZES.map((quiz, i) => {
              console.log(quiz.icon)
              return (
                <HomeItem key={i} icon={quiz.icon} text={quiz.title}/>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
