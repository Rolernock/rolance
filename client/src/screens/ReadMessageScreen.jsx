import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row, Card, ListGroup, Button, Container } from 'react-bootstrap'
import { FaRegCalendarAlt, FaTrashAlt } from 'react-icons/fa'
import { format } from 'date-fns'
import { readMessages, deleteMessage } from '../slices/messageSlice'
import Spinner from '../components/Spinner'
import DeleteMessageModal from '../components/DeleteMessageModal'

export default function ReadMessageScreen() {
  const dispatch = useDispatch()
  const { msg } = useSelector(state => state.messages)
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  useEffect(() => {
    dispatch(readMessages())
  }, [])
  const handleDelete = async msgId => {
    await dispatch(deleteMessage(msgId))
    await dispatch(readMessages())
    handleCloseModal()
  }
  return (
    <>
      {!msg ? (
        <Spinner />
      ) : (
        <Container>
          <h2 className='text-center fw-bold'>Messages</h2>
          <Row>
            {msg.map((sms, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className='my-3'>
                  <Card.Body>
                    <Card.Title>
                      {sms.name} - {sms.email}
                    </Card.Title>
                    <Card.Subtitle>{sms.phone}</Card.Subtitle>
                    <Card.Text>{sms.message}</Card.Text>
                  </Card.Body>
                  <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                      Sent On:{' '}
                      <small className='muted'>
                        <FaRegCalendarAlt className='mx-1 mb-1' />
                        {format(sms.createdAt, 'MMMM dd, yyyy hh:mm a')}
                      </small>
                      <Button
                        className='btn-sm'
                        variant='danger'
                        onClick={handleShowModal}
                      >
                        <FaTrashAlt />
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
                <DeleteMessageModal
                  show={showModal}
                  handleClose={handleCloseModal}
                  handleConfirm={() => handleDelete(sms._id)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  )
}
