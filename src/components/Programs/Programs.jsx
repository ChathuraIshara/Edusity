import React from 'react'
import './programs.css';
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';
import programicon1 from '../../assets/program-icon-1.png';
import programicon2 from '../../assets/program-icon-2.png';
import programicon3 from '../../assets/program-icon-3.png';

function Programs() {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1}></img>
            <div className='caption'>
                <img src={programicon1}></img>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2}></img>
            <div className='caption'>
                <img src={programicon2}></img>
                <p>Masters Degree</p>
            </div>
           
        </div>
        <div className='program'>
            <img src={program3}></img>
            <div className='caption'>
                <img src={programicon3}></img>
                <p>Post Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs