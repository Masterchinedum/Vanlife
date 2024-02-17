// import { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx';

import './About.css';

function App() {
  return (
    <>
      <div className='aboutPage'>
        <Navbar />
      </div>
        <div className='aboutHero'></div>
        <div className='aboutContent'>
            <p>Hello there</p>
        </div>

      <Footer />

    </>
  )
}

export default App
