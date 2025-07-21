import React from 'react'
import aboutImage from '../assets/about.jpg'

const About = () => {
  return (
    <section className="about section bd-container" id="about">
      <h2 className="section-title">About me</h2>

      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>Full-stack Developer <br /></span>
            I'm Gaurav Kumar, a passionate full-stack developer
            focused on building dynamic and impactful web experiences. From intuitive frontends with React
            and Next.js to powerful backends using Node.js.
            <br />
            <br />
            I enjoy turning complex challenges into
            clean, efficient solutions. Outside of coding, I'm a curious learner who enjoys exploring new
            ideas and technologies.
            <br />
            <br />
            I believe great development blends creativity with logic—and I aim to bring both
            to every project I work on. Every day is a chance to learn, build, and create something
            meaningful.
          </p>
        </div>

        <img src={aboutImage} alt="About me image" className="about__img" />
      </div>
    </section>
  )
}

export default About