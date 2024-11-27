import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { sendMessage } from '../slices/messageSlice'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialState = { name: '', phone: '', email: '', message: '' }
  const [formData, setFormData] = useState(initialState)
  const { name, phone, email, message } = formData
  const handleChange = evt => {
    const { name, value } = evt.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    dispatch(sendMessage(formData))
    navigate('/')
  }
  return (
    <section className='py-5'>
      <Container>
        {/* Heading */}
        <div className='text-center mb-4'>
          <h2 className='fw-bold'>Contact Us</h2>
        </div>

        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Control
                  name='name'
                  value={name}
                  type='text'
                  onChange={handleChange}
                  placeholder='Name'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='phone'>
                <Form.Control
                  name='phone'
                  value={phone}
                  type='text'
                  onChange={handleChange}
                  placeholder='Phone Number'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Control
                  name='email'
                  value={email}
                  type='email'
                  onChange={handleChange}
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='message'>
                <Form.Control
                  as='textarea'
                  rows={4}
                  name='message'
                  onChange={handleChange}
                  value={message}
                  placeholder='Message'
                  className='message-box'
                />
              </Form.Group>
              <Button variant='primary' type='submit' className='w-100'>
                SEND
              </Button>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col md={6}>
            <div className='mt-3'>
              <h5>Get In Touch</h5>
              <p>
                Whether you have questions or need support, feel free to reach
                out. We're here to help with all your repair and maintenance
                needs.
              </p>
              <ul className='list-unstyled'>
                <li className='mb-3'>
                  <FaMapMarkerAlt className='me-2 text-primary' />
                  <span>
                    Murang'a, 100m east of Magunas Supermarket, near the
                    intersection of Muwasco and Rubis.
                  </span>
                </li>
                <li className='mb-3'>
                  <FaPhoneAlt className='me-2 text-primary' />
                  <span>+254 791483839</span>
                </li>
                <li>
                  <FaEnvelope className='me-2 text-primary' />
                  <span>rolernockgoines@gmail.com</span>
                </li>
              </ul>
              <div className='social-box mt-4'>
                <h5>Follow Us</h5>
                <div className='d-flex gap-3'>
                  <a href='https://facebook.com' className='text-primary'>
                    <i className='fa fa-facebook fa-2x'></i>
                  </a>
                  <a href='https://twitter.com' className='text-primary'>
                    <i className='fa fa-twitter fa-2x'></i>
                  </a>
                  <a href='https://youtube.com' className='text-danger'>
                    <i className='fa fa-youtube fa-2x'></i>
                  </a>
                  <a href='https://instagram.com' className='text-danger'>
                    <i className='fa fa-instagram fa-2x'></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
