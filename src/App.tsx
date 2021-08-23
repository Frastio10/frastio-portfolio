import React from 'react'

//dependencies
import { Switch, Route, useLocation } from "react-router-dom"
import { Container } from 'react-bootstrap'

//components
import MainNav from './components/MainNav'
import MainFooter from './components/MainFooter'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'

//scss
import './assets/scss/style.scss'

function App() {

  //get url pathname, remove the "/", set the first letter to uppercase, and set it as the page title
  const url = useLocation()
  const pageName = url.pathname === "/" ? "Home - Frastio Agustian" : `${url.pathname.substring(1).charAt(0).toUpperCase()}${url.pathname.slice(2)} - Frastio Agustian`
  document.title = pageName
  

  return (
  
      <div className="App bg-dark">

          <MainNav/>
          
          <div className="main">
            <Container>
              <Switch>
                
                <Route path="/about" component={About}/>
                <Route path="/works" component={Works}/>
                <Route path="/" component={Home}/>
                  
              </Switch>
            </Container>
          </div>

          <MainFooter/>
      </div>
  );
}

export default App;
