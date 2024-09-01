import React, { useState } from 'react'
import './color.css'

function Colors() {
  const [colorList, setColorList] = useState([]);
  const [colorUser, setColorUser] = useState('');

  const addColor = () =>{
    if(colorUser.trim() === '');

    const addNewColor = {
      id: Date.now(),
      color: colorUser
    }
    setColorList([...colorList, addNewColor]);
    setColorUser('');
  }

  const deleteColor = (colorId => {
    setColorList(colorList.filter(colorUser => colorUser.id !== colorId))
  })

  return (
    <div>
      <h2>Color List</h2>
      <input onChange={(e) => setColorUser(e.target.value)} value={colorUser} type="text" placeholder='write your color...' />
      <button onClick={addColor}>Agregar</button>

      <ul>
        {colorList.map(colorUser => (
          <li key={colorUser.id}>
            {colorUser.color}
            <button onClick={() => deleteColor(colorUser.id)}>Borrar</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Colors