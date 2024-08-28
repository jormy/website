"use client";

import { useEffect, useState } from "react";
import { getNowPlayingItem } from "@/utils/getNowPlaying";
import { TruncateString } from "@/utils/truncateString";
import { FaSpotify } from "react-icons/fa";
import visualiser from "/public/images/visualiser.gif";

interface SongInfo {
  albumImageUrl: string;
  artist: string;
  isPlaying: true;
  songUrl: string;
  title: string;
}

type NowPlayingState = SongInfo | { isPlaying: false };

const POLLING_INTERVAL = 10000;

export const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<NowPlayingState>({ isPlaying: false });
  const [prevSong, setPrevSong] = useState<NowPlayingState>({
    isPlaying: false,
  });

  const fetchNowPlaying = async () => {
    try {
      const nowPlaying = await getNowPlayingItem();

      if (
        nowPlaying.isPlaying &&
        nowPlaying.songUrl !== (prevSong as SongInfo).songUrl
      ) {
        const newSong: SongInfo = {
          albumImageUrl: nowPlaying.albumImageUrl,
          artist: nowPlaying.artist,
          isPlaying: true,
          songUrl: nowPlaying.songUrl,
          title: nowPlaying.title,
        };

        setResult(newSong);
        setPrevSong(newSong);
      } else if (!nowPlaying.isPlaying) {
        setResult({ isPlaying: false });
        setPrevSong({ isPlaying: false });
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching the now playing item:", error);
      setResult({ isPlaying: false });
      setPrevSong({ isPlaying: false });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying();

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-fit text-denim-300">
      {loading && <p>Loading...</p>}
      {!loading && !result.isPlaying && (
        <>
          <FaSpotify className="h-12 w-12" />
          <span className="text-md pl-3">
            Not playing <br /> anything
          </span>
        </>
      )}
      {!loading && result.isPlaying && (
        <>
          <img
            src={result.albumImageUrl}
            alt={`${result.title} album cover`}
            className="h-12 w-12 rounded-md"
          />
          <div className="pl-3">
            <div className="relative flex">
              <a
                href={result.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md flex gap-3 pr-6 font-bold text-denim-200"
              >
                {TruncateString({ str: result.title, num: 30 })}
                <img
                  src={visualiser.src}
                  alt="Song Cover"
                  className="h-[1em] w-[1-em]"
                />
              </a>
            </div>
            <p>{result.artist}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
