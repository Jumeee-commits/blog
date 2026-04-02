import React from 'react';
import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { id: 1, title: 'LIFE', image: '/images/life.png', subtitle: 'Modern living and workspace trends' },
    { id: 2, title: 'FASHION', image: '/images/fashion.png', subtitle: 'The latest in style and elegance' },
    { id: 3, title: 'TRAVEL', image: '/images/travel.png', subtitle: 'Adventures from around the world' },
  ];

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div className="slide-item" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="slide-overlay">
                <div className="container">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
