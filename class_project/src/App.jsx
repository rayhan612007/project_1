import React from 'react'
import {Routes, Route} from 'react-router'

import Navbar from './element/Navbar'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Sillpage from './pages/Sillpage'
import Contactpage from './pages/Contactpage'
import Myprojectspage from './pages/Myprojectspage'

import DownloadCV from './pages/DownloadCV'

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/skills' element={<Sillpage />} />
        <Route path='/projects' element={<Myprojectspage /> } />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='/download-cv' element={<DownloadCV />} />
      </Routes>
      
    </div>
  )
}

export default App
