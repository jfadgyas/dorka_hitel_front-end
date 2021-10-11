import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
        <Switch>
          <Route exact path='/' component={Main}/>          
          <Route exact path='/:page' component={CreatePage}/>
        </Switch>
        <Footer />
      </Router>      
    </main>
  )
}

export default App