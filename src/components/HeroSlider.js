import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
    <section className="hero-slider" style={sectionStyle}>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} style={{ position: 'relative' }}>
            <div style={{ ...slideStyle, backgroundImage: `url(${slide.image})` }}>
              <div style={overlayStyle}>
                <div className="container">
                  <h2 style={titleStyle}>{slide.title}</h2>
                  <p style={subtitleStyle}>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const sectionStyle = {
  marginBottom: '4rem',
};

const slideStyle = {
  height: '500px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '4rem',
  fontWeight: '800',
  letterSpacing: '4px',
  marginBottom: '0.5rem',
  textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
};

const subtitleStyle = {
  fontSize: '1.2rem',
  fontWeight: '500',
  textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
};

export default HeroSlider;
