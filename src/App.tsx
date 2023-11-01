import './App.css';
import ConvertButton from './components/TextButton';
import tempConversion from './helpers/tempConversion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Fahrenheit to Celsius</p>
        <ConvertButton>Convert to Celsius</ConvertButton>
      </header>
    </div>
  );
}

export default App;
