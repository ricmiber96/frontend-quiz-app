import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { QUIZZES } from '../../utils/quizzes'
import QuizItem from './QuizItem'
import useQuiz from '../../hooks/useQuiz'
import { ErrorIcon } from '../Icons'

export default function QuizGrid (props) {
  // Get quiz category from url
  const location = useLocation()
  const quizCategory = location.pathname.split('/')[1]
  const { index, choosenAnswer, setCorrectAnswer, correctAnswer, setIndex } = useQuiz()
  const [userAnswer, setUserAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)

  let questionsArray = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions
  let questionTitle = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].question
  let questionAnswers = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].options

  useEffect(() => {
    const correctAnswer = questionsArray[0].answer
    setCorrectAnswer(correctAnswer)
    console.log(correctAnswer)
    console.log(questionsArray)
    console.log(index)
    questionsArray = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions
    questionTitle = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].question
    questionAnswers = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].option
  }, [index])

  const submitAnswer = () => {
    choosenAnswer === '' ? setIsAnswered(true) : setIsAnswered(false)
    setUserAnswer(choosenAnswer)
  }

  const nextQuestion = () => {
    setUserAnswer('')
    setIsAnswered(false)
    setIndex()
  }

  return (
    <div className='grid grid-cols-2 gap-24 mt-10'>
      <div className='flex flex-col gap-11 desktop:pb-12 mobile:gap-5 mobile:pb-4'>
        <p className='text-lg italic transition-all duration-300'>Question {index + 1} of {questionsArray.length}</p>
        <h2 className='text-3xl font-medium transition-all duration-300'>{questionTitle}</h2>
      </div>
      <div className='flex flex-col space-y-8'>
        {
          questionAnswers.map((answer, i) => {
            return (
              <QuizItem key={i} optionIndex={i} option={answer} answer={answer} userAnswer={userAnswer}/>
            )
          })
        }
        <div className='col-start-2 desktop:col-start-1'>
          {userAnswer === '' && (
            <button onClick={() => submitAnswer()} className='p-6 rounded-3xl w-full  text-2xl font-medium bg-purple-600 text-white hover:opacity-80'>
                Submit Answer
            </button>
          )
          }
          {

            userAnswer !== '' && index < questionsArray.length - 1
              ? (
                <button onClick={() => nextQuestion()} className='p-6 rounded-3xl w-full  text-2xl font-medium bg-purple-600 text-white hover:opacity-80'>
                  Next Question
                </button>
              )
              : (userAnswer !== '' && index === questionsArray.length - 1 && (
                <button onClick={() => nextQuestion()} className='p-6 rounded-3xl w-full  text-2xl font-medium bg-purple-600 text-white hover:opacity-80'>
                 Submit Quiz
                </button>
              )
              )

          }
          <div
            className={`mt-12 flex items-center justify-center gap-8 ${
              isAnswered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ErrorIcon/>
            <p className='text-[2.4rem] leading-[150%] text-red mobile:text-[1.8rem]'>
            Please select an answer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
