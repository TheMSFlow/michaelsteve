import localFont from "next/font/local";

// Inter (primary UI font)
export const inter = localFont({
  src: [
    {
      path: "./inter-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./inter-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./inter-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./inter-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

// PT Sans Narrow (headings)
export const ptsans = localFont({
  src: [
    {
      path: "./pt-sans-narrow-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./pt-sans-narrow-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ptsans",
});
