import React, { useState, useEffect } from 'react'
import { navigation } from '../data/navigation'
import '../styles/components/Navigation.scss'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  //scroll funciton
  window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navigation');
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.section)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(`${sections[i]}-section`)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-wrapper">
        <div className="nav-brand">
          <a href="#intro-section" onClick={() => scrollToSection('intro')}>
            <img src="/img/logo-white.png" alt="Logo" />
          </a>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {navigation.map((nav) => (
            <a
              key={nav.section}
              href={`#${nav.section}-section`}
              className={`nav-link ${activeSection === nav.section ? 'active' : ''}`}
              onClick={() => scrollToSection(nav.section)}
            >
              {nav.title}
            </a>
          ))}
        </div>

        <div 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 