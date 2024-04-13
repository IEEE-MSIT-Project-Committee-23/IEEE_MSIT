import React from 'react';
import HTMLFlipBook from 'react-pageflip'
import Logo from './assets/ieee-logo.png'

const Newsletter = ({ pages, heading, index }) => {
  return (
    <div className="flipbook-container">
      <HTMLFlipBook width={400} height={500} className='flipbook-container'>
        <div className='intro'>
        <img src={Logo} alt="IEEE" className='logo' />
        <p>{heading}</p>
        </div>
        {pages.map((page, index) => (
          <img key={index} src={page} alt={`Page ${index + 1}`} className="flipbook-page"  />
        ))}
        <p className='intro'>Thank you for reading!</p>
      </HTMLFlipBook>
    </div>
  );
};

export default Newsletter;
