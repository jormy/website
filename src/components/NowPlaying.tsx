"use client";

import { truncateString } from "@/utils/truncateString";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

interface Track {
  title: string;
  artist: string;
  album: string;
  albumCover: string;
}

interface CurrentlyPlaying extends Track {
  isPlaying: boolean;
  songUrl: string;
}

interface RecentTrack extends Track {
  playedAt: string;
}

interface SpotifyData {
  currentlyPlaying: CurrentlyPlaying | null;
  recentTracks: RecentTrack[];
}

export default function NowPlaying() {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLastPlayed, setIsLastPlayed] = useState(false);

  const fetchSpotifyData = async () => {
    try {
      let response = await fetch("/api/spotify/now-playing", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch Spotify data");
      }

      let data = await response.json();

      if (!data.isPlaying) {
        if (!isLastPlayed) {
          setIsLastPlayed(true);
        }
        response = await fetch("/api/spotify/last-played", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch last played track");
        }
        data = await response.json();
      } else {
        if (isLastPlayed) {
          setIsLastPlayed(false);
        }
      }

      const currentlyPlaying: CurrentlyPlaying | null = {
        title: data.title,
        songUrl: data.songUrl,
        artist: data.artist,
        album: data.album,
        albumCover: data.albumCover,
        isPlaying: data.isPlaying,
      };

      setSpotifyData({
        currentlyPlaying,
        recentTracks: [],
      });
      setLoading(false);
    } catch (err) {
      setError("Error fetching Spotify data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpotifyData();
    const interval = setInterval(fetchSpotifyData, 10000);

    return () => clearInterval(interval);
  }, [isLastPlayed]);

  return (
    <>
      <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
        <FaSpotify />
        Spotify
        <span className="text-black-300">
          - {isLastPlayed ? "Last Played" : "Currently Playing"}
        </span>
      </h2>
      <div className="ml-3">
        {spotifyData?.currentlyPlaying && (
          <div className="flex items-center">
            <div className="animate-spin-slow flex size-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-black-900/[0.5] bg-[radial-gradient(circle,#000_49%,#2e2e2e_50%,#000_51%)]">
              <img
                src={spotifyData.currentlyPlaying.albumCover}
                alt={`${spotifyData.currentlyPlaying.album} album art`}
                className="size-12 rounded-full bg-cover bg-center"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-black-200">
                <a href={spotifyData.currentlyPlaying.songUrl}>
                  {spotifyData.currentlyPlaying.title}
                </a>
              </h3>
              <p>{spotifyData.currentlyPlaying.artist}</p>
              <p className="text-sm text-gray-500">
                {truncateString({
                  str: spotifyData.currentlyPlaying.album,
                  num: 30,
                })}
              </p>
            </div>
          </div>
        )}
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </>
  );
}
