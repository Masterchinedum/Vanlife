// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <>
      <div className='navCont'>
        <Navbar />
      </div>
      <div className='heroO'>
        <div className = 'hero'>
          <h1>Vanlife</h1>
          <p>Explore the world in a van</p>
        </div>
      </div>

    </>
  )
}

export default App
