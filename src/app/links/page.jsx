import QuickLinks from "@/components/QuickLinks";

export const metadata = {
  title: "Links",
  description:
    "Michael Steve's programmes and opportunities in one place — The Awakening executive briefing, Inner Circle partnership, community sponsorships, and the AI Career Apprentice programme.",

  alternates: {
    canonical: "/links",
  },

  openGraph: {
    title: "Links | Michael Steve",
    description:
      "Michael Steve's programmes and opportunities in one place — briefings, partnerships, sponsorships, and career programmes.",
    url: "/links",
    siteName: "Michael Steve",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael Steve's programmes and opportunities",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Links | Michael Steve",
    description:
      "Michael Steve's programmes and opportunities in one place — briefings, partnerships, sponsorships, and career programmes.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <QuickLinks />;
}
