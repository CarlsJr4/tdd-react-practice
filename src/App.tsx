import './App.css';
import TextButton from './components/TextButton';
import fahrenheitToCelsius from './helpers/fahrenheitToCelsius';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          90<sup>°</sup>
          <span>F</span>
        </h1>

        <p>Temperature converter</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <TextButton handleClick={fahrenheitToCelsius}>
            Convert to Celsius
          </TextButton>
          <TextButton handleClick={fahrenheitToCelsius}>
            Convert to Fahrenheit
          </TextButton>
        </div>
      </header>
    </div>
  );
}

export default App;
