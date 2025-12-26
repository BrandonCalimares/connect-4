export function Disk({ color, position }) {
  const COLORS = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };
  return (
    <div
      className={`${COLORS[color]} size-18 rounded-full absolute -z-10 left-1`}
      style={{ left: `${position}px` }}
    ></div>
  );
}
