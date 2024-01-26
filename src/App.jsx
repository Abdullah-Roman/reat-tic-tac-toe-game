import React, { useState } from "react";
import Board from "./Board";

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null));

  const [next, setNext] = useState(true);

  const winner = calculateWinner(square);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player " + (next ? "X" : "O");
  }

  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (next) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setNext(!next);
  };
  return (
    <>
      <div className="max-w-[600px] mx-auto mt-10">
        {status}
        <div className="flex">
          <Board handleClick={() => handleClick(0)} value={square[0]} />
          <Board handleClick={() => handleClick(1)} value={square[1]} />
          <Board handleClick={() => handleClick(2)} value={square[2]} />
        </div>
        <div className="flex">
          <Board handleClick={() => handleClick(3)} value={square[3]} />
          <Board handleClick={() => handleClick(4)} value={square[4]} />
          <Board handleClick={() => handleClick(5)} value={square[5]} />
        </div>
        <div className="flex">
          <Board handleClick={() => handleClick(6)} value={square[6]} />
          <Board handleClick={() => handleClick(7)} value={square[7]} />
          <Board handleClick={() => handleClick(8)} value={square[8]} />
        </div>
      </div>
    </>
  );
};

export default App;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
