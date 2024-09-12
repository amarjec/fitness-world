import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'


const App = () => {
  return (
    <main className='w-full h-screen overflow-x-hidden bg-black text-white'>
      <Navbar/>
      <Hero/>
      <Page1/>
      <Page2/>
     
      
    </main>
  )
}

export default App