import { useState } from 'react';
import './App.css';
import TextButton from './components/TextButton';
import fahrenheitToCelsius from './helpers/fahrenheitToCelsius';

function App() {
  const [temp, setTemp] = useState(90);
  const [unit, setUnit] = useState('F');

  const toggleTemp = () => {
    if (unit === 'F') {
      setUnit('C');
      setTemp(fahrenheitToCelsius(temp));
    } else {
      setUnit('F');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {temp}
          <sup>°</sup>
          <span data-testid="tempUnit">{unit}</span>
        </h1>

        <p>Temperature converter</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <TextButton handleClick={toggleTemp}>Toggle Temperature</TextButton>
        </div>
      </header>
    </div>
  );
}

export default App;
