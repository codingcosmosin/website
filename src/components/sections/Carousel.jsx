import React from 'react';
import { carouselSlides } from '../../configs/carouselSlides';

function Carousel() {
  return (
    <div id="indexCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#indexCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carouselSlides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.image} className="d-block w-100" alt={slide.alt} style={slide.style} />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
              <h5>{slide.title}</h5>
              <p>{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#indexCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#indexCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;