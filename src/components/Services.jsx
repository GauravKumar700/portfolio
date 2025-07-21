import React from 'react'

const Services = () => {
  return (
    <section className="services section bd-container" id="services">
      <span className="section-subtitle">What i offer</span>
      <h2 className="section-title">Services</h2>

      <div className="services__container bd-grid">
        <div className="services__data">
          <i className="bx bx-laptop services__icon"></i>
          <h3 className="services__title">Full Stack Development</h3>
          <p className="services__description">
            I offer expert development services with hands-on experience building scalable, high-performance
            applications.
          </p>
          <a href="#contact" className="button">Know More</a>
        </div>

        <div className="services__data">
          <i className="bx bx-laptop services__icon"></i>
          <h3 className="services__title">Backend Development</h3>
          <p className="services__description">
            I offer expert development services with hands-on experience building scalable, high-performance
            applications.
          </p>

          <a href="#contact" className="button">Know More</a>
        </div>

        <div className="services__data">
          <i className="bx bx-palette services__icon"></i>
          <h3 className="services__title">Frontend Development</h3>

          <p className="services__description">
            I offer expert development services with hands-on experience building scalable, high-performance
            applications.
          </p>
          <a href="#contact" className="button">Know More</a>
        </div>
      </div>
    </section>
  )
}

export default Services