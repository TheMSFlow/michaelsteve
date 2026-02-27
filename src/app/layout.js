import "@/styles/globals.css";
import { inter, ptsans } from "@/fonts";
import { LocationProvider } from "@/context/LocationContext";
import { Toaster } from "sonner";


export const metadata = {
  title: "Michael Steve",
  description: "Clarity Catalyst Studio for Leaders",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${inter.variable} ${ptsans.variable} antialiased h-dvh overflow-hidden ms-scrollbar`}
      >
        <LocationProvider>
          {children}
          <Toaster richColors />
        </LocationProvider>
      </body>
    </html>
  );
}
