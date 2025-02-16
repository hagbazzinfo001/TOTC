 import Simons from '../assets/images/Simons.svg'
 import appleStore from '../assets/images/appleStore.svg';
 import googlePlay from '../assets/images/googlePlay.svg';
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/css/Price.css'

import Slider from "react-slick";
import Testimony from "./Testimony";

import React from 'react';
import { Link } from 'react-router-dom';
  
// Define your data and slider settings outside or at the beginning of your component
const testimonies = [
  { imgSrc: Simons, name: "Bulkin Simons", paragraph: "Great service!" },
  { imgSrc: Simons, name: "Jane Smith", paragraph: "Highly recommend!" },
  { imgSrc: Simons, name: "Alice Johnson", paragraph: "Very satisfied!" },
  { imgSrc: Simons, name: "Bob Brown", paragraph: "Excellent support!" },
  { imgSrc: Simons, name: "Charlie Davis", paragraph: "Will use again!" },
  { imgSrc: Simons, name: "Dana White", paragraph: "Fantastic experience!" },
  { imgSrc: Simons, name: "Eve Black", paragraph: "Loved it!" },
  { imgSrc: Simons, name: "Frank Green", paragraph: "Top-notch service!" },
  { imgSrc: Simons, name: "Grace Lee", paragraph: "Very professional!" },
  { imgSrc: Simons, name: "Hank Miller", paragraph: "Highly efficient!" },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default: Show 4 slides on desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet: Below 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides on tablets
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Mobile: Below 768px
        settings: {
          slidesToShow: 1, // Show 2 slides on mobile
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  
  

const TestimonyCarousel = () => {
  return (
    <>
  <div id="testimony-carousel">
        <p>What our students have to say</p>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            imgSrc={testimony.imgSrc}
            name={testimony.name}
            paragraph={testimony.paragraph}
          />
        ))}
      </Slider>

    </div>
          <div id="app">
          <p>APP is available for free</p>
           <div>
            <Link to="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app-link">
            <img src= {googlePlay}alt="Download on the Apple App Store" /> IOS APP
            </Link>
            
            <Link to="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="app-link">
              <img src={appleStore} alt="Get it on Google Play" /> Android APP
            </Link>
          </div> 
         </div>
    </>
  
  );
};

export default TestimonyCarousel;

