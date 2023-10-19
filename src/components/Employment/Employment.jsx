import React from 'react';
import './employment.css';

const Employment = () => {
  return (
        <div className='employment__container'>
        <h1 className='employment__title'>Employment History</h1>
        
        <div className="job__container">
            <div className="job__container-inner">
                <h3 className='job'>Computer technician at Pal Media d.o.o</h3>
                <p>Sep 2002 - Jun 2010</p>
            </div>
            <div className="job__container">
                <div className="job__container-inner">
                    <h3 className='job'>Mechanic of industrial Machines at Lek d.d</h3>
                    <p>Oct 2018 - Jul 2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employment;