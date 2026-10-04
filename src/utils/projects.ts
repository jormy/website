export type Category = "code" | "cad";

export type Project = {
  name: string;
  descr: string;
  link: string;
  repo?: string;
  img?: string;
};

export const projects: Record<Category, Project[]> = {
  code: [
    {
      name: "btd6-viewer",
      descr: "WIP site to display information such as events and challenges",
      link: "https://btd6.vercel.app/",
      repo: "https://github.com/jormy/btd6-viewer",
      img: "/images/projects/code/btd6-viewer.png",
    },
    {
      name: "song-search",
      descr: "a basic song search app using react",
      link: "https://songsearch.vercel.app/",
      repo: "https://github.com/jormy/song-search",
      img: "/images/projects/code/songsearch.png",
    },
    {
      name: "website",
      descr: "attempt at creating a website using Nextjs & TailwindCSS. ",
      link: "https://jorm.vercel.app/",
      repo: "https://github.com/jormy/website",
      img: "/images/projects/code/website.png",
    },
    {
      name: "old-website",
      descr:
        "First site i made using html and css. Never got around to finishing it.",
      link: "https://jormy.github.io/",
      repo: "https://github.com/jormy/jormy.github.io",
      img: "/images/projects/code/old-website.png",
    },
  ],

  cad: [
    {
      name: "Wave • Parametric Device Stand",
      descr:
        "A updated version of my wave laptop stand from last year, with full parameterization & a few other upgrades.",
      link: "https://makerworld.com/en/models/3057744",
      img: "/images/projects/cad/wave-device-stand.png",
    },
    {
      name: "Striped Gridfinity Bins",
      descr: "why do gridfinity bins have to be so boring?",
      link: "https://makerworld.com/en/models/1877255",
      img: "/images/projects/cad/striped-gridfinity-bins.webp",
    },
    {
      name: "Mini Tabletop Pinball",
      descr:
        "An attempt at capturing the spirit of a classic pinball machine in a form small enough to fit on a desk.",
      link: "https://makerworld.com/en/models/1620940",
      img: "/images/projects/cad/mini-pinball.gif",
    },
    {
      name: "Toilet Paper Tissue Box",
      descr:
        "A sleek tissue box designed for use with toilet paper rolls. Comes in 2 patterns!",
      link: "https://makerworld.com/en/models/1483077",
      img: "/images/projects/cad/toilet-paper-tissue-box.png",
    },
    {
      name: "Sticky Note Holder with Stencils",
      descr:
        'Designed to bring a bit more organisation (and flair) to your desk setup! Fits standard 3" x 3" sticky notes.',
      link: "https://makerworld.com/en/models/1409445",
      img: "/images/projects/cad/sticky-note-holder.webp",
    },
    {
      name: "2-in-1 Bottle Watering Cap",
      descr: "A 2-in-1 spout system that attaches to standard plastic bottles.",
      link: "https://makerworld.com/en/models/1386941",
      img: "/images/projects/cad/bottle-watering-cap.png",
    },
    {
      name: "Adjustable Desk Lamp",
      descr:
        "An adjustable desk lamp designed to work with Bambu Lab's 001 Lamp Kit",
      link: "https://makerworld.com/en/models/1371091",
      img: "/images/projects/cad/desk-lamp.gif",
    },
    {
      name: "Clamp-On Desk Bin",
      descr:
        "A desk bin that attaches to the edge of your desk using 2 screw clamps, making it perfect for catching small scraps that usually end up on the floor.",
      link: "https://makerworld.com/en/models/1322655",
      img: "/images/projects/cad/clamp-on-desk-bin.png",
    },
    {
      name: "Kumiko Desk Organizer",
      descr:
        "A minimal Desk Organizer that features traditional Japanese woodworking designs called Kumiko.",
      link: "https://makerworld.com/en/models/1288105",
      img: "/images/projects/cad/kumiko-desk-organizer.png",
    },
    {
      name: "Mini Desktop Bin",
      descr:
        "A compact and stylish desk bin to keep your workspace clean and organised.",
      link: "https://makerworld.com/en/models/1254319",
      img: "/images/projects/cad/desk-bin.webp",
    },
    {
      name: "Sleek Laptop Riser",
      descr:
        "A simple laptop riser that elevates your laptop to a comfortable height for typing and viewing.",
      link: "https://makerworld.com/en/models/1222604",
      img: "/images/projects/cad/laptop-riser.png",
    },
    {
      name: "Soap Dish",
      descr:
        "A sleek soap dish that preserves the freshness of your soap by draining excess water.",
      link: "https://makerworld.com/en/models/1199126",
      img: "/images/projects/cad/soap-dish.webp",
    },
    {
      name: "Desktop Gridfinity Base",
      descr: "A sleek aesthetic base for Gridfinity bins.",
      link: "https://makerworld.com/en/models/1011435",
      img: "/images/projects/cad/desktop-gridfinity-base.png",
    },
    {
      name: "Infinity Stationery Holder",
      descr: "A stationery holder inspired by an infinity / illusion cube.",
      link: "https://makerworld.com/en/models/949779",
      img: "/images/projects/cad/infinity-stationery-holder.png",
    },
  ],
};
