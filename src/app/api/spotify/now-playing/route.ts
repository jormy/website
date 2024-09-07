import { getCurrentlyPlaying } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json(
      {
        isPlaying: false,
      },
      { status: 200 },
    );
  }

  const song = await response.json();
  const { item } = song;

  if (item === null) {
    return NextResponse.json(
      {
        isPlaying: false,
      },
      { status: 200 },
    );
  }

  const artist = item.artists.map((artist: any) => artist.name).join(", ");
  const title = item.name;
  const songUrl = item.external_urls.spotify;
  const album = item.album.name;
  const albumCover = item.album.images[0].url;
  const isPlaying = song.is_playing;

  return NextResponse.json(
    {
      artist,
      title,
      songUrl,
      album,
      albumCover,
      isPlaying,
    },
    { status: 200 },
  );
}

export const revalidate = 10;
