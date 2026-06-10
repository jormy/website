export async function getMakerWorldStats() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/makerworld`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  return res.json();
}
