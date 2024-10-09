import React from 'react';
import '../assets/Css/MainContent.css';
import Slider from 'react-slick';

function MainContent() {
  const images = [
    require('../assets/slideshow1.jpg'),
    require('../assets/slideshow2.jpg'),
    require('../assets/slideshow3.jpg'),
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='MainContent'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} className="slideshow-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainContent;
