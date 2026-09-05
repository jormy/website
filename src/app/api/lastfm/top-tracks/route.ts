import { NextRequest, NextResponse } from "next/server";
import { getTopTracks } from "@/lib/lastfm";

const PERIODS = {
  week: "7day",
  month: "1month",
  sixMonths: "6month",
  year: "12month",
} as const;

export async function GET(request: NextRequest) {
  const periodParam =
    new URL(request.url).searchParams.get("period") ?? "month";

  if (!(periodParam in PERIODS)) {
    return NextResponse.json({ error: "Invalid period" }, { status: 400 });
  }

  const period = PERIODS[periodParam as keyof typeof PERIODS];

  try {
    const response = await getTopTracks(period, 5);

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch Last.fm data" },
        { status: response.status },
      );
    }

    const data = await response.json();

    if (data.error) {
      return NextResponse.json(
        { error: data.message ?? "Last.fm API error" },
        { status: 400 },
      );
    }

    const tracks =
      data.toptracks?.track?.map((track: any) => ({
        name: track.name,
        artist: track.artist?.name ?? "",
        album: track.album?.title ?? "",
        playcount: Number(track.playcount ?? 0),
        image:
          track.image?.find((image: any) => image.size === "extralarge")?.[
            "#text"
          ] ??
          track.image?.find((image: any) => image.size === "large")?.[
            "#text"
          ] ??
          "",
        url: track.url,
      })) ?? [];

    return NextResponse.json(tracks);
  } catch (error) {
    console.error("Last.fm top tracks error:", error);

    return NextResponse.json(
      { error: "Failed to fetch top tracks" },
      { status: 500 },
    );
  }
}
