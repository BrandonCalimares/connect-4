export function Disk({ color, offsetY = 0, offsetX = 0 }) {
  const COLORS = {
    red: "bg-red-400",
    yellow: "bg-yellow-400",
    redHover: "bg-red-400/50",
    yellowHover: "bg-yellow-400/50",
  };
  return (
    <div
      className={`${COLORS[color]} size-18 rounded-full absolute -z-10`}
      style={{ top: `${offsetY}px`, left: `${offsetX}px` }}
    ></div>
  );
}
