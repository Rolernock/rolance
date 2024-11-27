import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa'

export default function ServiceScreen() {
  return (
    <div>
      <section className='py-5'>
        <Container>
          <div className='text-center mb-4'>
            <h2 className='fw-bold'>Our Services</h2>
          </div>
          <Row className='gy-4'>
            <Col sm={6} md={4} className='mx-auto'>
              <Card className='text-center shadow-sm'>
                <Card.Img
                  variant='top'
                  src='images/s1.png'
                  alt='Maintenance Service'
                  style={{
                    maxWidth: '100%',
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <Card.Title>Maintenance</Card.Title>
                  <Card.Text>
                    We provide regular maintenance services to keep your
                    property in top condition and ensure smooth operations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className='mx-auto'>
              <Card className='text-center shadow-sm'>
                <Card.Img
                  variant='top'
                  src='images/s2.png'
                  alt='Electrical Service'
                  style={{
                    maxWidth: '100%',
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <Card.Title>Electrical</Card.Title>
                  <Card.Text>
                    Our certified electricians handle everything from minor
                    repairs to major electrical installations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={4} className='mx-auto'>
              <Card className='text-center shadow-sm'>
                <Card.Img
                  variant='top'
                  src='images/s3.png'
                  alt='Plumbing Service'
                  style={{
                    maxWidth: '100%',
                    height: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Card.Body>
                  <Card.Title>Plumbing</Card.Title>
                  <Card.Text>
                    Expert plumbing services to fix leaks, unclog drains, and
                    install efficient water systems.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Info Section */}
      <section className='info_section bg-light py-5'>
        <Container>
          <h4 className='text-center mb-4'>Get In Touch</h4>
          <Row className='gy-4'>
            <Col md={4} className='text-center'>
              <FaMapMarkerAlt size={30} className='mb-2 text-primary' />
              <p>
                Murang'a, 100m east of Magunas Supermarket, near the
                intersection of Muwasco and Rubis.
              </p>
            </Col>
            <Col md={4} className='text-center'>
              <FaPhoneAlt size={30} className='mb-2 text-primary' />
              <p>+254 791483839</p>
            </Col>
            <Col md={4} className='text-center'>
              <FaEnvelope size={30} className='mb-2 text-primary' />
              <p>rolernockgoines@gmail.com</p>
            </Col>
          </Row>
        </Container>
        <div className='social-box text-center mt-4'>
          <h4>Follow Us</h4>
          <div className='d-flex justify-content-center gap-3'>
            <Link target='_black' to='https://facebook.com/rolernock'>
              <FaFacebook size={24} className='text-primary' />
            </Link>
            <Link target='_black' to='https://x.com/rolernock'>
              <FaTwitter target='_black' size={24} className='text-primary' />
            </Link>
            <Link target='_black' to='https://youtube.com/rolernock'>
              <FaYoutube target='_black' size={24} className='text-danger' />
            </Link>
            <Link target='_black' to='https://instagram.com/rolernock'>
              <FaInstagram target='_black' size={24} className='text-warning' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
