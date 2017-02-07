import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  renderLoginLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <NavItem eventKey={4} href="/signout">Sign Out</NavItem>;
    } else {
      //show a link to sign in or sign up
      return [
          <NavItem eventKey={4} href="/signin">Sign In</NavItem>,
          <NavItem eventKey={5} href="/signup">Sign Up</NavItem>
      ];
    }
  }

  render() {
    return (
      <header className="custom_nav">
        <Navbar defaultExpanded fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Photos Website</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
             <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Wedding</NavItem>
                <NavItem eventKey={2} href="#">Honeymoon</NavItem>
                <NavItem eventKey={3} href="#">Baby</NavItem>
              </Nav>
              <Nav pullRight>{this.renderLoginLinks()}</Nav>
            </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
      authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);
