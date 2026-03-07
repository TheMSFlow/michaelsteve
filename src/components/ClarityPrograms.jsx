"use client";

import { BookLock, Handshake, Presentation, Shield, Users, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/global/Button";

export default function ClarityPrograms({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full mx-4 sm:mx-6 md:mx-0 h-[95dvh] 2xl:h-auto
                md:max-w-2xl
                bg-white rounded-2xl shadow-2xl
                flex flex-col
                overflow-hidden
                animate-in fade-in duration-300 "
      >
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="w-full max-w-2xl flex flex-col gap-8">
            {/* -------- Header -------- */}

            <Button
              variant="reveal"
              onClick={onClose}
              className="text-dark-blue/70 hover:text-dark-blue cursor-pointer w-fit absolute lg:fixed top-4 right-4"
            >
              <X />
            </Button>
            <h3 className="text-dark-blue text-xl mt-8 md:mt-4">
              We deliver Clarity in AI<sup className="text-xs">™</sup> through
              three primary engagements.
            </h3>

            {/* -------- AICC -------- */}
            <div className="relative rounded-xl border border-dark-blue/10 bg-white p-6 space-y-4 w-full">
              <div className="absolute inset-y-0 left-0 w-1 bg-msaccent" />
              <div className="flex gap-2">
                <Shield className="w-6 h-6 text-msaccent" />

                <p className="text-lg font-medium text-dark-blue">
                  AI Clarity for Chiefs
                </p>
              </div>

              <p className="text-sm text-dark-blue/80 leading-relaxed">
                A four-week, one-on-one executive engagement designed for
                C-suite and senior leaders, focused on AI governance, risk
                oversight, leadership alignment, and enterprise-grade strategy.
              </p>

              <Button
                variant="primary"
                className="w-fit gap-2"
                href="https://aiclarityforchiefs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Details
              </Button>
            </div>

            {/* -------- AISC -------- */}
            <div className="relative rounded-xl border border-dark-blue/10 bg-white p-6 space-y-4 w-full">
              <div className="absolute inset-y-0 left-0 w-1 bg-warning/70" />
              <div className="flex gap-2">
                <Users className="w-6 h-6 text-warning/70" />

                <p className="text-lg font-medium text-dark-blue">
                  AI Stakeholder Challenge
                </p>
              </div>

              <p className="text-sm text-dark-blue/80 leading-relaxed">
                A three-day live community experience that challenges leaders to
                move from passive AI consumer to responsible AI stakeholder
                through structured sessions, decision-focused exercises, and
                guided feedback.
              </p>

              <Button
                variant="primary"
                className="w-fit gap-2 bg-warning/20 hover:bg-warning/30 text-warning"
                href="https://aistakeholderchallenge.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Challenge
              </Button>
            </div>

            {/* -------- The Awakening -------- */}
            <div className="relative rounded-xl border border-dark-blue/10 bg-white p-6 space-y-4 w-full mb-8">
              <div className="absolute inset-y-0 left-0 w-1 bg-msblue/40" />
              <div className="flex gap-2">
                <BookLock className="w-6 h-6 text-msblue/40" />

                <p className="text-lg font-medium text-dark-blue">
                  Private Briefings
                </p>
              </div>
              <p className="text-sm text-dark-blue/80 leading-relaxed">
                Focused, high-trust briefings with a curated group of leaders in
                a private setting, designed to enable deeper engagement on the
                strategic, governance, and ecosystem implications of AI.
              </p>

              <div className="text-dark-blue text-xs flex flex-col gap-4 p-4 border border-msaccent/30">
                <h3>Briefing 01</h3>
                <p className="text-sm font-medium text-dark-blue">
                  The Awakening: Recognizing AI Proficiency as the
                  Non-Negotiable Next Layer of Leadership
                </p>
                <div className="flex flex-col md:flex-row gap-2 md:items-center justify-center">
                  <Image
                    src="/ms-icon.svg"
                    alt="Michael Steve Icon"
                    width={24}
                    height={24}
                    priority={false}
                    className="opacity-80"
                  />
                  <p>
                    A detailed article on this briefing is available exclusively
                    to senior leaders within Michael Steve’s Intelligence
                    Center. Request access to review it.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                  <div className="gradient-200 w-6 h-6 shrink-0 grid place-items-center rounded-sm">
                    <Presentation className=" w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-dark-blue/70">
                    Request a private <strong>Awakening</strong> briefing to
                    introduce your organization or community to this leadership
                    transition.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    variant="primary"
                    className="w-fit gap-2"
                    href="https://intelligence.michaelsteve.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Access
                  </Button>
                  <Button
                    variant="primary-light"
                    className="w-fit gap-2"
                    href="mailto:sales@michaelsteve.com?subject=The%20Awakening%20Speaking%20Engagement&body=I%20would%20like%20to%20host%20a%201-hour%20Awakening%20session%20for%20my%20organization%20or%20network.%0A%0AEstimated%20Audience%20Size:%0AOrganization%20/%20Group%20Name:%0AProposed%20Timeframe:%0A%0AAdditional%20Context:%0A"
                  >
                    Request Briefing
                  </Button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:items-center ml-4">
                <div className="gradient-100 w-6 h-6 shrink-0 grid place-items-center rounded-sm">
                  <Handshake className=" w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-dark-blue/60">
                  Communities with the capacity to convene 100 or more leaders
                  may host a private 30-minute <strong>Awakening</strong>{" "}
                  session at no cost.{" "}
                  <a
                    href="mailto:partner@michaelsteve.com?subject=The%20Awakening%20Partnership&body=I%20would%20like%20to%20host%20a%2030-minute%20Awakening%20session%20for%20my%20community%20or%20network.%0A%0AEstimated%20Audience%20Size%20(Minimum 100):%0ACommunity%20/%20Group%20Name:%0AProposed%20Date:%0A%0AAdditional%20Context:%0A"
                    className="inline align-baseline underline text-gradient-100 hover:opacity-70 font-medium transition-colors"
                  >
                    Partner with us
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p className="text-md text-dark-blue/60 text-center">
            For more Inquiries,{" "}
            <a
              href="https://intelligence.michaelsteve.com/form/inquiry?src=MS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline align-baseline underline text-gradient-200 hover:opacity-70 font-medium transition-colors"
            >
              send us a message
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
