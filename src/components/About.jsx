import React from 'react'
import '../styles/components/About.scss'

const About = () => {
  return (
    <section id="about-section" className="section">
  <div className="section-wrapper">
    <div className="fade-in">
      <h1 className="section-heading">Hey, I'm Sivakumar.</h1>
      <h3 className="section-subheading">
        I'm a design-minded, detail-oriented Frontend Engineer passionate about crafting clean code and seamless UI experiences.
      </h3>
      <span className="divider"></span>
      <div className="about-wrapper">
        <img className="headshot" src="/img/sk.jpg" alt="headshot" />
        <div className="about-text-wrapper">
          <p className="about-text">
            <strong>I'm a BSc Computer Science graduate:</strong> from RVS Kumaran Arts and Science College, Dindigul. I have over 2.6 years of experience in frontend development, working with technologies like React, Angular, Ionic, and JavaScript to build both web and mobile applications.
          </p>
          <p className="about-text">
            I focus on building scalable, responsive, and user-centric interfaces. My experience spans across creating structured web content using HTML, CSS, and Bootstrap, as well as dynamic apps with modern frameworks. I thrive in collaborative environments and am always eager to learn and solve challenging problems.
          </p>
          <p className="about-text">
            <strong>Outside of coding:</strong> I enjoy exploring emerging technologies and refining my design thinking. I'm passionate about building impactful solutions with teams that value clean design and smart engineering.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About 