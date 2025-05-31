import { Component } from 'react'
import AdminCard from '../components/AdminCard'
import MessageModal from '../components/MessageModal'
import api from "../api/api"

class AdminPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incompleteMessages: [],
      completeMessages: []
    }
  }
  // this is my admin page and the card it displays it is updating it.
  componentDidMount() {
    api.getMessages().then(data => {
      document.querySelector('title').innerText = "New Messages (0)"
      let incomplete = data.data.filter(message => !message.complete)
      let complete = data.data.filter(message => message.complete)
      this.setState({ incompleteMessages: incomplete, completeMessages: complete });
    })
  }
  // this is for the tab at top of page to display how many messages there are.
  componentDidUpdate(prevState) {
    if (this.state.incompleteMessages !== prevState.incompleteMessages) {
      document.querySelector('title').innerText = `New Messages (${this.state.incompleteMessages.length})`
    }
  }
  render() {
    return (
      <>
        {this.props.admin ?
          <div className="container-fluid" id="adminPage">
            <h3 className="text-danger text-center">Estimate Needed</h3>
            <div className="row justify-content-center">
              {this.state.incompleteMessages.map((Message, i) => {
                return <AdminCard key={i} Message={Message} />
              })}
            </div>
            <div className="text-primary">Previous Messages</div>
            <ul>
              {this.state.completeMessages.map((Message, i) => {
                return <li key={i}><MessageModal Message={Message} /></li>
              })}
            </ul>
          </div> : <div className="mt-5 text-center ml-5 mr-5 mb-5"><h1>Must be Signed In as Admin to be able to view this page.</h1></div>}
      </>
    )
  }
}
export default AdminPage; 