import React, { useState } from "react";

function Grid({ grid }) {
  return (
    <div className="board">
      {grid.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <button className="square" key={cellIndex}>
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [grid, setGrid] = useState([]);

  const rows = grid.length;
  const columns = grid[0]?.length || 0;

  const addRow = () => {
    if (grid.length === 0) {
      setGrid([[" "]]);
    } else {
      const newRow = new Array(grid[0]?.length || 0).fill(" ");
      setGrid([...grid, newRow]);
    }
  };

  const addColumn = () => {
    if (grid.length === 0) {
      setGrid([[" "]]);
    } else {
      const newGrid = grid.map((row) => [...row, " "]);
      setGrid(newGrid);
    }
  };

  return (
    <div className="game">
      <div className="menus">
        <span>{`R: ${rows}`} / {`C: ${columns}`}</span>
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>
      </div>
      <Grid grid={grid} />
    </div>
  );
}
