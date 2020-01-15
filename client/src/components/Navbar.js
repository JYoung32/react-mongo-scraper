import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText,
  Button
} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="sticky-top">
        <NavbarBrand href="/">MERN Scraper</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Button color="primary" className="m-3">Scrape</Button>{' '}
            <Button color="primary" className="m-3">Clear</Button>{' '}
            <NavItem>
              <NavLink className="m-3">
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem className="m-3">
              <NavLink>
                <Link to="/savedArticles">Saved Articles</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;