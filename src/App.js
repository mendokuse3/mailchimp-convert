import './App.css';
import { useState, useEffect } from 'react';
import { convert } from './tools/convert';

const App = () => {
  const [HTML, setHTML] = useState('');
  const [input, setInput] = useState('');
  const [showAsHTML, setShowAsHTML] = useState(false);

  const handleChange = (event) => {
    setInput(event.currentTarget.value)
  }

  useEffect(() => {
    if(input !== ''){
      setHTML(convert(input))
    } else {
      setHTML('')
    }
  }, [input])

  return (
    <div className="App">
      <textarea placeholder='Paste in your markdown here' value={input} onChange={handleChange} data-testid='input-area' className='text-input' />
      {showAsHTML && <div dangerouslySetInnerHTML={{ __html: `${HTML}`}} data-testid='show-rendered-html' />}
      {!showAsHTML && <div className='display-linebreak' data-testid='show-html-tags'>
        {HTML}
      </div>}
      <button onClick={() => setShowAsHTML(!showAsHTML)} data-testid='switch-html'>{showAsHTML ? "Show The HTML" : "See How It Looks"}</button>
    </div>
  );
}

export default App;
