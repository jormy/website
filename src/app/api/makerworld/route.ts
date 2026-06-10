import { get } from "@vercel/edge-config";

export async function GET() {
  const stats = await get("makerworldData");

  if (stats == null) {
    return new Response(null, { status: 404 });
  }

  return new Response(JSON.stringify(stats), {
    headers: { "content-type": "application/json" },
  });
}
