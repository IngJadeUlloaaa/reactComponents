import React, { useEffect, useState } from 'react'

{/* 
    3. Temporizador Simple
    Enunciado: Crea un temporizador que se incremente automáticamente cada segundo. Usa useEffect para inicializar el temporizador cuando el componente se monte y para limpiar el temporizador cuando el componente se desmonte.
    Conceptos:
    Configuración de un temporizador con setInterval en useEffect.
    Limpieza del temporizador con la función de retorno de useEffect.    
*/}

function SimpleTemporizator() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <div>
        <p>Counter: {count}</p>
    </div>
  )
}

export default SimpleTemporizator
