import { Component } from "react";
import { Navbar, Nav } from "react-bootstrap"
import thisOne from '../img/professionalOne.png'

// this is my navbar component.
class NavBar extends Component {
  // this is my signOut for me being in my admin page.
  handleSignOut=()=>{
    localStorage.clear()
    window.location = "/"
  }
  render() {
    return (
      <>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="/" className="text-dark fontOne text-center" id="navTitle" ><img className="img-fluid mr-3" src={thisOne} /><br />
            <h3>
              Weaver Flooring
              </h3>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning border-light"/>
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.Link href="/" className="text-white fontTwo navHover">Home</Nav.Link>

                 <Nav.Link href="/location" className="text-white fontTwo navHover">Location</Nav.Link>
              <Nav.Link href="/JobRenovations" className="text-white fontTwo navHover">Job Renovations</Nav.Link>
           
              {this.props.admin?<Nav.Link href="/adminInfo" className="text-white fontTwo navHover">Messages</Nav.Link>:null}
              {this.props.admin?<Nav.Link href="#" onClick={this.handleSignOut}className="text-white fontTwo navHover">Sign Out</Nav.Link>:null}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default NavBar;