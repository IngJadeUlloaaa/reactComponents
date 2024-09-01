import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState(''); // Para guardar la operación actual

    const addition = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
        setOperation('suma'); // Guardar que la operación actual es una suma
    };

    const mainer = () => {
        setResult(parseFloat(num1) - parseFloat(num2));
        setOperation('resta'); // Guardar que la operación actual es una resta
    };

    return (
        <div>
            <input 
                onChange={(e) => setNum1(e.target.value)} 
                value={num1} 
                type="text" 
                placeholder='num1' 
            />
            <input 
                onChange={(e) => setNum2(e.target.value)} 
                value={num2} 
                type="text" 
                placeholder='num2' 
            />
            <button onClick={addition}>Sumar</button>
            <button onClick={mainer}>Restar</button>

            {result !== null && operation === 'suma' && (
                <p>La suma es: {result}</p>
            )}
            {result !== null && operation === 'resta' && (
                <p>La resta es: {result}</p>
            )}
        </div>
    );
}

export default Calculator;
