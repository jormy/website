import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import TruncateString from "../../components/spotify/TruncateString";
import visualiser from "../../images/visualiser.gif";
import { FaSpotify } from "react-icons/fa";

const POLLING_INTERVAL = 10000; // fetch song every 10 seconds

export const NowPlaying = (props) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({ isPlaying: false });
  const [prevSong, setPrevSong] = useState({});

  const fetchNowPlaying = async () => {
    const nowPlaying = await getNowPlayingItem();

    // Update the state only if the song has changed or nothing is playing
    if (nowPlaying.isPlaying && nowPlaying.songUrl !== prevSong.songUrl) {
      setResult(nowPlaying);
      setPrevSong(nowPlaying);
      setLoading(false);
    } else if (!nowPlaying.isPlaying) {
      setResult({ isPlaying: false });
      setPrevSong({});
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlaying(); // Initial fetch

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, POLLING_INTERVAL);

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
                {TruncateString(result.title, 40)}
                <img src={visualiser} className="h-[1em] w-[1-em]" />
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
