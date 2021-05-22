import React, { Component } from 'react';
import Row from './Row.jsx';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: {
        row1: {
          box1: "-",
          box2: "-",
          box3: "-",
        },
        row2: {
          box4: "-",
          box5: "-",
          box6: "-",
        },
        row3: {
          box7: "-",
          box8: "-",
          box9: "-",
        },
      },
      isX: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(row, box) {
    this.setState(prevState => ({
      board: {
        ...prevState.board,
        [row]: {
          ...prevState.board[row],
          [box]: `${prevState.isX ? "X" : "O"}`,
        },
      },
      isX: !prevState.isX,
    }));
  }

  render() {
    const board = this.state.board;

    const winConditions =
      // if "X" wins
      Object.values(board.row1).every(box => box === "X")
      || Object.values(board.row2).every(box => box === "X")
      || Object.values(board.row3).every(box => box === "X")
      || [board.row1.box1, board.row2.box4, board.row3.box7].every(box => box === "X")
      || [board.row1.box2, board.row2.box5, board.row3.box8].every(box => box === "X")
      || [board.row1.box3, board.row2.box6, board.row3.box9].every(box => box === "X")
      || [board.row1.box1, board.row2.box5, board.row3.box9].every(box => box === "X")
      || [board.row1.box3, board.row2.box5, board.row3.box7].every(box => box === "X")

      // if "O" wins
      || Object.values(board.row1).every(box => box === "O")
      || Object.values(board.row2).every(box => box === "O")
      || Object.values(board.row3).every(box => box === "O")
      || [board.row1.box1, board.row2.box4, board.row3.box7].every(box => box === "O")
      || [board.row1.box2, board.row2.box5, board.row3.box8].every(box => box === "O")
      || [board.row1.box3, board.row2.box6, board.row3.box9].every(box => box === "O")
      || [board.row1.box1, board.row2.box5, board.row3.box9].every(box => box === "O")
      || [board.row1.box3, board.row2.box5, board.row3.box7].every(box => box === "O");
    
    // alert is wrapped in setTimeout because it prevents the DOM from updating 
    // without it, the winning "X" or "O" would not appear until the alert is closed
    if (winConditions) {
      if(setTimeout(() => alert("Game Over"), 10)){
        window.location.reload();
      }
    }

    return (
      Object.keys(this.state.board).map(row => {
        return (
          <div>
            <Row
              key={row}
              board={this.state.board}
              row={row}
              toggle={this.toggle}
            />
          </div>
        );
      })
    );
  }
}

export default Board;