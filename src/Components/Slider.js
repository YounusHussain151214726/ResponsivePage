import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const slide =()=>{

    return (

      <div > 

        <div className="slides">
          <Carousel >
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src="https://www.saylaniwelfare.com/public_html/images/saylani/EhsaanSaylani.jpeg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src="https://www.saylaniwelfare.com/public_html/images/saylani/slider2.png"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-auto w-100"
      src="https://www.saylaniwelfare.com/public_html/images/saylani/RO_Slider.jpg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
</div>
</div>
    )
}

export default slide;