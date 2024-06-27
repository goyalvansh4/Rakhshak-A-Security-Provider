import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import SystemScanner from './SystemScanner'

const Rakshak = () => {
  
  return (
    <div className=" w-[99vw]  min-h-screen">
      
      <main className="flex-grow">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan" element={<SystemScanner/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default Rakshak