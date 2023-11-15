import React, { useState, useEffect } from 'react'

export default function CircularProgress ({ percent }) {
  const [circumference, setCircumference] = useState(2 * (22 / 7) * 120)

  useEffect(() => {
    setCircumference(2 * (22 / 7) * 120)
  }, []) // Run this effect only once on component mount

  return (
    <div className='flex items-center justify-center'>
      <svg className='transform -rotate-90 w-72 h-72'>
        <circle
          cx='145'
          cy='145'
          r='120'
          stroke='currentColor'
          strokeWidth='30'
          fill='transparent'
          className='text-gray-700'
        />

        <circle
          cx='145'
          cy='145'
          r='120'
          stroke='currentColor'
          strokeWidth='30'
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className='text-purple-600'
        />
      </svg>
      <span className='absolute text-5xl'>{`${percent}%`}</span>
    </div>
  )
}
