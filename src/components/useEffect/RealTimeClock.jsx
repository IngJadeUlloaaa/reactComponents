import React, { useState, useEffect } from 'react';

function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Función que actualiza la hora actual
    const updateClock = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };

    // Configura un temporizador que actualiza cada segundo
    const intervalId = setInterval(updateClock, 1000);

    // Limpia el temporizador cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // Array vacío para ejecutar solo en el montaje

  return (
    <div>
      <h1>Reloj en Tiempo Real</h1>
      <p>Hora actual: {currentTime}</p>
    </div>
  );
}

export default RealTimeClock;
