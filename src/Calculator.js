// src/Calculator.js
import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // ✅ import from mathjs
import './App.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = evaluate(input); // ✅ safer expression evaluation
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button key={index} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
