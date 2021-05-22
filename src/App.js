import React, { Component } from 'react';
import Board from './Board.jsx';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontFamily: 'cursive' }}>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
