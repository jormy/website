import express from "express";
import cors from "cors";
import querystring from "query-string";
import "dotenv/config";

const PORT = 8000;
const app = express();
app.use(cors());

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const client_id = process.env.VITE_CLIENT_ID;
const client_secret = process.env.VITE_CLIENT_SECRET;
const refresh_token = process.env.VITE_REFRESH_TOKEN;

let accessToken = null;
let expiryTime = 0;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  const data = await response.json();
  accessToken = data.access_token;
  expiryTime = Date.now() + data.expires_in * 1000; // Calculate expiry time
};

app.get("/spotify", async (req, res) => {
  try {
    if (!accessToken || Date.now() > expiryTime) {
      await getAccessToken();
    }

    const nowPlayingResponse = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
      return res.json({ message: "No song currently playing" });
    }

    const song = await nowPlayingResponse.json();
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    res.json({
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the song information" });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
