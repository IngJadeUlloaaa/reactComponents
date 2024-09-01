import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

    const userClick = () =>{
        setCount(count + 1);
    }

    {/* 7. Contador de Clics
        Enunciado: Crea una aplicación que cuente cuántas veces se ha hecho clic en un botón. Muestra el número total de clics en la pantalla. */
    }
  return (
    <div>
      <button onClick={(userClick)}>Click</button>
      <p>{count}</p>
    </div>
  )
}

export default Count
