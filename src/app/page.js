import HomePage from "@/components/HomePage";

export const metadata = {
  title: "AI Leadership Clarity for Executives",
  description:
    "AI leadership clarity for executives and strategic leaders. Private briefings, strategic insight, and guidance for navigating the AI shift.",

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },

  openGraph: {
    title: "AI Leadership Clarity for Executives",
    description:
      "Private AI leadership briefings and strategic clarity for executives navigating the AI shift.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Michael Steve",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Leadership Clarity for Executives - Michael Steve",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Leadership Clarity for Executives",
    description:
      "Clarity for executives navigating AI. Private briefings and strategic insight.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HomePage />;
}
