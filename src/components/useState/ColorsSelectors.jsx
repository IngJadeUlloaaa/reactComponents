import React, { useState } from 'react';
import './color.css'

function ColorsSelectors() {
    /*const [color, setColor] = useState(''); // Estado inicial para el color vacío
    let rojo = "#ef233c";
    let verde = "#007200";
    let amarillo = "#ffd60a";

    const colorList = {
        rojo: rojo,
        verde: verde,
        amarillo: amarillo
    };

    const statusColor = (e) => {
        setColor(colorList[e.target.value]); // Actualiza el estado con el color seleccionado
    }*/

    const [color, setColor] = useState(''); // Estado inicial para el color vacío
    let rojo = "#ef233c";
    let verde = "#007200";
    let amarillo = "#ffd60a";

    const colorList = {
        rojo: rojo,
        verde: verde,
        amarillo: amarillo
    };

    const statusColor = (e) => {
        setColor(colorList[e.target.value]); // Actualiza el estado con el color seleccionado
    }


    return (
        <div className='father-container' style={{ backgroundColor: color }}> 
            <form action="" className='login'>
                <div className='child'>
                    <label htmlFor="" className='mail'>introduce tu correo</label>
                    <input type="mail" placeholder='introduce tu correo' />  

                    <label htmlFor="" className='password'>introduce tu contraseña</label>
                    <input type="password" placeholder='introduce tu contraseña' />
                    
                    <input type="submit" value="Enviar" className='button'/>
                </div>
            </form>

            <select name="colorList" onChange={statusColor}>Colores
            <option>Seleccione</option>
                <option value="rojo">Rojo</option>
                <option value="verde">Verde</option>
                <option value="amarillo">Amarillo</option>
            </select>
        </div>
    );
}

export default ColorsSelectors;

