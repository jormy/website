export function getImg(name) {
  return new URL(`./images/projects/${name}`, import.meta.url).href;
}
