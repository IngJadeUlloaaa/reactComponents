import React, { useState } from 'react'

{/* 
    9. Formulario de Registro
    Enunciado: Crea un formulario de registro que permita al usuario ingresar su nombre, email y contraseña. Al hacer clic en "Registrar", muestra los datos ingresados debajo del formulario.     
*/}
function Login() {
    const[dataList, setDataList] = useState([]);
    const[userName, setUserName] = useState('');
    const[userMail, setUserMail] = useState('');
    const[userPassword, setUserPassword] = useState('');

    const addData = (e) => {
        e.preventDefault();
        if (userName.trim() === '' && userMail.trim() === '' && userPassword.trim() === '') return;

        const addDataUser = {
            id: Date.now(),
            name: userName,
            mail: userMail,
            password: userPassword 
        }

        setDataList([...dataList, addDataUser]);
        setUserName('');
        setUserMail('');
        setUserPassword('');
    }

    const deleteDataUser = (userId) => {
        setDataList(dataList.filter(user => user.id !== userId));
    }

  return (
    <div>
        <form action="">
            <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder='write your user' />
            <input onChange={(e) => setUserMail(e.target.value)} value={userMail} type="mail" placeholder='write your mail' />
            <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} type="password" placeholder='write your password' />

            <button onClick={addData}>Entrar</button>

            <ul>
                {dataList.map((user, index) => (
                <li key={user.id}>
                    {index + 1} - {user.name} - {user.mail} - {user.password}
                    <button onClick={() => deleteDataUser(user.id)} >Borrar</button>
                </li>
                ))}
            </ul>

        </form>
    </div>
  )
}

export default Login
