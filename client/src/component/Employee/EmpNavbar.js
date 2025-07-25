import React, { Component } from 'react';
import classnames from 'classnames'
import '../Navber/Navber.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class EmpNavbar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
        };
      }
    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    render() { 
        return ( 
            <div>
                <Navbar className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                  })} bg="success" text="white" var expand="lg">
                <Navbar.Brand style={{color:"white"}}>MeDica Hospital Ltd</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="text-white ml-auto">
                    <Nav.Link className="text-white" href="/employee/login/home">Home</Nav.Link>
                    <Nav.Link className="text-white" href="/employee/login/employee_home">Employee</Nav.Link>
                    <Nav.Link className="text-white" href="/employee/login/about">About</Nav.Link>                    
                    <Nav.Link className="text-white" href="/employee/login/gallery">Gallery</Nav.Link>
                    <Nav.Link className="text-white" href="/employee/login/contact">Contact Us</Nav.Link>
                    <Nav.Link className="text-white" href="/">Log Out</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
 
export default EmpNavbar;