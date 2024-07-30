const SPOTIFY_ENDPOINT = `https://website-v2-server.vercel.app`;

export default async function getNowPlayingItem() {
  try {
    const response = await fetch(SPOTIFY_ENDPOINT);

    if (response.status === 204 || response.status > 400) {
      return false;
    }

    const song = await response.json();

    return {
      albumImageUrl: song.albumImageUrl,
      artist: song.artist,
      isPlaying: song.isPlaying,
      songUrl: song.songUrl,
      title: song.title,
    };
  } catch (error) {
    console.error("Error fetching the song information:", error);
    return false;
  }
}
