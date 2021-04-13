import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';
import './navbar.scss'


const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand className='nav_logo' href="#/home">JAYVARDHAN RATHI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <nav className="ml-auto">
          <NavLink activeClassName='secLinkActive' className='secLink' to="/home">Home</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/projects">Projects</NavLink>
          <NavLink activeClassName='secLinkActive' className='secLink' to="/initiatives">Initiatives</NavLink>
        </nav>
        </Navbar.Collapse>
    </Navbar>
  )
}


export default NavbarComponent