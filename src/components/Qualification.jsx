import React from 'react'

const Qualification = () => {
  return (
    <section className="qualification section bd-container">
      <span className="section-subtitle">Experience and education</span>
      <h2 className="section-title">Qualification</h2>

      <div className="qualification__container bd-grid">
        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-briefcase-alt qualification__title-icon"></i>
            Work Experience
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">Software Developer Intern</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__icon"></i>
                  The Entrepreneurship Network, Noida
                </span>

                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__icon"></i>
                  March 2024 - June 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-book-bookmark qualification__title-icon"></i>
            Education
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">
                Computer Science and Engineering
              </h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__icon"></i>
                  Roorkee Institute of Technology
                </span>

                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__icon"></i>
                  Sep 2022 - Aug 2026
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Secondary High School</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__icon"></i>
                  Holy Kids International School
                </span>

                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__icon"></i>
                  April 2018 - June 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification