import React from 'react';

const QuoteBox = ({quotes, index, colors, randomColorIndex}) => {
  return (
    <div className='quote-box'>
      <h1><i className="fa-solid fa-quote-left"></i> {quotes[index].quote}</h1>
      <p>{quotes[index].author}</p>
    </div>
  );
};

export default QuoteBox;