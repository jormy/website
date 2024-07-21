import { useEffect, useState } from "react";
import getNowPlayingItem, { getAccessToken } from "./SpotifyAPI";
import TruncateString from "../../components/spotify/TruncateString";
import visualiser from "../../assets/visualiser.gif";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const POLLING_INTERVAL = 10000; // fetch song every 10 seconds

export const NowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const [prevSong, setPrevSong] = useState({});
    const [accessTokenData, setAccessTokenData] = useState(null);

    const fetchNowPlaying = async () => {
        let tokenData = accessTokenData;

        // Check if token is expired or not available
        if (!tokenData || Date.now() > tokenData.expiry_time) {
            tokenData = await getAccessToken();
            setAccessTokenData(tokenData);
        }

        const nowPlaying = await getNowPlayingItem(tokenData.access_token);

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
    }, [props.client_id, props.client_secret, props.refresh_token, accessTokenData]);

    return (
        <div className="flex w-fit text-denim-300">
            {loading && <p>Loading...</p>}
            {!loading && !result.isPlaying && (
                <>
                    <FontAwesomeIcon icon={faSpotify} className="w-12 h-12"/>
                    <span className="pl-3 text-md">Not playing <br/> anything</span>
                </>
            )}
            {!loading && result.isPlaying && (
                <>
                    <img 
                        src={result.albumImageUrl} 
                        alt={`${result.title} album cover`} 
                        className="w-12 h-12 rounded-md"
                    />
                    <div className="pl-3">
                        <div className="flex relative">
                            <a href={result.songUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-denim-200 text-md pr-6 flex gap-3">
                                {TruncateString(result.title, 40)}
                                <img src={visualiser} className="h-[1em] w-[1-em]"/>
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
