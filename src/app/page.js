import HomePage from "@/components/HomePage";

export const metadata = {
  title: "AI Leadership Clarity for Executives",
  description:
    "AI leadership clarity for executives and strategic leaders. Private briefings, strategic insight, and guidance for navigating the AI shift.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AI Leadership Clarity for Executives",
    description:
      "Private AI leadership briefings and strategic clarity for executives navigating the AI shift.",
    url: "/",
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

const programsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Clarity in AI Programmes",
  description:
    "Michael Steve's Clarity in AI programmes for executives and strategic leaders.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "The Awakening — Private Executive Briefings",
        description:
          "Focused, high-trust AI briefings for curated groups of leaders, covering the strategic, governance, and ecosystem implications of AI.",
        url: "https://intelligence.michaelsteve.com",
        provider: { "@type": "Person", name: "Michael Steve" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Stakeholder Challenge",
        description:
          "A three-day live community experience that moves leaders from passive AI consumer to responsible AI stakeholder.",
        url: "https://aistakeholderchallenge.com",
        provider: { "@type": "Person", name: "Michael Steve" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Clarity for Chiefs",
        description:
          "A four-week, one-on-one executive engagement for C-suite leaders focused on AI governance, risk oversight, and enterprise strategy.",
        url: "https://aiclarityforchiefs.com",
        provider: { "@type": "Person", name: "Michael Steve" },
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsJsonLd) }}
      />
      <HomePage />
    </>
  );
}
