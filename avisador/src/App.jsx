import { useState } from 'react'
import './App.css'

function App() {
  const [aviso, setAviso] = useState(false)

  

  return (
    <>
      <h1>Avisador</h1>
      <button onClick={() => setAviso(true)}>Clique aqui!</button>
      {aviso && <p>Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.</p>}
      
    </>
  )
}

export default App
