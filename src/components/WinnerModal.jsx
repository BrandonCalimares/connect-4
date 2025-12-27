export function WinnerModal({ winner, setWinner, setTurn, setCells }) {
  const COLORS = {
    red: "text-red-500",
    yellow: "text-yellow-500",
  };
  return (
    <section className="w-full h-full absolute z-10 bg-black/60 backdrop-blur-xs top-0 left-0 flex justify-center items-center">
      <div className="flex flex-col bg-slate-800 text-stone-200 text-2xl p-10 rounded-2xl border-2 border-blue-500 gap-5">
        <span className="text-center">
          Winner: <strong className={COLORS[winner]}>{winner}</strong>
        </span>
        <button
          onClick={() => {
            setWinner(null);
            setTurn("red");
            setCells(
              Array(7)
                .fill(null)
                .map(() => Array(6).fill(null))
            );
          }}
          className="border-2 border-stone-200 cursor-pointer rounded-md hover:bg-stone-200 hover:text-slate-800 transition-colors p-2"
        >
          Reset Game
        </button>
      </div>
    </section>
  );
}
