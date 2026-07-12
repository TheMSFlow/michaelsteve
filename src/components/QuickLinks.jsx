"use client";

import { useState } from "react";
import { Share, Check, ExternalLink, ChevronRight } from "lucide-react";
import Image from "next/image";

const BASE_URL = "https://intelligence.michaelsteve.com";

const links = [
  {
    id: "briefing",
    badge: "Executive Briefing",
    headline: "The Awakening",
    subline: "AI and the Next Layer of Leadership",
    persona:
      "You're operating at the top. This session was built for that exact altitude.",
    cta: "Access the Briefing",
    url: `${BASE_URL}/pay/vip`,
    hero: true,
    tags: ["Executives", "Founders", "Senior Leaders"],
  },
  {
    id: "website",
    badge: "Official Website",
    headline: "michaelsteve.com",
    subline: "See how we deliver Clarity in AI™",
    persona:
      "Explore the full picture. The programmes, the philosophy, and the people we serve.",
    cta: "Visit Website",
    url: "https://michaelsteve.com",
    hero: false,
    tags: ["Overview", "All Programmes"],
  },
  {
    id: "inner-circle",
    badge: "Partner Opportunity",
    headline: "Michael Steve's Inner Circle",
    subline: "A seat at a very selective table.",
    persona:
      "You already have the ear of decision-makers. This partnership was designed for exactly that position.",
    cta: "Explore the Partnership",
    url: `${BASE_URL}/community/inner-circle`,
    hero: false,
    tags: ["Consultants", "Executive Coaches", "Thought Leaders"],
    earning: "Earn up to $2,500 per referral",
  },
  {
    id: "sponsor",
    badge: "Sponsor Opportunity",
    headline: "Host The Awakening",
    subline: "Bring a defining AI conversation to your community, at no cost.",
    persona:
      "You convene leaders. Give them the conversation that reframes AI as a leadership layer, not a tech trend.",
    cta: "Apply to Sponsor",
    url: `${BASE_URL}/community/sponsor`,
    hero: false,
    tags: ["Community Leaders", "Association Heads", "Conveners"],
  },
  {
    id: "apprentice",
    badge: "Career Programme",
    headline: "AI Career Apprentice",
    subline: "Get trained. Get credited. Get paid.",
    persona:
      "You have the degree. What you need now is a launchpad, not another CV in a pile.",
    cta: "Apply Now",
    url: `${BASE_URL}/form/opportunity/ai-apprentice`,
    hero: false,
    tags: ["Graduates", "Job Seekers", "Career Pivoters"],
  },
];

function ShareButton({ url, title, className = "bg-white/60 hover:bg-white" }) {
  const [copied, setCopied] = useState(false);

  async function handleShare(e) {
    e.preventDefault();
    e.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        if (err.name !== "AbortError") copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleShare}
      aria-label="Share this link"
      className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-dark-blue/20 ${className} transition-colors duration-150 cursor-alias`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <Share className="w-4 h-4 text-dark-blue/50" />
      )}
    </button>
  );
}

function HeroCard({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden gradient-200 rounded-2xl text-white"
    >
      <div className="relative z-10 p-6 space-y-4">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
              {link.badge}
            </span>
            <h2 className="text-2xl font-ptsans font-bold leading-tight">
              {link.headline}
            </h2>
          </div>
          <ShareButton url={link.url} title={link.headline} />
        </div>

        {/* Persona line */}
        <p className="text-sm font-inter font-light opacity-90 leading-relaxed border-l-2 border-white/30 pl-3">
          {link.persona}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {link.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-wide uppercase bg-white/15 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-white/20">
          <span className="text-sm font-semibold">{link.cta}</span>
          <ChevronRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </div>

      {/* Decorative ring */}
      <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border border-white/10" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-white/10" />
    </a>
  );
}

function StandardCard({ link }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group rounded-2xl border border-dark-blue/15 bg-white hover:border-dark-blue/30 hover:shadow-sm transition-all duration-150 overflow-hidden"
    >
      <div className="p-5 space-y-3">
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-msaccent">
              {link.badge}
            </span>
            <h2 className="text-lg font-ptsans font-bold text-dark-blue leading-snug">
              {link.headline}
            </h2>
          </div>
          <ShareButton
            url={link.url}
            title={link.headline}
            className="bg-white/60 hover:bg-lilac/50"
          />
        </div>

        {/* Persona line */}
        <p className="text-sm font-inter font-light text-dark-blue/70 leading-relaxed">
          {link.persona}
        </p>

        {/* Earning badge if present */}
        {link.earning && (
          <div className="bg-lilac rounded-lg px-3 py-2 inline-block">
            <span className="text-xs font-semibold text-msaccent">
              {link.earning}
            </span>
          </div>
        )}

        {/* Tags + CTA row */}
        <div className="flex items-center justify-between pt-2 border-t border-dark-blue/10">
          <div className="flex flex-wrap gap-1.5">
            {link.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold tracking-wide uppercase bg-dark-blue/5 text-dark-blue/50 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <ChevronRight className="w-4 h-4 text-dark-blue/30 shrink-0 group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </div>
    </a>
  );
}

export default function QuickLinks() {
  const [hero, ...rest] = links;

  return (
    <div className="min-h-dvh bg-white/95">
      <div className="max-w-md mx-auto px-4 py-10 pb-16 space-y-8">
        {/* Profile Header */}
        <header className="text-center flex flex-col gap-2 items-center justify-center pt-2">
          <Image
            src="/ms-icon.svg"
            height={48}
            width={48}
            alt="Michael Steve Logo"
          />
          <h2 className="text-xl font-inter font-medium text-dark-blue">
            Michael Steve
          </h2>
          <p className="text-sm font-inter font-light text-dark-blue/60">
            AI Executive Educator · Clarity in AI™
          </p>
        </header>

        {/* Hero Card */}
        <HeroCard link={hero} />

        {/* Divider label */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-dark-blue/10" />
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-dark-blue/30">
            More Opportunities
          </span>
          <div className="flex-1 h-px bg-dark-blue/10" />
        </div>

        {/* Standard Cards */}
        <div className="space-y-3">
          {rest.map((link) => (
            <StandardCard key={link.id} link={link} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-dark-blue/45 font-inter">
            Michael Steve's Clarity Studio
          </p>
        </footer>
      </div>
    </div>
  );
}
