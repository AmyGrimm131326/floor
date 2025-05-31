import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import api from '../api/api';
// this is where i am pulling the information from the home page and seding it to my admin page.
function Information(){
  const [inputs, setInputs] = useState({});
const [ message, setMessage ]= useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const submitMessage = (e) => {
    e.preventDefault()
    api.newMessage(inputs).then(data => {
      setMessage(data.data.success);
      console.log(data.data)
      
    })
  }

  return (
    <>
    {
      message? <h2 className="text-center my-5">{message}</h2> :
<Form onSubmit={e => submitMessage(e)}>
  <Form.Group>
    <Form.Label className="text-primary fontOne" >Full Name</Form.Label>
    <Form.Control  onChange={e => handleChange(e)} name="name" placeholder="First &amp; Last Name" required/>
  </Form.Group>
  <Form.Group>
    <Form.Label className="text-primary fontOne" >Email</Form.Label>
    <Form.Control  onChange={e => handleChange(e)} name="email" placeholder="Email" type="email" required/>
 
  </Form.Group>
  <Form.Group>
    <Form.Label className="text-primary fontOne">Phone Number</Form.Label>
    <Form.Control name="phoneNumber" type="tel" placeholder="PhoneNumber" onChange={e => handleChange(e)} required/>   
    <Form.Text>
   <h6 className="text-danger text-center fontOne">Your personal information will never be shared by this business.</h6> 
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.Label name="message" className="text-primary fontOne">Message</Form.Label>
    {/* <Form.Control className="bg-warning" type="password" placeholder="Message" cols="50" rows="10" /> */}

    <textarea name="message" className="form-control" id="message" cols="50" rows="10" onChange={e => handleChange(e)} required placeholder="Leave A Message..."></textarea>
  </Form.Group>
  <Form.Text className="text-danger fontOne text-center
  ">
  <h4>
    In the message box please provide us with exact number of rooms you are considering for an estimate, along with any additional information you would like to include.
     </h4>
    </Form.Text>

  <Button variant="success mb-5 mt-3" type="submit">
    Submit
  </Button>

</Form>
    }
</>
 )
    }

  export default Information;
    