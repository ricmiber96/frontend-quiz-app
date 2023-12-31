import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useQuiz from '../../hooks/useQuiz'
import { QUIZZES } from '../../utils/quizzes'
import { ErrorIcon } from '../Icons'
import CircularProgress from './CircularProgress'
import QuizItem from './QuizItem'

export default function QuizGrid (props) {
  // Get quiz category from url
  const location = useLocation()
  const quizCategory = location.pathname.split('/')[1]
  const { theme, index, choosenAnswer, selectAnswer, setCorrectAnswer, setQuizCategory, correctAnswer, setIndex, setScore } = useQuiz()
  const [percentage, setPercentage] = useState(0)
  const navigate = useNavigate()

  const [userAnswer, setUserAnswer] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)

  let questionsArray = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions
  let questionTitle = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].question
  let questionAnswers = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].options

  useEffect(() => {
    const correctAnswer = questionsArray[index].answer
    setCorrectAnswer(correctAnswer)
    setQuizCategory(quizCategory)
    questionsArray = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions
    questionTitle = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].question
    questionAnswers = QUIZZES.filter((quiz) => quiz.title.toLowerCase() === quizCategory)[0].questions[index].option
  }, [index])

  const submitAnswer = () => {
    choosenAnswer === '' ? setIsAnswered(true) : setIsAnswered(false)
    setUserAnswer(choosenAnswer)
    setPercentage((index + 1) * 100 / questionsArray.length)
  }

  const nextQuestion = () => {
    if (choosenAnswer === correctAnswer) {
      setScore()
    }
    setUserAnswer('')
    selectAnswer('')
    setIsAnswered(false)
    setIndex()
  }

  const finishQuiz = () => {
    setScore()
    navigate('/results')
  }

  return (
    <div className='grid grid-cols-2 gap-24 mt-10'>
      <div className='flex flex-col gap-12 desktop:pb-12 mobile:gap-5 mobile:pb-4'>
        <p className={`${theme ? 'text-white' : 'text-gray-600'} text-2xl italic transition-all duration-300`}>Question {index + 1} of {questionsArray.length}</p>
        <h2 className={`${theme ? 'text-white' : 'text-gray-600'} text-3xl font-bold transition-all duration-300 mb-10`}>{questionTitle}</h2>
        <CircularProgress theme={theme} percentage={percentage}/>
      </div>
      <div className='flex flex-col space-y-8'>
        {
          questionAnswers.map((answer, i) => {
            return (
              <QuizItem key={i} optionIndex={i} theme={theme} option={answer} answer={answer} userAnswer={userAnswer}/>
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
                <button onClick={() => finishQuiz()} className='p-6 rounded-3xl w-full  text-2xl font-medium bg-purple-600 text-white hover:opacity-80'>
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
