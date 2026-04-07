import "@/styles/globals.css";
import { inter, ptsans } from "@/fonts";
import { LocationProvider } from "@/context/LocationContext";
import { Toaster } from "sonner";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata = {
  title: {
    default: "Michael Steve | AI Leadership & Clarity for Executives",
    template: "%s | Michael Steve",
  },
  description:
    "Helping executives and leadership communities navigate the AI shift with clarity, strategic insight, and decisive action.",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Michael Steve | AI Leadership & Clarity for Executives",
    description:
      "Navigate the AI shift with clarity. Private briefings, leadership activation, and strategic insight for executives.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Michael Steve",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Leadership and Clarity for Executives - Michael Steve",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Michael Steve | AI Leadership & Clarity for Executives",
    description:
      "Clarity for leaders navigating AI. Executive briefings and strategic activation.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Michael Steve",
              url: process.env.NEXT_PUBLIC_SITE_URL,
              jobTitle: "AI Leadership Strategist",
              worksFor: {
                "@type": "Organization",
                name: "Michael Steve",
              },
              description:
                "Clarity Catalyst helping leaders navigate the AI shift through strategic insight and executive briefings.",
              sameAs: ["https://linkedin.com/in/themichaelsteve"],
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${ptsans.variable} antialiased min-h-dvh ms-scrollbar`}
      >
        <LocationProvider>
          <GoogleAnalytics />
          {children}
          <Toaster richColors />
        </LocationProvider>
      </body>
    </html>
  );
}
