import React, { useEffect, useState } from 'react';

{/* 
    5. Cambio de Color de Fondo
    Enunciado: Crea un botón que cambie el color de fondo de la página cada vez que se haga clic en él. Utiliza useEffect para establecer el color de fondo al montar el componente y limpiarlo cuando el componente se desmonte.
    Conceptos:
    Modificación del estilo del cuerpo del documento desde useEffect.
    Limpieza del estilo del cuerpo para volver al color original.    
*/}

function BackgroundColor() {
    const [color, setColor] = useState('white');

    const background = () => {
        let listColor = ['black', 'gray', 'red', 'blue', 'yellow', 'orange'];
        let randomColor = listColor[Math.floor(Math.random() * color.length)];
        setColor(randomColor);
    };

    useEffect(() => {
        document.body.style.backgroundColor = color;
        return () => {
            document.body.style.backgroundColor = 'white';
        }

    }, [color]);

    return (
        <div>
            <button onClick={background}>Change Color</button>
        </div>
    );
}

export default BackgroundColor;
