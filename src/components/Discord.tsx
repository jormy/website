"use client";

import { useLanyard } from "react-use-lanyard";

const USER_ID = "743010360340250725";

const statusColors: { [key: string]: string } = {
  online: "bg-[#43b581]",
  idle: "bg-[#faa61a]",
  dnd: "bg-[#f04747]",
  offline: "bg-[#747f8d]",
};

const getStatusColor = ({ status }: { status: string }) => {
  if (!status) return statusColors.offline;

  const str = statusColors[status];

  if (!str) return statusColors.offline;

  return str;
};

export default function Discord() {
  const { status: lanyard } = useLanyard({
    userId: USER_ID,
    socket: true,
  });

  return (
    <>
      <div
        className={`absolute bottom-[-3px] right-[-10px] h-5 w-5 rounded-full ring-[6px] ring-denim-950 ${getStatusColor(
          { status: lanyard?.discord_status || "offline" }
        )} cursor-pointer`}
      ></div>
    </>
  );
}
