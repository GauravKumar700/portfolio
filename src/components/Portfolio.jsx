import React from 'react'
import workImage1 from '../assets/work1.jpg'
import workImage2 from '../assets/work2.jpg'

const Portfolio = () => {
  return (
    <section className="portfolio section bd-container" id="portfolio">
      <span className="section-subtitle">My recent works</span>
      <h2 className="section-title">Portfolio</h2>

      <div className="portfolio__container bd-grid">
        <div className="portfolio__content mix web">
          <a href="https://ideaenginee.vercel.app/">
            <img src={workImage1} alt="Project Image" className="portfolio__img" />
          </a>
          <div className="portfolio__data">
            <h2 className="portfolio__title">IdeaEngine</h2>
            <h2 className="portfolio__subtitle">
              IdeaEngine guides your business journey by asking key questions about your goals and
              budget.
              It generates a personalized success roadmap using our machine learning algorithm.
            </h2>
            <a href="https://ideaenginee.vercel.app/" className="button">view Details</a>
          </div>
        </div>

        <div className="portfolio__content mix web">
          <a href="#">
            <img src={workImage2} alt="Project Image" className="portfolio__img" />
          </a>
          <div className="portfolio__data">
            <h2 className="portfolio__title">InternConnect</h2>
            <h2 className="portfolio__subtitle">
              InternConnect helps students find internships and companies hire talent effortlessly.
              A streamlined platform connecting interns and recruiters in one place.
            </h2>
            <a href="#" className="button">view Details</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio