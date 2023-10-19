import React from 'react';
import './education.css';

const Education = () => {
  return (
    <div className='education__container'>
        <h1 className='education__title'>Education</h1>
        
        <div className="school__container">
            <div className="school__container-inner">
                <h3 className='school'>Primary School in Lendava</h3>
                <p className="date">Sep 2002 - Jun 2010</p>
            </div>
            <div className="school__container">
                <div className="school__container-inner">
                    <h3 className='school'>Computer Technician at Vocational Technical School</h3>
                    <p className="date">Sep 2010 - Jun 2014</p>
                </div>
            </div>
            <div className="school__container">
                <div className="school__container-inner">
                    <h3 className='school'>IT Engineer at Vocational College</h3>
                    <p className="date">Oct 2014 - Present</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education;