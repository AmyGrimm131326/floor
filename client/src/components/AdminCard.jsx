import { Component } from 'react';
import { Card, Button } from 'react-bootstrap'
import api from "../api/api"

// this is my admin page card that displays on my admin page.
class AdminCard extends Component {
  // this is my onclick for the admin to say the Message has been completed.
  handleClick = (e) => {
    console.log("complete");
    // this is my api that updates my Message and changes complete to true.
    api.completeMessage(e.target.value).then(data => {
      console.log(data.data.success)
      location.reload()
    })
  }
  // this is my delete button.
  handleDelete = (e) => {
    console.log("delete");
    api.deleteMessage(e.target.value).then(data => {
      console.log(data.data)
      location.reload()
    })
  }
  render(props) {
    // this is me deconstruting my props.Message so I dont have to keep typing it over and over.
    const { _id, email, name, phoneNumber, message, complete } = this.props.Message;
    return (
      <Card className="col-md-8">
        <Card.Body>
          <Card.Title>Message Information</Card.Title>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>Name: {name}</li>
              <li>Email: {email}</li>
              <li>Phone Number: {phoneNumber}</li>
              <li>Message: {message}</li>
              <li>Responded To: <span className={!complete ? "text-danger" : "text-success"}>{complete ? 'yes' : 'No'}</span></li>
            </ul>
          </div>
          {complete ? null : <Button onClick={e => this.handleClick(e)} className="btn mr-5 mt-5 bg-success" value={_id}>Respond</Button>
          }
          <Button value={_id} onClick={e => this.handleDelete(e)} variant="danger mt-5">Delete</Button>
        </Card.Body>
      </Card>
    )
  }
}
export default AdminCard;