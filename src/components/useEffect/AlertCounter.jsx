import React, { useEffect, useState } from 'react'

{/* 
    1. Contador con Alerta Inicial
    Enunciado: Crea una aplicación que tenga un contador que se incremente cada vez que se presiona un botón. Muestra una alerta con un mensaje solo una vez, al cargar el componente, diciendo: "¡Componente montado!"
    Conceptos:
    Uso básico de useEffect para ejecutar código solo una vez cuando el componente se monta.    
*/}

function AlertCounter() {
    const [count, setCount] = useState(0);

    const userCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        alert('¡Componente montado!'); // Mostrar la alerta solo una vez
    }, []); // Array vacío para ejecutar solo al montar
    
  return (
    <div>
      <button onClick={userCount}>Click me!</button>
      <p>Count is: {count}</p>
    </div>
  )
}

export default AlertCounter
