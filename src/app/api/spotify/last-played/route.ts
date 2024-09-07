import { getRecentlyPlayed } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await getRecentlyPlayed();

    if (response.status > 400) {
      return NextResponse.json({}, { status: 200 });
    }

    const tracks = await response.json();

    if (!tracks || !tracks.items || tracks.items.length === 0) {
      return NextResponse.json({}, { status: 200 });
    }

    const mostRecentTrack = tracks.items[0].track;

    const title = mostRecentTrack.name;
    const artist = mostRecentTrack.artists
      .map((artist: any) => artist.name)
      .join(", ");
    const songUrl = mostRecentTrack.external_urls.spotify;
    const album = mostRecentTrack.album.name;
    const albumCover = mostRecentTrack.album.images[0].url;

    return NextResponse.json(
      {
        artist,
        title,
        songUrl,
        album,
        albumCover,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching recently played track:", error);
    return NextResponse.json(
      { error: "Error fetching recently played track" },
      { status: 500 },
    );
  }
}

export const revalidate = 180;
