import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='no-scrollbar flex flex-col snap-y snap-mandatory overflow-y-scroll  min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App