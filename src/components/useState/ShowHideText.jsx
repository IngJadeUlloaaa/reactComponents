import React, { useState } from 'react'

function ShowHideText() {
    const [showText, hideText] = useState(false)
    const changeProperty = () => {
        hideText(!showText)
    }

  return (
    <div>
        <button onClick={changeProperty}>{showText ? 'Ocultar' : 'Mostrar'} Texto</button>
        {showText && <p>Hello world!</p>}
    </div>
  )
}

export default ShowHideText
