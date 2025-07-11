import '../styles/components/Experience.scss'
import { useState } from 'react';

const experienceData = [
  {
    position:'MADURAI KAMARAJ UNIVERSITY',
    company:'RVS Kumaran Arts & Science College',
    url:'https://rvskcas.ac.in/programs-courses',
    description:'Candidate for Bachelor of Science in Computer Science from RVS Kumaran Arts & Science College, affiliated to Madurai Kamaraj University. Graduated in 2021 with a focus on frontend technologies and user-centric development.',
    date: '2018-2021',
    sprite: 'university'
  },
  {
    position: 'Software Engineer',
    company: 'VRNA Media Markts Private Limited',
    url: '#',
    description: 'Experienced in HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular, React, and Ionic for crafting responsive, user-focused applications. Skilled in Git-based collaboration and cross-functional teamwork to deliver reliable, high-quality software.',
    date: '2022-2024',
    sprite: 'research'
  },
  {
    position: 'Software Engineer',
    company: 'Shocals Private Limited',
    url: '#',
    description: `
      - Developed dynamic web and mobile applications using React, Angular, and Ionic.
      - Built RESTful APIs and integrated third-party services.
      - Focused on performance optimization and accessibility best practices.
      - Mentored junior developers and conducted code reviews.
      - Worked closely with designers to implement user-centric features.
      `,
      date: '2024-2024',
      sprite: 'research'
  }
];

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience-section">
      <div className="bg"></div>
      <div className="overlay-wrapper">
        <div className="fade-in">
          <div className="center">
            <h1 className="section-heading">Experience</h1>
            <span className="divider center"></span>
            <p className="experience-description main-desc">
              My professional journey as a Frontend Engineer includes hands-on experience in modern web technologies, collaborating with cross-functional teams, and delivering high-quality, user-focused solutions.
            </p>
          </div>
          <div className="experience-wrapper">
            <div className="timeline-line"></div>
            {experienceData.map((item, index) => (
              <div className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                {/* Left card or date */}
                <div className="timeline-col timeline-col-left">
                  {index % 2 === 0 ? (
                    <div
                      className="timeline-content-card with-pointer-left"
                      data-index={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <h2 className="experience-title">{item.position}</h2>
                      <h3 className="experience-company">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a>
                      </h3>
                      <ul className="experience-description">
                        {item.description.trim().split('\n- ').filter(Boolean).map((line, i) => (
                          <li key={i}>{line.replace(/^[-\s]*/, '')}</li>
                        ))}
                      </ul>
                      <span className="experience-date-mobile">{item.date}</span>
                    </div>
                  ) : (
                    <p className="experience-date align-date">{item.date}</p>
                  )}
                </div>
                {/* Center icon */}
                <div className="timeline-col timeline-col-center">
                  <div
                    className={`timeline-icon${hoveredIndex === index ? ' hovered' : ''}`}
                    data-index={index}
                  >
                    <div className={`sprite ${item.sprite}`}></div>
                  </div>
                </div>
                {/* Right card or date */}
                <div className="timeline-col timeline-col-right">
                  {index % 2 !== 0 ? (
                    <div
                      className="timeline-content-card with-pointer-right"
                      data-index={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <h2 className="experience-title">{item.position}</h2>
                      <h3 className="experience-company">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.company}</a>
                      </h3>
                      <ul className="experience-description">
                        {item.description.trim().split('\n- ').filter(Boolean).map((line, i) => (
                          <li key={i}>{line.replace(/^[-\s]*/, '')}</li>
                        ))}
                      </ul>
                      <span className="experience-date-mobile">{item.date}</span>
                    </div>
                  ) : (
                    <p className="experience-date align-date">{item.date}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="timeline-bottom-pointer"></div>
          </div>
        </div>
      </div>
      </section>
    
  );
};

export default ExperienceSection;


