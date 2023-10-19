import React from 'react';
import './skillsBar.css';

const SkillsBar = () => {
  return (
    <div className='container'>
        <h1 className="title-text">Languages I speak</h1>

        <div className="skill-box">
            <span className='title'>English</span>
            <div className="skill-bar">
                <span className="skill-per english">
                    <span className="tooltip">95%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className='title'>German</span>
            <div className="skill-bar">
                <span className="skill-per german">
                    <span className="tooltip">80%</span>
                </span>
            </div>
        </div>
        <div className="skill-box">
            <span className='title'>Croatian</span>
            <div className="skill-bar">
                <span className="skill-per croatian">
                    <span className="tooltip">95%</span>
                </span>
            </div>
        </div>

    </div>
  )
}

export default SkillsBar;