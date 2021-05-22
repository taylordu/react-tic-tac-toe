import React from 'react';
import Box from './Box.jsx';

function Row( {board, row, toggle} ) {
  return (
    Object.keys(board[row]).map(box => {
      return (
          <Box
            key={box}
            board={board}
            row={row}
            box={box}
            toggle={toggle}
          />
      );
    })
  );
}

export default Row;