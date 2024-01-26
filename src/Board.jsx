import React from "react";

const Board = ({ value, handleClick }) => {
  return (
    <div>
      <button
        className="w-20 h-20 border border-gray-400"
        onClick={handleClick}
      >
        {value}
      </button>
    </div>
  );
};

export default Board;
