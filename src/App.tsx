import './App.css';
import ConvertButton from './components/TextButton';
import tempConversion from './helpers/tempConversion';

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
          <ConvertButton>Convert to Celsius</ConvertButton>
          <ConvertButton>Convert to Fahrenheit</ConvertButton>
        </div>
      </header>
    </div>
  );
}

export default App;
