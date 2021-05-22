import React from 'react';
 
function Box( {board, row, box, toggle} ) {
  return (
    <button
      style={{
        height: "100px",
        width: "100px",
        background: "#ffffff",
        border: "solid black 1px",
        fontFamily: "cursive", 
        fontSize: "32px",
      }}
      onClick={() => toggle(row, box)}>
        {board[row][box]}
    </button>
  );
}

export default Box;