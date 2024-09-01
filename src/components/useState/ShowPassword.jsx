import React, { useState } from 'react'

{/* 
    13. Mostrar/Ocultar Contraseña
    Enunciado: Crea un campo de entrada de contraseña con un botón que permita mostrar u ocultar la contraseña. Cambia el tipo de input entre password y text dependiendo del estado.
*/}

function ShowPassword() {
    const [password, setPassword] = useState(false);

    const userPassword = () => {
        setPassword(!password);
    }

  return (
    <div>
        <input 
            type={password ? 'text' : 'password'} 
            placeholder='write your password'
        />
        <button onClick={userPassword}>{userPassword ? 'Hide' : 'Show'}Password</button>

    </div>
  )
}

export default ShowPassword