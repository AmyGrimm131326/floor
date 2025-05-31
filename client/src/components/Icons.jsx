import { Component } from 'react';

// this is my icons component I made to render in my footer.
class Icons extends Component {
    render() {
        return (
            <div className="col-md-4 my-3">
                <p className="text-warning fontTwo mt-2">Follow us for exclusive deals:
                    <br />
                    <a href="#"><i className="text-light fab fa-facebook mr-4 icons"></i></a>
                    <a href="#"><i className="text-light fab fa-instagram mr-4 icons"></i></a>
                    <a href="#"><i className="text-light fab fa-snapchat mr-4 icons"></i></a>
                    <a href="#"><i className="text-light fab fa-twitter icons"></i></a>
                </p>
            </div>
        )
    }
}
export default Icons; 