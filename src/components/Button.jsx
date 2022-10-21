import React from 'react';

const Button = ({changeQuote, colors, randomColorIndex}) => {
  return (
    <div className='button'>
      <button onClick={changeQuote} style={{background: colors[randomColorIndex]}}><i className="fa-solid fa-shuffle"></i></button>
    </div>
  );
};

export default Button;