import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SQLgen from './components/SQLgen'
import Feature from './components/Feature'
import Working from './components/Working'
import Databases from './components/Databases'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 5000, // animation duration
      once: true,     // whether animation should happen only once
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>


      <div className="relative min-h-screen w-full bg-slate-950 overflow-hidden scroll-smooth
">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(700px_circle_at_50%_200px,#244970,transparent),radial-gradient(800px_circle_at_5%_2000px,#123057,transparent),radial-gradient(800px_circle_at_90%_2000px,#123057,transparent),radial-gradient(50px_circle_at_50%_200px,#5f00e3,transparent),radial-gradient(10px_circle_at_50%_200px,#edf1f5,transparent),radial-gradient(10px_circle_at_50%_200px,#edf1f5,transparent),radial-gradient(10px_circle_at_50%_200px,#edf1f5,transparent),radial-gradient(10px_circle_at_50%_200px,#edf1f5,transparent),radial-gradient(500px_circle_at_80%_2800px,#1b4c69,transparent),radial-gradient(800px_circle_at_15%_3000px,#32154a,transparent)]"></div>
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <Databases />
          <Feature />
          <Working />
          <SQLgen />
          <Contact />
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App