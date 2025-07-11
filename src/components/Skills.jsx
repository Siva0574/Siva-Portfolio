import React from 'react';
import { skills } from '../data/skills';
import '../styles/components/Skills.scss';

const Skills = () => {
  return (
    <section id="skills-section" className="section">
      <div className="section-wrapper">
        <div className="fade-in">
          <h1 className="section-heading">Skills</h1>
          <span className="divider"></span>

          <div className="skills-wrapper">
            {/* Development */}
            <div className="skills-column">
              <h2 className="skills-heading">
                <span className="sprite dev"></span>
                <span>Development</span>
              </h2>
              <ul className="skills-list">
                {skills.development.map((skill, index) => (
                  <li className="skills-item" key={index}>{skill.item}</li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div className="skills-column list-section">
              <h2 className="skills-heading">
                <span className="sprite tools"></span>
                <span>Tools</span>
              </h2>
              <ul className="skills-list2">
                {skills.tools.map((tool, index) => (
                  <li className="skills-item2" key={index}>
                    <img className="item-svg" src="img/icons/checkmark.svg" alt="checkmark" />
                    {tool.item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
