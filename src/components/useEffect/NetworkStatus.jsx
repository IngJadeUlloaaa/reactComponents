import React, { useState, useEffect } from 'react';

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Funciones para manejar los cambios de conexión
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Agregar eventos para manejar cambios en el estado de conexión
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Limpiar eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Array vacío para ejecutar solo en el montaje

  return (
    <div>
      <h1>Estado de Conexión</h1>
      {isOnline ? (
        <p style={{ color: 'green' }}>Estás en línea</p>
      ) : (
        <p style={{ color: 'red' }}>No tienes conexión a internet</p>
      )}
    </div>
  );
}

export default NetworkStatus;
