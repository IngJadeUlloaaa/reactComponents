import React, { useState } from 'react'

{/* 10. Cambiar Texto con un Botón
    Enunciado: Crea un botón que, al hacer clic, cambie el texto mostrado en la pantalla a otro texto predefinido. Por ejemplo, de "Hola" a "Adiós". 
*/}

function Text() {
    const [text, setText] = useState(false);

    const showText = () => {
        setText(!text);
    }

  return (
    <div>
        <button onClick={(showText)}>{text ? 'Bienvenida' : 'Despedida'}</button>
        <p style={{display: text ? 'block' : 'none'}} >hello</p>
        <p style={{display: text ? 'none' : 'block'}} >bye</p>
    </div>
  )
}

export default Text
