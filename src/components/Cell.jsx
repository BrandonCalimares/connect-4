import { Disk } from "./Disk.jsx";
export function Cell({ color }) {
  return (
    <div className="relative bg-[radial-gradient(circle_at_center,transparent_0_54%,#2b7fff_56%)] size-18  hover:cursor-pointer ">
      {color && <Disk color={color} />}
    </div>
  );
}
