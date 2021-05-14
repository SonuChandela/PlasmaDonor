import React, { Component } from 'react';
import { Nav, Navbar, Modal , Button } from 'react-bootstrap';
import './Common.css'; 
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
    return (
      <>
        {/* modal start */}
        <Modal show={this.state.show} size="lg" onHide={this.acceptTerm}>
          <Modal.Header className="border-0" closeButton>
              {/* <Modal.Title>Modal heading</Modal.Title> */}
            </Modal.Header>
          <Modal.Body className="pt-0 pb-0">
            {/* eroll  */}
            <Enrol userType="donate"/>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.acceptTerm}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer> */}
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
                <Button className="nav-btn" onClick={this.acceptTerm}>
                  Register Now
                </Button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}
export default Head;