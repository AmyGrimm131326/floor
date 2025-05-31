import { Button, Modal } from "react-bootstrap"
import { useState } from 'react'
import AdminCard from './AdminCard'

// this is my orderModal to display to the admin that the message has already been completed.
function MessageModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {name} = props.Message
  return (
    <>
      <Button className="text-danger bg-transparent border-0" onClick={handleShow}>
        {name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completed Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <AdminCard Message={props.Message} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MessageModal;