const LASTFM_API = "https://ws.audioscrobbler.com/2.0/";

const API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = process.env.LASTFM_USERNAME;

type Period = "7day" | "1month" | "3month" | "6month" | "12month" | "overall";

async function lastFmRequest(method: string, period: Period, limit = 5) {
  const url = new URL(LASTFM_API);

  url.searchParams.set("method", method);
  url.searchParams.set("user", USERNAME!);
  url.searchParams.set("api_key", API_KEY!);
  url.searchParams.set("period", period);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("format", "json");

  return fetch(url.toString(), {
    next: {
      revalidate: 300,
    },
  });
}

export function getTopAlbums(period: Period, limit = 5) {
  return lastFmRequest("user.gettopalbums", period, limit);
}

export function getTopArtists(period: Period, limit = 5) {
  return lastFmRequest("user.gettopartists", period, limit);
}

export function getTopTracks(period: Period, limit = 5) {
  return lastFmRequest("user.gettoptracks", period, limit);
}
