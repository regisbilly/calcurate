import React, { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState(""); 

  const clearDisplay = () => {
    setDisplay(""); 
  };

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value); 
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display)); 
    } catch (error ) {
      setDisplay("Error"); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-80 bg-white rounded-lg shadow-lg p-4">
        <input
          type="text"
          value={display}
          disabled
          className="w-full bg-gray-100 text-right text-3xl py-4 px-6 mb-4 rounded-lg focus:outline-none"
        />

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={clearDisplay}
            className="bg-blue-600 text-white py-4 text-xl rounded-lg hover:bg-red-400"
          >
            C
          </button>
          <button
            onClick={() => appendToDisplay("7")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            7
          </button>
          <button
            onClick={() => appendToDisplay("8")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            8
          </button>
          <button
            onClick={() => appendToDisplay("9")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            9
          </button>
          <button
            onClick={() => appendToDisplay("/")}
            className="bg-green-500 text-white py-4 text-xl rounded-lg hover:bg-yellow-400"
          >
            /
          </button>

          <button
            onClick={() => appendToDisplay("4")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            4
          </button>
          <button
            onClick={() => appendToDisplay("5")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            5
          </button>
          <button
            onClick={() => appendToDisplay("6")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            6
          </button>
          <button
            onClick={() => appendToDisplay("*")}
            className="bg-yellow-800 text-white py-4 text-xl rounded-lg hover:bg-yellow-400"
          >
            *
          </button>

          <button
            onClick={() => appendToDisplay("1")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            1
          </button>
          <button
            onClick={() => appendToDisplay("2")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            2
          </button>
          <button
            onClick={() => appendToDisplay("3")}
            className="bg-gray-300 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            3
          </button>
          <button
            onClick={() => appendToDisplay("-")}
            className="bg-gray-800 text-white py-4 text-xl rounded-lg hover:bg-yellow-400"
          >
            -
          </button>

          <button
            onClick={() => appendToDisplay("0")}
            className="bg-gray-300 py-4 text-xl col-span-2 rounded-lg hover:bg-gray-400"
          >
            0
          </button>
          <button
            onClick={() => appendToDisplay(".")}
            className="bg-gray-800 py-4 text-xl rounded-lg hover:bg-gray-400"
          >
            .
          </button>
          <button
            onClick={calculateResult}
            className="bg-green-500 text-white py-4 text-xl rounded-lg hover:bg-yellow-800"
          >
            =
          </button>

          <button
            onClick={() => appendToDisplay("+")}
            className="bg-yellow-500 text-white py-4 text-xl rounded-lg hover:bg-yellow-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;