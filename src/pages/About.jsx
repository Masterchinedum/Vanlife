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
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
            </p>

            <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className='aboutCTA'> 
                <h1>
                    Your destination is waiting. <br></br>
                    Your van is ready.
                </h1>
                <button>Learn More</button>
            </div>
        </div>

      <Footer />

    </>
  )
}

export default App
