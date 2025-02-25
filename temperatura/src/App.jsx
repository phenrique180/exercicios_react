import { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState();
  const [kelvin, setKelvin] = useState()

  const converterTempF = () => {
    const fahrenheitValue = (celsius * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue);
  };

  const converterTempK = () => {
    const kelvinValue = celsius + 237.15
    setKelvin(kelvinValue)

  }

  return (
    <>
      <h1>Conversor de Temperatura</h1>
      <input
        type="number"
        min={0}
        id="celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value === '' ? '' : Number(e.target.value))}
      />
      <button onClick={converterTempF}>Converter para Fahrenheit</button>
      <button onClick={converterTempK}>Converter para Kelvin</button>
      {fahrenheit !== undefined && <p>{celsius}° Celsius é igual a {fahrenheit}° Fahrenheit</p>}
      {kelvin !== undefined && <p>{celsius}° Celsius é igual a {kelvin}° Kelvin</p>}
    </>
  );
}

export default App;
