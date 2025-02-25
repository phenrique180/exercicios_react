import { useState } from 'react'
import './App.css'

function App() {
  const [real, setReal] = useState(0)
  const [euro, setEuro] = useState()
  const [dolar, setDolar] = useState()
  const [libra, setLibra] = useState()

  function converterEuro(){
    const euroValue = real + 6.09
    setEuro(euroValue)
  }

  function converterDolar(){
    const dolarValue = real

  }


  return (
    <>
      <h1>Conversor de Moedas</h1>
      <input type="number" min={0} id='real' value={real} onChange={(e) => setReal(e.target.value)} />
      <button onClick={converterEuro}>Euro</button>
      {euro !== undefined && <p>{real} euros valem {euro} reais</p>}
    </>
  )
}

export default App
