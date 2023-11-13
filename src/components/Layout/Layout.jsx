import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default function Layout (props) {
  return (
    <div className='bg-gray-200 min-h-screen overflow-hidden px-56 py-32 transition-all duration-300'>
      <Header/>
      <main className=''>
        <Outlet/>
      </main>
    </div>
  )
}
