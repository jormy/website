"use client";

import { getNowPlayingItem } from "@/utils/getNowPlaying";
import { TruncateString } from "@/utils/truncateString";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import visualiser from "/public/images/visualiser.gif";

interface SongInfo {
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

type NowPlayingState = SongInfo | { isPlaying: false };

const POLLING_INTERVAL = 10000;

export const NowPlaying = ({ fill = false }: { fill?: boolean }) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<NowPlayingState>({ isPlaying: false });
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchNowPlaying = async () => {
    try {
      const nowPlaying = await getNowPlayingItem();

      if (nowPlaying.isPlaying) {
        const newSong: SongInfo = {
          albumImageUrl: nowPlaying.albumImageUrl,
          artist: nowPlaying.artist,
          isPlaying: true,
          songUrl: nowPlaying.songUrl,
          title: nowPlaying.title,
        };

        setResult(newSong);
      } else {
        setResult({ isPlaying: false });
      }

      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch the currently playing item.", error);
      setError("Failed to fetch the currently playing item.");
      setResult({ isPlaying: false });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();

    intervalRef.current = setInterval(() => {
      fetchNowPlaying();
    }, POLLING_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const Loading = () => (
    <div className="hidden h-12 w-fit text-black-300 md:flex">
      <Skeleton height={128} width={128} />
      <span className="text-md pl-3">Loading...</span>
    </div>
  );

  const NotPlaying = () => (
    <div
      className={clsx([
        fill ? `size-full` : `hidden h-12 w-fit`,
        `text-black-300`,
        `md:flex`,
      ])}
    >
      <FaSpotify
        className={clsx([fill ? `hidden` : `size-6 text-green-500`])}
      />
      <div className={clsx([fill ? `` : `pl-3`])}>
        <h2 className={clsx([fill ? `mb-1 text-lg` : `text-md`])}>
          Not playing anything
        </h2>
        <p
          className={clsx([
            fill ? `block` : `hidden`,
            `text-sm text-black-400`,
          ])}
        >
          This component is a work in progress!
        </p>
      </div>
    </div>
  );

  const Playing = ({ song }: { song: SongInfo }) => (
    <div
      className={clsx([
        fill ? `flex size-full` : `hidden h-12 w-fit md:flex`,
        `text-black-300`,
      ])}
    >
      <img
        src={song.albumImageUrl}
        alt={`${song.title} album cover`}
        className={clsx([fill ? `size-32` : `h-12 w-12`, `rounded-md`])}
      />
      <div className={clsx([fill ? `pl-5` : `pl-3`])}>
        <div className="relative flex">
          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx([
              fill ? `text-lg` : `text-md`,
              `flex gap-3 pr-6 font-semibold text-black-100`,
            ])}
          >
            {TruncateString({ str: song.title, num: 30 })}
            <img src={visualiser.src} alt="Visualiser" className="size-[1em]" />
          </a>
        </div>
        <p>{song.artist}</p>
      </div>
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex w-fit text-black-300">
        <FaSpotify className={fill ? `size-full` : `size-12`} />
        <span className="text-md pl-3">{error}</span>
      </div>
    );
  }

  if (!result.isPlaying) {
    return <NotPlaying />;
  }

  return <Playing song={result as SongInfo} />;
};

export default NowPlaying;
