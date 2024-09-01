import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // first exercise
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState('')

  // second exercise
  const [showName, quitName] = useState('')
  const handleNombreChange = (event) =>{
    setNombre(event.target.value)
  }

  const userName = () => {
    quitName(nombre)
  }

  return (
    <>
      <section>
        <h2>Contador con UseState</h2>
        <p>El Contador es: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Disminuir</button>
      </section>

      <section>
        <h2>Formulario de Entrada de Texo</h2>
        <input onChange={handleNombreChange} value={nombre} type="text" name="text" id="text" placeholder='Escriba su Nombre'/>
        <button onClick={userName}>Enviar</button>
        <p>Hola {showName}</p>
      </section>
    </>
  )
}

export default App
