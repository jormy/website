import localFont from "next/font/local";
import { Manrope, Raleway } from "next/font/google";

// export const spaceGrotesk = localFont({
//   src: "../fonts/SpaceGrotesk-VariableFont_wght.ttf",
//   display: "swap",
// });

// export const benzin = localFont({
//   src: "../fonts/Benzin-Semibold.ttf",
//   display: "swap",
// });

export const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.ttf",
  variable: "--font-generalSans",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
