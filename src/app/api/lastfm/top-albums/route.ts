import { NextRequest, NextResponse } from "next/server";
import { getTopAlbums } from "@/lib/lastfm";

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
    const response = await getTopAlbums(period, 5);

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

    const albums =
      data.topalbums?.album?.map((album: any) => ({
        name: album.name,
        artist: album.artist?.name ?? "",
        playcount: Number(album.playcount ?? 0),
        image:
          album.image?.find((image: any) => image.size === "extralarge")?.[
            "#text"
          ] ??
          album.image?.find((image: any) => image.size === "large")?.[
            "#text"
          ] ??
          "",
        url: album.url,
      })) ?? [];

    return NextResponse.json(albums);
  } catch (error) {
    console.error("Last.fm top albums error:", error);

    return NextResponse.json(
      { error: "Failed to fetch top albums" },
      { status: 500 },
    );
  }
}
