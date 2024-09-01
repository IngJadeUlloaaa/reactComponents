import React, { useEffect, useState } from 'react';

function WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Función de limpieza para eliminar el event listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []); // El array vacío asegura que se ejecute solo al montar el componente

    return (
        <div>
            <p>Ancho: {size.width}px</p>
            <p>Alto: {size.height}px</p>
        </div>
    );
}

export default WindowSize;
