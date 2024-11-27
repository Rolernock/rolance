import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router'

export default function HomeScreen() {
  return (
    <section className='slider_section py-5'>
      <Container>
        <Row className='align-items-center'>
          {/* Text Section */}
          <Col md={6}>
            <div className='detail-box'>
              <h1>
                Repair and <br />
                Maintenance <br />
                Services
              </h1>
              <p>
                At Rolance Maintenance, we specialize in providing reliable
                repair and maintenance services to ensure your home or business
                operates smoothly. From fixing plumbing issues to electrical
                repairs, our expert team is here to help you maintain a safe and
                efficient environment.
              </p>
              <Button as={Link} to='/contact'>
                Contact Us
              </Button>
            </div>
          </Col>

          {/* Image Section */}
          <Col md={6}>
            <div className='img-box text-center'>
              <Image
                src='images/slider-img.png'
                alt='Repair and Maintenance Services'
                fluid
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
