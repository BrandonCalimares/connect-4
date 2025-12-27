import { Board } from "./components/Board.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { useState } from "react";
import "./index.css";

function App() {
  const prevCells = JSON.parse(localStorage.getItem("cells"));
  const prevTurn = localStorage.getItem("turn");
  const [cells, setCells] = useState(
    prevCells ||
      Array(7)
        .fill(null)
        .map(() => Array(6).fill(null))
  );
  const [turn, setTurn] = useState(prevTurn || "red");
  const [winner, setWinner] = useState(null);

  return (
    <>
      {winner && (
        <WinnerModal
          winner={winner}
          setWinner={setWinner}
          setTurn={setTurn}
          setCells={setCells}
        />
      )}
      <h1 className="text-4xl text-center mb-10 font-bold text-blue-500">
        Connect 4
      </h1>
      <Board
        winner={winner}
        setWinner={setWinner}
        turn={turn}
        setTurn={setTurn}
        cells={cells}
        setCells={setCells}
      />
    </>
  );
}

export default App;
