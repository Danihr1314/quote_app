import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './quotes.json'
import Button from './components/Button';

function App() {

  const colors = ['#845ec2' , '#d65db1', '#ff6f91', '#ff9671', '#008f7a', '#008e9b', '#2c73d2', '#845ec2'];
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  
  const [index, setIndex] = useState(0);
  const changeQuote = () =>{
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  }

  document.body.style = `background: ${colors[randomColorIndex]}`

  return (
    <div className="App" style={{color: colors[randomColorIndex]}}>
      <div className='card'>
        <QuoteBox 
          quotes={quotes}
          index={index}
          colors={colors}
          randomColorIndex={randomColorIndex}
        />

        <Button
          changeQuote={changeQuote}
          colors={colors}
          randomColorIndex={randomColorIndex}
        />
      </div>
    </div>
  )
}

export default App
