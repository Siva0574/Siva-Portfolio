import React from 'react'
import { config } from '../data/config'
import '../styles/components/Contact.scss'

const Contact = () => {
  return (
    <section id="contact-section" className="section">
      <div 
        className="bg" 
        data-anchor-target="#contact-section"
        data-bottom-top="transform: translate3d(0px, -150px, 0px);"
        data-top-bottom="transform: translate3d(0px, 150px, 0px);"
      ></div>
      <div className="overlay-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Get In Touch</h1>
          <span className="divider"></span>
          <div className="contact-wrapper">
            <div className="contact-content">
              <p className="contact-text">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="contact-links">
                <a href={`mailto:${config.email}`} className="contact-link">
                  <img src="/img/icons/email.svg" alt="email" />
                  {config.email}
                </a>
              </div>
              <div className="social-links">
                {config.social.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={`/img/icons/${social.title}.svg`} alt={social.title} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 