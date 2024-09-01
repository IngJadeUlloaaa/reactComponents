import React, { useState } from 'react'

{/* 11. Contador de Caracteres
    Enunciado: Crea un campo de texto que muestre el número de caracteres que el usuario ha escrito. A medida que el usuario escribe, el contador debe actualizarse automáticamente.
 */}

function StringCounter() {
    const [string, setString] = useState('');

    const str = (e) => {
        setString(e.target.value)
    }

  return (
    <div>
      <input onChange={str} type="text" placeholder='write something' />
      <p>{string.length}</p>
    </div>
  )
}

export default StringCounter