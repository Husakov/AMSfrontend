import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class App extends Component {
  state={
    isOpen:true,

  };
  toggle=true;
  render() {
    return (
      <div>
          <Navbar  className="navbar1"  expand="md" >
              <NavbarBrand href="/">AMS Engineering</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>

                  <Nav className="ml-auto" navbar>

                        <NavItem>
                          <NavLink href="">Home</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="">About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="">Contact</NavLink>
                      </NavItem>

                  </Nav>
              </Collapse>
          </Navbar>
      </div>
    );
  }
}

export default App;
