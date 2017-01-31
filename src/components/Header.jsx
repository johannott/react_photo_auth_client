import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  renderLoginLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <NavItem eventKey={4} href="#"><Link className="nav-link" to="/signout">Sign Out</Link></NavItem>;
    } else {
      //show a link to sign in or sign up
      return [
          <NavItem eventKey={4} href="#"><Link className="nav-link" to="/signin">Sign In</Link></NavItem>,
          <NavItem eventKey={5} href="#"><Link className="nav-link" to="/signup">Sign Up</Link></NavItem>
      ];
    }
  }

  render() {
    return (
      <Navbar defaultExpanded fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Photos Website</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Wedding</NavItem>
            <NavItem eventKey={2} href="#">Honeymoon</NavItem>
            <NavItem eventKey={3} href="#">Baby</NavItem>
            {this.renderLoginLinks()}
          </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
      authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps)(Header);
