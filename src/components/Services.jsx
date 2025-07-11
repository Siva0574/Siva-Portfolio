import React, { useEffect, useRef } from 'react';
import { services } from '../data/services';
import '../styles/components/Services.scss';

const Services = () => {
  const bgRef = useRef(null);

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    const speed = 0.3
    if (bgRef.current) {
      bgRef.current.style.transform = `translateY(-${scrollY * speed}px)`
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])


  return (
    <section id="services-section" className="section">
      <div className="bg" ref={bgRef}></div> {}

      <div className="overlay-wrapper">
        <h1 className="section-heading">What I Do</h1>
        <span className="divider"></span>
        <div className="services-wrapper">
          {services.map((row, rowIndex) => (
            <div key={rowIndex} className="service-row">
              {row.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="service-column">
                  <div className={`sprite ${service.sprite}`}></div>
                  <h2 className="service-heading">{service.heading}</h2>
                  <p
                    className="service-text"
                    dangerouslySetInnerHTML={{ __html: service.text }}
                  ></p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
