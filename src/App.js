import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Home, Projects, Initiatives} from './Pages'
import {Navbar, SideLinks, Footer} from './Components'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Redirect from='/' to='/home' exact/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/initiatives' component={Initiatives}/>
        </Switch>
        <Footer/>
        <SideLinks fb='#' insta='#' linkedIn='#' medium='#' twitter='#' utube='#' />
      </div>
    </HashRouter>
  )
}

export default App;
