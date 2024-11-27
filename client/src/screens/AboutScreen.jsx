import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'

export default function AboutScreen() {
  return (
    <section className='about_section py-5'>
      <Container>
        <Row>
          <Col lg={5} md={6}>
            <div className='detail-box'>
              <h2>About Us</h2>
              <p>
                At Rolance Maintenance, we are committed to providing
                exceptional services that ensure your property remains safe,
                functional, and well-maintained. With over a decade of
                experience in the industry, we specialize in offering reliable,
                high-quality solutions tailored to meet the unique needs of each
                client. Whether you need expert plumbing, electrical services,
                or routine maintenance, we have the skills and expertise to get
                the job done right the first time.
              </p>
              <p>
                Our team consists of certified professionals who use
                state-of-the-art equipment to handle a wide variety of tasks. We
                take pride in our attention to detail and our commitment to
                customer satisfaction. We understand the importance of keeping
                your home or business in top condition, which is why we approach
                every project with a customer-first mindset.
              </p>
              <p>
                Choose Rolance Maintenance for a hassle-free experience and the
                peace of mind that your property is in expert hands. We’re here
                to help you maintain your property’s value and longevity while
                providing timely, professional services that you can trust.
              </p>
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className='img-box'>
              <Image src='images/about-img.jpg' alt='About Us' fluid rounded />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
