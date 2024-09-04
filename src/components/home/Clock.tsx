import { useEffect, useState } from "react";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";

// based off the clock by @cubedhuang at https://dan.onl/

const timezone = "Singapore";

const formatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  weekday: "long",
  month: "short",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: timezone,
  timeZoneName: "short",
});

export function Clock() {
  const [isClient, setIsClient] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setIsClient(true);
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentHour = new Date(
    now.toLocaleString("en-US", { timeZone: timezone }),
  ).getHours();

  const isDaytime = currentHour >= 6 && currentHour < 19;

  return (
    <>
      {isDaytime ? <TbSunFilled /> : <TbMoonFilled />}
      <span className="ml-2 text-base">
        {isClient && formatter.format(now).replace(" at", " ·")}
      </span>
    </>
  );
}
