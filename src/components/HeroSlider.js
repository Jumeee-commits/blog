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
    { id: 4, title: 'HEALTH', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1600', subtitle: 'Vitality and wellness for a balanced lifestyle' },
    { id: 5, title: 'SPORT', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1600', subtitle: 'Passion, energy, and the drive to excel' },
    { id: 6, title: 'FUN', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1600', subtitle: 'Joyful moments and exciting experiences' },
    { id: 7, title: 'TECHNOLOGY', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600', subtitle: 'Innovation and the digital future' },
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
