import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Gkitchen from '../Gkitchen.jpg';
import abike from '../abike.png';

  
function ControlledCarousel() {
  const [index, setIndex] = "";

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gkitchen }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to Mt-Glamorous Kitchen</h3>
          <p>Your satisfaction is our priority!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abike }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>CONTACT US</h3>
          <p>Lets make your event glamorous.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


  
export default ControlledCarousel