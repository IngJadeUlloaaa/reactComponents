import React, { useState } from 'react'

function InputControled() {
    const [showText, hideText] = useState('')
    const userText = (event) => {
        hideText(event.target.value)
    }
    
  return (
    <div>
        <input onChange={userText} value={showText} type="text" placeholder='write something...' />
        <p>{showText}</p>
    </div>
  )
}

export default InputControled
