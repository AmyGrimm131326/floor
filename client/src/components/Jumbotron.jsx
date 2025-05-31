import { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap'
import elkWithLocation from '../img/elkWithLocation.png'
// this is on my location page.
class Jumbo extends Component {
    render() {
        return (
            <Jumbotron fluid className="text-center jumbo">
                <Container className="bg-warning">
         
                    <img className="img-fluid" id="map" src={elkWithLocation} alt="map" />
                    <p><a className="text-dark" href="/">Home Page</a></p>
                </Container>
            </Jumbotron>
        )
    }
}
export default Jumbo;