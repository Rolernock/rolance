import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router'

export default function Header() {
  return (
    <Container fluid>
      <Navbar expand='lg' className='header_bottom py-3'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='fw-bold '>
            ROLANCE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={NavLink} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to='/about'>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to='/contact'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}
