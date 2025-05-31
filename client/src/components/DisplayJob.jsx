import { Component } from 'react';
 import { Carousel } from 'react-bootstrap';
 import floorOne from '../img/floorOne.jpeg'
 import floorTwo from '../img/floorTwo.jpeg'


// this is my carousel to display the before and after pics.
class DisplayJob extends Component {
  render() {
    return (
      
       <Carousel className="mt-5, mb-5">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={floorTwo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Before</h3>
      <p>This is the first one.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={floorTwo}
      alt="Second slide"
    />
   {/* this is how you can stack the pics on top of each other and see the before and after. */}
    {/* <img
      className="d-block w-100"
      src={floorTwo}
      alt="Second slide"
    /> */}

    <Carousel.Caption>
      <h3>After</h3>
      <p>This is the first after pic.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
    <img
      className="d-block w-100"
      src={floorTwo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Before</h3>
      <p>this is the second before.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    
    <img
      className="d-block w-100"
      src={floorOne}
      alt="Forth slide"
    />

    <Carousel.Caption>
      <h3>After</h3>
      <p>After second pic.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  
    <img
      className="d-block w-100"
      src={floorOne}
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3>Before</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={floorOne}
      alt="Sixth slide"
    />

    <Carousel.Caption>
      <h3>After</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
    <img
      className="d-block w-100"
      src={floorOne}
      alt="Seventh slide"
    />

    <Carousel.Caption>
      <h3>Before</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>

    <img
      className="d-block w-100"
      src={floorOne}
      alt="Eighth slide"
    />

    <Carousel.Caption>
      <h3>After</h3>
      <p>Eighth Slide</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
     
    )
  }
}
export default DisplayJob;