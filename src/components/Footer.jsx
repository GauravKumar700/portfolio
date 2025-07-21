import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container bd-container">
        <h1 className="footer__title">Gaurav Kumar</h1>
        <p className="footer__description">
          I'm Gaurav — a full-stack developer, freelancer & lifelong learner. Thanks for visiting my portfolio!
        </p>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/gaurav700/" target="_blank" className="footer__link">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/GauravKumar700" target="_blank" className="footer__link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:gauravkumar70045415@gmail.com" target="_blank" className="footer__link">
            <i className="bx bxl-gmail"></i>
          </a>
        </div>
        <p className="footer__copy">&#169; 2025 Gaurav.</p>
      </div>
    </footer>
  )
}

export default Footer