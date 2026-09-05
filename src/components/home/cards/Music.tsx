"use client";

import GradientCard from "@/components/gradientCard/GradientCard";
import { motion as m } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoChevronDown, IoMusicalNotes } from "react-icons/io5";

type Period = "week" | "month" | "sixMonths" | "year";
type MusicType = "albums" | "tracks" | "artists";

type MusicItem = {
  name: string;
  artist?: string;
  album?: string;
  playcount: number;
  image: string;
  url: string;
};

const periods: { value: Period; label: string }[] = [
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
  { value: "sixMonths", label: "6 Months" },
  { value: "year", label: "Year" },
];

const musicTypes: { value: MusicType; label: string }[] = [
  { value: "albums", label: "Albums" },
  { value: "tracks", label: "Tracks" },
  { value: "artists", label: "Artists" },
];

function MusicSkeleton({ showArtist }: { showArtist: boolean }) {
  return (
    <div
      aria-live="polite"
      className="relative w-full min-w-0 max-w-full overflow-hidden"
    >
      <span className="sr-only">Loading music</span>
      <div
        aria-hidden="true"
        className="flex w-full min-w-0 max-w-full gap-4 overflow-hidden pb-1 pr-12"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="w-24 shrink-0 animate-pulse">
            <div className="aspect-square w-full rounded-lg bg-black-900" />
            <div className="mt-2">
              <div className="h-6 w-full rounded bg-black-900" />
              {showArtist && <div className="h-5 w-4/5 rounded bg-black-900" />}
              <div className="h-4 w-3/5 rounded bg-black-900" />
            </div>
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black-950 via-black-950/85 to-transparent"
      />
    </div>
  );
}

export default function TopMusic() {
  const [items, setItems] = useState<MusicItem[]>([]);
  const [musicType, setMusicType] = useState<MusicType>("albums");
  const [period, setPeriod] = useState<Period>("month");
  const [loading, setLoading] = useState(true);
  const [scrollIndicators, setScrollIndicators] = useState({
    left: false,
    right: false,
  });
  const railRef = useRef<HTMLDivElement>(null);

  const selectedMusicType = musicTypes.find(
    (item) => item.value === musicType,
  )!;

  useEffect(() => {
    async function fetchMusic() {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/lastfm/top-${musicType}?period=${period}`,
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch top ${musicType}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(`Failed to fetch Last.fm ${musicType}:`, error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMusic();
  }, [musicType, period]);

  const updateScrollIndicators = useCallback(() => {
    const rail = railRef.current;

    if (!rail) return;

    const nextIndicators = {
      left: rail.scrollLeft > 1,
      right: rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 1,
    };

    setScrollIndicators((currentIndicators) =>
      currentIndicators.left === nextIndicators.left &&
      currentIndicators.right === nextIndicators.right
        ? currentIndicators
        : nextIndicators,
    );
  }, []);

  const scrollRail = useCallback((direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) return;

    const distance = rail.clientWidth * 0.8;

    rail.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (loading || !railRef.current) return;

    const rail = railRef.current;
    const resizeObserver = new ResizeObserver(updateScrollIndicators);

    resizeObserver.observe(rail);
    updateScrollIndicators();

    return () => resizeObserver.disconnect();
  }, [items, loading, updateScrollIndicators]);

  return (
    <GradientCard>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="flex shrink-0 items-center gap-2 text-base text-black-100">
          <IoMusicalNotes />
          <span>Top</span>
          <span className="relative">
            <label className="sr-only" htmlFor="top-music-type">
              Music type
            </label>
            <select
              id="top-music-type"
              value={musicType}
              onChange={(event) =>
                setMusicType(event.target.value as MusicType)
              }
              className="appearance-none border-b border-black-600 bg-transparent py-0.5 pr-5 text-base leading-5 text-black-100 outline-none transition hover:border-black-400 focus:border-black-300"
            >
              {musicTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <IoChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 size-3 -translate-y-1/2 text-black-400"
            />
          </span>
        </h2>
        <div className="relative w-32 shrink-0">
          <label className="sr-only" htmlFor="top-albums-period">
            Timeframe
          </label>
          <select
            id="top-albums-period"
            value={period}
            onChange={(event) => setPeriod(event.target.value as Period)}
            className="w-full appearance-none rounded-full border border-black-800 bg-black-950 px-3 py-1.5 pr-9 text-sm text-black-50 outline-none transition hover:bg-black-800 focus:border-black-500"
          >
            {periods.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <IoChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-black-300"
          />
        </div>
      </div>
      <div className="text-md w-full min-w-0 text-black-300">
        {loading ? (
          <MusicSkeleton showArtist={musicType !== "artists"} />
        ) : items.length === 0 ? (
          <div>No {selectedMusicType.label.toLowerCase()} found.</div>
        ) : (
          <div className="relative w-full min-w-0 max-w-full overflow-hidden">
            <div
              ref={railRef}
              onScroll={updateScrollIndicators}
              className="flex w-full min-w-0 max-w-full gap-4 overflow-x-auto scroll-smooth pb-1 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, index) => (
                <m.a
                  key={`${item.artist ?? "artist"}-${item.name}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group w-24 shrink-0"
                >
                  <img
                    src={item.image}
                    alt={
                      item.artist ? `${item.name} by ${item.artist}` : item.name
                    }
                    className="aspect-square w-full rounded-lg object-cover"
                  />

                  <div className="mt-2">
                    <p className="truncate font-medium">
                      {index + 1}. {item.name}
                    </p>

                    {item.artist && (
                      <p className="truncate text-sm text-gray-500">
                        {item.artist}
                      </p>
                    )}

                    <p className="text-xs text-gray-400">
                      {item.playcount.toLocaleString()} plays
                    </p>
                  </div>
                </m.a>
              ))}
            </div>
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black-950 via-black-950/85 to-transparent transition-opacity duration-200 ${
                scrollIndicators.left ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black-950 via-black-950/85 to-transparent transition-opacity duration-200 ${
                scrollIndicators.right ? "opacity-100" : "opacity-0"
              }`}
            />
            <m.button
              type="button"
              onClick={() => scrollRail("left")}
              aria-label="Scroll music left"
              initial={{ opacity: 0, scale: 1, backgroundColor: "#050505" }}
              animate={{ opacity: scrollIndicators.left ? 1 : 0 }}
              transition={{ opacity: { duration: 0.2, ease: "easeOut" } }}
              whileHover={{ scale: 1.05, backgroundColor: "#3d3d3d" }}
              whileTap={{ scale: 0.9 }}
              className={`absolute bottom-2 left-2 z-10 rounded-full border border-black-800 p-2 text-center text-sm text-black-50 ${
                scrollIndicators.left
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
            >
              <FaChevronLeft />
            </m.button>
            <m.button
              type="button"
              onClick={() => scrollRail("right")}
              aria-label="Scroll music right"
              initial={{ opacity: 0, scale: 1, backgroundColor: "#050505" }}
              animate={{ opacity: scrollIndicators.right ? 1 : 0 }}
              transition={{ opacity: { duration: 0.2, ease: "easeOut" } }}
              whileHover={{ scale: 1.05, backgroundColor: "#3d3d3d" }}
              whileTap={{ scale: 0.9 }}
              className={`absolute bottom-2 right-2 z-10 rounded-full border border-black-800 p-2 text-center text-sm text-black-50 ${
                scrollIndicators.right
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
            >
              <FaChevronRight />
            </m.button>
          </div>
        )}
      </div>
    </GradientCard>
  );
}
