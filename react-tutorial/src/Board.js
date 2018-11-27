import React, { Component } from 'react';
import Square from './Square.js'

class Board extends Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {[0, 1, 2].map(row =>
          <div className="board-row">
            {[0, 1, 2].map(col => 
              this.renderSquare(col + row + (row * 2))
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Board