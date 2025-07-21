import React from 'react'

const Skills = () => {
  return (
    <section className="skills section bd-container" id="skills">
      <span className="section-subtitle">My Abilities</span>
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div className="skills__data">
          <i className="bx bxl-html5 skills__icon"></i>
          <h3 className="skills__title">HTML & CSS</h3>
          <p className="skills__description">
            Proficient in crafting semantic and accessible HTML with modern, responsive CSS using Tailwind &
            Bootstrap.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-react skills__icon"></i>
          <h3 className="skills__title">JavaScript & React</h3>
          <p className="skills__description">
            Skilled in writing modular JavaScript and building dynamic UIs using React.js and
            component-based architecture.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "80%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-code-block skills__icon"></i>
          <h3 className="skills__title">Next.js</h3>
          <p className="skills__description">
            Built fast, SEO-friendly, and scalable web apps using Next.js, integrating server-side rendering
            and dynamic
            routing.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "85%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-nodejs skills__icon"></i>
          <h3 className="skills__title">Node.js & Express</h3>
          <p className="skills__description">
            Experienced in creating REST APIs, managing servers, and integrating databases like MongoDB with
            Express.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-mongodb skills__icon"></i>
          <h3 className="skills__title">MongoDB</h3>
          <p className="skills__description">
            Experienced in designing schemas and working with MongoDB Atlas for scalable cloud-based NoSQL
            databases.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-git skills__icon"></i>
          <h3 className="skills__title">Git & GitHub</h3>
          <p className="skills__description">
            Comfortable with version control, branching strategies, and collaboration workflows using Git
            and GitHub.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "90%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-cloud-upload skills__icon"></i>
          <h3 className="skills__title">Vercel</h3>
          <p className="skills__description">
            Familiar with seamless frontend/backend deployment using Vercel for production-ready React and
            Next.js apps.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "95%" }}></span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-image-alt skills__icon"></i>
          <h3 className="skills__title">Cloudinary</h3>
          <p className="skills__description">
            Used Cloudinary for <br /> image hosting, transformation, and delivery in web apps with focus on
            performance.
          </p>
          <div className="skills__bar">
            <span className="skills__percentage" style={{ width: "80%" }}></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills