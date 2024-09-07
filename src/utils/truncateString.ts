export function truncateString({
  str,
  num,
}: {
  str: string;
  num: number;
}): string {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
