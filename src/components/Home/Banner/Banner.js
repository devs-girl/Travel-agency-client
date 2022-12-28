import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.png'
import banner3 from '../../../images/banner/banner3.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item className="slider">
              <img
                className="d-block w-100 h-50vh"
                src={banner1}
                alt="First slide"
              />
              <Carousel.Caption className="slider-text">
                <h1>Enjoy Vacation With BD Travel !</h1>
                <p>Travel to the any corner o fthe Bangladesh, without going around in  circles.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1>Discover Your Favourite Place With Us!</h1>
                <p>Travel to the any corner o fthe Bangladesh, without going around in  circles.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  className="slider">
              <img
                className="d-block w-100  h-50vh"
                src={banner3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>Journey To Explore Nature!</h1>
                <p>Travel to the any corner o fthe Bangladesh, without going around in  circles.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            
        </>
    );
};

export default Banner;