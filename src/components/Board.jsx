import { useState } from "react";
import { Cell } from "./Cell.jsx";
import { Disk } from "./Disk.jsx";
import { verifyWin } from "../logic/board.js";
import { getOffsetY } from "../logic/board.js";
import confetti from "canvas-confetti";

export function Board({ winner, setWinner, turn, setTurn, cells, setCells }) {
  const [hoveredCol, setHoveredCol] = useState(null);

  const handleClick = () => {
    const newCells = [...cells];
    const row = newCells[hoveredCol].findLastIndex((cell) => cell == null);
    if (row < 0) return;
    newCells[hoveredCol][row] = turn;
    setCells(newCells);
    if (verifyWin(newCells, turn, hoveredCol, row)) {
      setWinner(turn);
      localStorage.setItem(
        "cells",
        JSON.stringify(
          Array(7)
            .fill(null)
            .map(() => Array(6).fill(null))
        )
      );
      localStorage.setItem("turn", "red");
      confetti({ origin: { y: 0.7 }, spread: 60 });
      return;
    }
    const newTurn = turn === "red" ? "yellow" : "red";
    setTurn(newTurn);
    localStorage.setItem("cells", JSON.stringify(newCells));
    localStorage.setItem("turn", newTurn);
  };

  return (
    <div className="relative grid grid-cols-7 w-max rounded-3xl border-blue-400 border-10 shadow-[inset_0_0_6px_4px_rgba(0,0,0,0.2),-5px_5px_13px_5px_rgba(0,0,0,0.2)] overflow-hidden">
      {hoveredCol != null && !winner && (
        <Disk
          color={`${turn}Hover`}
          offsetX={hoveredCol * 72}
          offsetY={getOffsetY(cells, hoveredCol)}
        />
      )}
      {cells.map((col, colIndex) => (
        <div
          key={colIndex}
          onClick={!winner ? handleClick : undefined}
          onMouseEnter={!winner ? () => setHoveredCol(colIndex) : undefined}
          onMouseLeave={!winner ? () => setHoveredCol(null) : undefined}
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
