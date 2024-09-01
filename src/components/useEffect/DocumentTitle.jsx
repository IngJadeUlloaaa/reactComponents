import React, { useEffect, useState } from 'react';

function DocumentTitle() {
    const [title, setTitle] = useState(''); // Inicializar el título como una cadena vacía

    const newTitle = (e) => {
        setTitle(e.target.value); // Actualizar el estado del título basado en el valor del campo de entrada
    }

    useEffect(() => {
        document.title = title; // Actualizar el título del documento con el valor del estado 'title'
    }, [title]); // Ejecutar el efecto solo cuando el estado 'title' cambie

    return (
        <div>
            <input 
                onChange={newTitle} 
                value={title} 
                type="text" 
                placeholder='Escribe algo' 
            />
        </div>
    );
}

export default DocumentTitle;
