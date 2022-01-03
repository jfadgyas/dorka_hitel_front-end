import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Menu'
import Main from './Components/Main'
import CreatePage from './Components/Pages/CreatePage'
import Footer from './Components/Footer'
import ScrollTo from './Components/ScrollTo'

function App() {
  return (
    <main>
      <Router>
        <ScrollTo />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Main />}/>          
          <Route exact path='/:page' element={<CreatePage />}/>
        </Routes>
        <Footer />
      </Router>      
    </main>
  )
}

export default App