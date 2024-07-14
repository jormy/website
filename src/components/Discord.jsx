import { useLanyard } from "react-use-lanyard";

const USER_ID = "743010360340250725";

//TODO: replace colors with svg icons
const statusColors = {
    online: "bg-[#43b581]",
    idle: "bg-[#faa61a]",
    dnd: "bg-[#f04747]"
};

const getStatusColor = (status) => {
    if (!status) return "bg-[#747f8d]";

    const str = statusColors[status];

    if (!str) return "bg-[#747f8d]";

    return str;
};

export default function Discord() {
    const { status: lanyard } = useLanyard({
        userId: USER_ID,
        socket: true
    });

    return (
        <div className={`w-5 h-5 bottom-[-3px] right-[-10px] ring-[6px] ring-midnight absolute rounded-full ${getStatusColor(lanyard?.discord_status)} cursor-pointer`}></div>
    );
}
