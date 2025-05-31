import { Component } from 'react'
import { Home } from '../pages/Location'
import SignInModal from './SignIn'

class Button extends Component {
  render() {
    return (
      <div className="col-md-4" id="findMe">
        <h6 className="text-warning mt-2 fontTwo">
          <SignInModal />Location:</h6>
        {/* this is my button that goes to my location page */}
        <a href="./Location"><button className="btn btn-warning fontOne">Location</button></a>
      </div>
    )
  }
}
export default Button; 
