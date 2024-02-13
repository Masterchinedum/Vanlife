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
      <div className = 'hero'>
        <h1 className='heroHeading'>You got the travel plans, we got the travel vans.</h1>
        <p className='heroText'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <div className = 'heroBtnc'>
          <button className='heroBtn center'>Find your van</button>
        </div>
      </div>
      <footer>
        <p>© 2024 VanLife</p>
      </footer>

    </>
  )
}

export default App
