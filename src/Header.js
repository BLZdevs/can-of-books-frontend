import React from 'react';
import { Navbar, Nav, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBook.css'

class Header extends React.Component {
  render() { 
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='headNav'>My Favorite Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Col>
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            </Col>
            <Col>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            </Col>
            <Col>
            <Nav.Link as={Link} to="/Profile" className="nav-link">Profile</Nav.Link>
            </Col>
            <Col>
            <Row>
            <AuthButtons/>
            </Row>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
