import React, { useState } from 'react';
import '../styles/Minesweeper.css';

const GRID_SIZE = 10;

const Minesweeper = () => {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill({ revealed: false }))
  );

  const handleCellClick = (row, col) => {
    const newGrid = grid.map((rowArr, r) => rowArr.map((cell, c) => {
      if (r === row && c === col) {
        return { ...cell, revealed: true };
      }
      return cell;
    }));

    setGrid(newGrid);
  };

  return (
    <div className="minesweeper">
      <h1>Minesweeper</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell.revealed ? 'revealed' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell.revealed ? 'R' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Minesweeper;