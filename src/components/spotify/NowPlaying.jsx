import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import visualiser from "../../assets/visualiser.gif";

const POLLING_INTERVAL = 5000; // fetch song every 5 seconds

export const NowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const [prevSong, setPrevSong] = useState({});

    const fetchNowPlaying = async () => {
        const nowPlaying = await getNowPlayingItem(
            props.client_id,
            props.client_secret,
            props.refresh_token
        );

        // Update the state only if the song has changed
        if (nowPlaying && nowPlaying.songUrl !== prevSong.songUrl) {
            setResult(nowPlaying);
            setPrevSong(nowPlaying);
            setLoading(false);
        } else if (!nowPlaying) {
            setResult({});
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
    }, [props.client_id, props.client_secret, props.refresh_token]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && !result.isPlaying && (
                <div>
                    <span>Currently offline</span>
                </div>
            )}
            {!loading && result.isPlaying && (
                <div className="flex w-fit border-denim-300/[0.5] bg-denim-300/[0.07] text-denim-300 backdrop-blur-sm border border-1 rounded-xl">
                    <div className="p-3 flex">
                        <img 
                            src={result.albumImageUrl} 
                            alt={`${result.title} album cover`} 
                            className="w-12 h-12 rounded-md"
                        />
                        <div className="pl-3">
                            <div className="flex relative">
                                <a href={result.songUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-denim-200 text-md pr-6">
                                    {result.title}
                                </a>
                                <img src={visualiser} className="h-[1em] w-[1-em] absolute bottom-1 right-0"/>
                            </div>
                            <p>{result.artist}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NowPlaying;
