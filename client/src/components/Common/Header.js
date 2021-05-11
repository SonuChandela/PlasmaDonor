import React, { Component } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';
// import '../../globcss/App.css'; 
import { NavLink, Link } from 'react-router-dom';
import Enrol from '../Register/Register';

class Head extends Component {
  constructor(props) {
    super(props);
    this.acceptTerm = this.acceptTerm.bind(this);
    this.state = {
      show: 'false',
    };
  }
  acceptTerm() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    console.log(this.state.show);
    return (
      <>
        {/* modal start */}
        <Modal show={this.state.show} size="lg">
          {/* <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header> */}
          <Modal.Body>
            {/* eroll  */}
            <Enrol />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.acceptTerm}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>

        {/* modal close  */}
        <Navbar collapseOnSelect expand="lg" variant="light" className="bg-bright sticky-top">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={process.env.PUBLIC_URL + '/images/logo/logo-dark.png'} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink to="/" className="nav-link text-uppercase" activeStyle={{ color: '#2a81ea' }}>
                  Home
                </NavLink>
                <NavLink to="/list/request" className="nav-link text-uppercase" activeStyle={{ color: '#2a81ea' }}>
                  Request List
                </NavLink>
                <NavLink to="/list/donor" className="nav-link text-uppercase" activeStyle={{ color: '#2a81ea' }}>
                  Donor List
                </NavLink>
                <NavLink to="/register" className="nav-link nav-btn">
                  Register Now
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
export default Head;
