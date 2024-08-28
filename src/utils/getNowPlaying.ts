const SPOTIFY_ENDPOINT = `https://jorm-server.vercel.app`;

export async function getNowPlayingItem() {
  try {
    const response = await fetch(SPOTIFY_ENDPOINT, { cache: "no-store" });

    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false };
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
    return { isPlaying: false };
  }
}
