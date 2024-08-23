import { useEffect } from "react";

export function getImg(name) {
  return new URL(`./images/projects/${name}`, import.meta.url).href;
}

export function useTitle(title) {
  useEffect(() => {
    document.title = title.trim() ? `jorm | ${title}` : "jorm";
  }, [title]);
}
