
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, DropdownItem, Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../assets/logo192.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id='navbar'  light expand="md">
          <NavbarBrand href="/">React-Portfolio
            <img src={logo} alt='logo' width="40" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/Skills">Skills</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/Proyects">Proyects</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href="/components/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
} 