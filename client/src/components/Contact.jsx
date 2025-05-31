import { Component } from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
// this is my online policy
function Policy() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {/* this is my online policy */}
            <Button variant="warning" className="fontTwo mb-2" onClick={handleShow}>
                Online Policy
        </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title className="text-dark fontOne bg-grey">Online policy</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-dark fontOne bg-warning">This app is for you to be able to leave your information and for a representive to contact you to schedule an appointment to have a free estimate by one of our highly skilled installers.</Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

class Contact extends Component {
    render() {
        return (
// this is my component that has my phone and email in it.
            <div className="col-md-4 mt-2 ">
                <h6 className="text-warning fontTwo">Contact Us:</h6>
                <p className="text-light fontOne">574-529-0000</p>
                <h6 className="text-warning fontTwo">Email:</h6>
                <p className="text-light fontTwo">WeaverFlooring@gmail.com</p>
                <Policy />
            </div>
        )
    }
}
export default Contact; 