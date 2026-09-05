import { NextRequest, NextResponse } from "next/server";
import { getTopArtists } from "@/lib/lastfm";

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
    const response = await getTopArtists(period, 5);

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

    const artists =
      data.topartists?.artist?.map((artist: any) => ({
        name: artist.name,
        playcount: Number(artist.playcount ?? 0),
        image:
          artist.image?.find((image: any) => image.size === "extralarge")?.[
            "#text"
          ] ??
          artist.image?.find((image: any) => image.size === "large")?.[
            "#text"
          ] ??
          "",
        url: artist.url,
      })) ?? [];

    return NextResponse.json(artists);
  } catch (error) {
    console.error("Last.fm top artists error:", error);

    return NextResponse.json(
      { error: "Failed to fetch top artists" },
      { status: 500 },
    );
  }
}
