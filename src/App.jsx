import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); 
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-red-600 bg-black">
      <div className="bg-white shadow-lg rounded-lg p-5">
        <div className="mb-4">
          <h1>Regis Mushumo Billy Kure Nomos Calculate</h1>
          <input
            type="text"
            value={input}
            readOnly
            className="w-full p-3 mb-2 text-right bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="text-right text-gray-600">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-3 text-lg font-semibold text-white bg-orange-800 rounded-lg shadow hover:bg-red-700"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;


