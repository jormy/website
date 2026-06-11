"use client";

import { useEffect, useState } from "react";
import GradientCard from "@/components/gradientCard/GradientCard";
import Tooltip from "@/components/Tooltip";
import MakerWorldIcon from "../../../../public/icons/MakerWorldIcon";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosRocket, IoIosCube } from "react-icons/io";

export default function MakerWorld() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/makerworld")
      .then((r) => r.json())
      .then(setStats);
  }, []);

  function format(n: number) {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(n);
  }

  function timeAgo(dateString: string) {
    const diff = Date.now() - new Date(dateString).getTime();

    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }

  if (!stats) {
    return <GradientCard>Loading...</GradientCard>;
  }

  type StatProps = {
    icon: React.ReactNode;
    value: string;
    label: string;
  };

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleString("en-SG", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  function Stat({ icon, value, label }: StatProps) {
    return (
      <div className="group flex flex-col items-center text-center transition-transform hover:-translate-y-1">
        <div className="mb-1 text-3xl text-black-300 transition-colors group-hover:text-black-50">
          {icon}
        </div>

        <div className="text-md font-semibold text-black-200">{value}</div>

        <div className="text-sm text-black-400">{label}</div>
      </div>
    );
  }
  return (
    <GradientCard>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base text-black-100">
          <MakerWorldIcon className="size-4" />
          MakerWorld Stats
          <span className="text-black-300">
            <a
              href="https://makerworld.com/@jormy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowUpRightFromSquare className="size-3" />
            </a>
          </span>
        </h2>
        <span className="group relative text-sm text-black-400">
          <Tooltip text={`Updated ${formatDate(stats.updatedAt)}`}>
            <span>{timeAgo(stats.updatedAt)}</span>
          </Tooltip>
        </span>
      </div>

      <div className="ml-2 grid grid-cols-4 gap-4">
        <Stat
          icon={<HiOutlineDownload />}
          value={format(stats.downloads)}
          label="Downloads"
        />

        <Stat
          icon={<IoIosCube />}
          value={format(stats.prints)}
          label="Prints"
        />

        <Stat
          icon={<IoIosRocket />}
          value={format(stats.boosts)}
          label="Boosts"
        />

        <Stat
          icon={<FaUsers />}
          value={format(stats.followers)}
          label="Followers"
        />
      </div>
    </GradientCard>
  );
}
