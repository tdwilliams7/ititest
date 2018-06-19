import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class TopBar extends Component {
  // usually only use a construtor if receiving props
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
          style={{ backgroundColor: 'white' }}
        >
          <NavbarBrand href="/" style={{ color: 'rgb(17, 110, 182)' }}>
            Everdays
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{ color: 'rgb(17, 110, 182)' }}>
                  Annoucements
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
