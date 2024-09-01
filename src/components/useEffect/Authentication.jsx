import React, { useEffect, useState } from 'react';

{/* 
    6. Autenticación Simulada
    Enunciado: Crea un componente que simule la autenticación del usuario. Usa useEffect para mostrar un mensaje de bienvenida cuando el usuario "inicie sesión" haciendo clic en un botón.
    Conceptos:
    Ejecución de useEffect en respuesta a un cambio de estado simulado.
    Condicionar la ejecución de useEffect en base a cambios de estado.    
*/}

function Authentication() {
    const [user, setUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const whoIam = () => {
        if (user === 'jade') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            alert('Wrong user');
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            alert('Welcome,', {user});
        } else if (user) {
            alert('Wrong user');
        }

        return () => {
            alert('Cleaning up...');
        };
    }, [isLoggedIn]); // Se ejecuta cuando cambia isLoggedIn

    return (
        <div>
            <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                type="text"
                placeholder='Write your username'
            />
            <button onClick={whoIam}>Who Am I</button>
        </div>
    );
}

export default Authentication;
