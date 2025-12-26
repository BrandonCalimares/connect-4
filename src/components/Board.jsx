import { useState } from "react";
import { Cell } from "./Cell.jsx";
import { Disk } from "./Disk.jsx";

export function Board() {
  const cells = Array(7)
    .fill(null)
    .map(() => Array(6).fill(null));

  const [hoveredCol, setHoveredCol] = useState(null);

  return (
    <div className="relative grid grid-cols-7 w-max rounded-3xl border-blue-400 border-10 shadow-[inset_0_0_6px_4px_rgba(0,0,0,0.2),-5px_5px_13px_5px_rgba(0,0,0,0.2)] overflow-hidden">
      {hoveredCol != null && <Disk color="red" position={hoveredCol * 72} />}
      {cells.map((col, colIndex) => (
        <div
          key={colIndex}
          onMouseEnter={() => setHoveredCol(colIndex)}
          onMouseLeave={() => setHoveredCol(null)}
          className="grid grid-rows-6"
        >
          {col.map((cell, rowIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
}
