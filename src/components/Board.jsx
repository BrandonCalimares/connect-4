import { useState } from "react";
import { Cell } from "./Cell.jsx";
import { Disk } from "./Disk.jsx";

export function Board() {
  const [cells, setCells] = useState(
    Array(7)
      .fill(null)
      .map(() => Array(6).fill(null))
  );

  const [hoveredCol, setHoveredCol] = useState(null);

  const [turn, setTurn] = useState("red");

  const handleClick = () => {
    const newCells = [...cells];
    const row = newCells[hoveredCol].findLastIndex((cell) => cell == null);
    if (row < 0) return;
    newCells[hoveredCol][row] = turn;
    setCells(newCells);
    if (verifyWin(hoveredCol, row)) {
      alert(`${turn.toUpperCase()} wins!`);
      return;
    }
    setTurn(turn == "red" ? "yellow" : "red");
  };

  const getOffsetY = (colIndex) => {
    const row = cells[colIndex].findLastIndex((cell) => cell == null);
    return row < 0 ? 0 : row * 72;
  };

  const verifyWin = (col, row) => {
    // Check horizontal
    let i = col;
    let count = 0;
    while (i < 7 && cells[i][row] == turn) {
      count++;
      i++;
    }
    i = col - 1;
    while (i >= 0 && cells[i][row] == turn) {
      count++;
      i--;
    }
    if (count >= 4) return true;

    // Check vertical
    i = row;
    count = 0;
    while (i < 6 && cells[col][i] == turn) {
      count++;
      i++;
    }
    i = row - 1;
    while (i >= 0 && cells[col][i] == turn) {
      count++;
      i--;
    }
    if (count >= 4) return true;

    // Check diagonal
    i = row;
    let j = col;
    count = 0;
    while (i < 6 && j < 7 && cells[j][i] == turn) {
      count++;
      i++;
      j++;
    }
    i = row - 1;
    j = col - 1;
    while (i >= 0 && j >= 0 && cells[j][i] == turn) {
      count++;
      i--;
      j--;
    }
    if (count >= 4) return true;

    // Check second diagonal
    i = row;
    j = col;
    count = 0;
    while (i < 6 && j >= 0 && cells[j][i] == turn) {
      count++;
      i++;
      j--;
    }
    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < 7 && cells[j][i] == turn) {
      count++;
      i--;
      j++;
    }
    if (count >= 4) return true;
    return false;
  };

  return (
    <div className="relative grid grid-cols-7 w-max rounded-3xl border-blue-400 border-10 shadow-[inset_0_0_6px_4px_rgba(0,0,0,0.2),-5px_5px_13px_5px_rgba(0,0,0,0.2)] overflow-hidden">
      {hoveredCol != null && (
        <Disk
          color={turn}
          offsetX={hoveredCol * 72}
          offsetY={getOffsetY(hoveredCol)}
        />
      )}
      {cells.map((col, colIndex) => (
        <div
          key={colIndex}
          onClick={handleClick}
          onMouseEnter={() => setHoveredCol(colIndex)}
          onMouseLeave={() => setHoveredCol(null)}
          className="grid grid-rows-6"
        >
          {col.map((cell, rowIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              color={cells[colIndex][rowIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
