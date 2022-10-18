import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

export const MainSlider = () => {
	return (
    <Carousel className="mh-25">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="/assets/global/design1.jpg"
          alt="First slide"
					style={{height:"600px"}}
        />
        <Carousel.Caption>
          <h3>Ultra Moderen Bathroom Design</h3>
          <p>We provide you with the latest trends and designs.</p>
					<Button variant="dark">Check More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="/assets/global/design6.jpg"
          alt="Second slide"
					style={{height:"600px"}}
        />
        <Carousel.Caption>
          <h3>Flat Designs For The Best Experiences</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<Button variant="dark">Check More</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="/assets/global/design5.jpg"
          alt="Third slide"
					style={{height:"600px"}}
        />
        <Carousel.Caption>
          <h3>Modrated Designs</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
					<Button variant="dark">Check More</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
