"use client";

import { getNowPlayingItem } from "@/utils/getNowPlaying";
import { TruncateString } from "@/utils/truncateString";
import { useEffect, useRef, useState } from "react";
import { FaSpotify } from "react-icons/fa";
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

const Loading = () => (
  <div className="hidden h-12 w-fit text-black-300 md:flex">
    <FaSpotify className="size-6 text-green-500" />
    <span className="text-md pl-3">Loading...</span>
  </div>
);

const NotPlaying = () => (
  <div className="hidden h-12 w-fit text-black-300 md:flex">
    <FaSpotify className="size-6 text-green-500" />
    <span className="text-md pl-3">Not playing anything</span>
  </div>
);

const Playing = ({ song }: { song: SongInfo }) => (
  <div className="hidden h-12 w-fit text-black-300 md:flex">
    <img
      src={song.albumImageUrl}
      alt={`${song.title} album cover`}
      className="h-12 w-12 rounded-md"
    />
    <div className="pl-3">
      <div className="relative flex">
        <a
          href={song.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md flex gap-3 pr-6 font-bold text-black-100"
        >
          {TruncateString({ str: song.title, num: 30 })}
          <img
            src={visualiser.src}
            alt="Song Cover"
            className="h-[1em] w-[1-em]"
          />
        </a>
      </div>
      <p>{song.artist}</p>
    </div>
  </div>
);

export const NowPlaying = () => {
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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex w-fit text-black-300">
        <FaSpotify className="h-12 w-12" />
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
