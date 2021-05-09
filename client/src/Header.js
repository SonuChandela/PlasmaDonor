import React, { Component } from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import './globcss/custome.css';
import {NavLink , Link} from "react-router-dom";

class Head extends Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" variant="light"  className="bg-bright">
            <div className="container">
                <Link to='/' className="navbar-brand">
                    <img src={process.env.PUBLIC_URL+"/images/logo/logo-dark.png"} alt=""/>
                </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <NavLink to="/" className="nav-link text-uppercase fs-2" activeStyle={{color:"#2a81ea"}}>Home</NavLink>
                <NavLink to="/list/request" className="nav-link text-uppercase fs-2"  activeStyle={{color:"#2a81ea"}}>Request Plasma</NavLink>
                <NavLink to="/list/donor" className="nav-link text-uppercase fs-2"  activeStyle={{color:"#2a81ea"}}>Donate Plasma</NavLink>
                {/* <NavLink to="/latestjobs" className="nav-link text-uppercase fs-2"  activeStyle={{color:"#2a81ea"}}>Symptoms</NavLink> */}
                {/* <Nav.Link to="/" className="nav-link text-uppercase fs-2">CONTACT</Nav.Link> */}
                <NavLink to="/register" className="nav-link nav-btn">Register Now</NavLink>
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
        )
    }
}
export default Head;