import React, { useState } from 'react';

function ActivateButton() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <input 
                onChange={handleChange} 
                value={inputValue} 
                type="text" 
                placeholder="Write something..."
            />
            <button disabled={!inputValue.trim()}>
                Click Me
            </button>
        </div>
    )
}

export default ActivateButton;
