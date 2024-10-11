"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import GradientCard from "../../gradientCard/GradientCard";

type Track = {
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  isPlaying?: boolean;
  songUrl?: string;
  playedAt?: string;
};

export default function NowPlaying() {
  const [spotifyData, setSpotifyData] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLastPlayed, setIsLastPlayed] = useState(false);

  const fetchSpotifyData = async () => {
    try {
      let response = await fetch("/api/spotify/now-playing", {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Failed to fetch Spotify data");

      let data = await response.json();

      if (!data.isPlaying) {
        if (!isLastPlayed) setIsLastPlayed(true);

        response = await fetch("/api/spotify/last-played", {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Failed to fetch last played track");

        data = await response.json();
      } else {
        if (isLastPlayed) setIsLastPlayed(false);
      }

      const trackData: Track = {
        title: data.title,
        artist: data.artist,
        album: data.album,
        albumCover: data.albumCover,
        isPlaying: data.isPlaying,
        songUrl: data.songUrl,
        playedAt: data.playedAt,
      };

      setSpotifyData(trackData);
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
    <GradientCard>
      <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
        <FaSpotify />
        Spotify
        <span className="text-black-300">
          - {isLastPlayed ? "Last Played" : "Currently Playing"}
        </span>
      </h2>
      <div className="ml-3">
        {spotifyData ? (
          <div className="flex items-center">
            <div className="relative">
              <div
                className={clsx([
                  isLastPlayed ? `animate-none` : `animate-spin-slow`,
                  `relative z-10 flex size-24 flex-shrink-0 items-center justify-center rounded-full border-2 border-black-900/[0.5] bg-[radial-gradient(circle,#000_48%,#2e2e2e_50%,#000_52%)]`,
                ])}
              >
                <img
                  src={spotifyData.albumCover}
                  alt={`${spotifyData.album} album art`}
                  className="size-12 rounded-full border border-black-900/[0.5]"
                />
              </div>
              <div className="vinyl-gradient absolute -bottom-2 left-0 z-0 size-24 animate-spin-slow rounded-full opacity-40 blur-lg" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-black-200">
                <a className="line-clamp-1" href={spotifyData.songUrl || "#"}>
                  {spotifyData.title}
                </a>
              </h3>
              <p>{spotifyData.artist}</p>
              <p className="line-clamp-2 text-sm text-gray-500">
                {spotifyData.album}
              </p>
            </div>
          </div>
        ) : loading ? (
          <div>Loading...</div>
        ) : (
          <div>{error}</div>
        )}
      </div>
    </GradientCard>
  );
}
