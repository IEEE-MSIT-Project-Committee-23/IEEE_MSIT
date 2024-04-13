import React from 'react'   
import './style.css';
import Newsletter from './Newsletter';
import newslettersData from './data';

const Newsletters = () => {
  return (
    <div className='page'>
    <h1 className='heading'>IEEE Newsletters</h1>
    <div className='newsletters'>
    {newslettersData.map((newsletter, index) => (
      <div key={index}>
        <Newsletter pages={newsletter.pages} index={index} heading={newsletter.heading}/>
      </div>
    ))}
  </div>
    </div>
    
  )
}

export default Newsletters
