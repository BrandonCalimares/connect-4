import { Cell } from "./Cell.jsx";
export function Board() {
  const cells = Array(6)
    .fill(null)
    .map(() => Array(7).fill(null));
  return (
    <div className="bg-blue-500 grid grid-cols-7 grid-rows-6 w-max p-3 rounded-2xl border-blue-500 border-10 shadow-[inset_0_0_6px_4px_rgba(0,0,0,0.2),-5px_5px_13px_5px_rgba(0,0,0,0.2)]">
      {cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => <Cell key={`${rowIndex}-${colIndex}`} />)
      )}
    </div>
  );
}
