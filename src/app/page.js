"use client";

import { useState } from "react";
// import ClarityDelivery from "@/components/ClarityDelivery";
// import SplineHero from "@/components/SplineHero";
import ClarityPrograms from "@/components/ClarityPrograms";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        {/* Hero */}
        <section className="max-w-300 2xl:max-w-7xl min-h-dvh px-4 py-10 flex flex-col justify-center gap-16">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] ">
            You can only give <i>clarity</i>, if you have <i>clarity</i>.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-[1.25rem] font-light gap-8">
            {/* Spline */}
            <div>{/* <SplineHero /> */}</div>
            <p>
              Michael Steve is a clarity catalyst studio for strategic,
              executive, and institutional leaders.
            </p>
            <p>
              We provide leaders with{" "}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
    relative
    pt-2 -mt-2 pl-2 pr-1 rounded-t-md
    inline
    bg-transparent
    text-msaccent
    font-medium
    cursor-pointer
    transition-colors
    hover:text-lilac
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-warning/40
    ms-pulse
    group
  "
              >
                Clarity in AI
                <sup className="text-xs align-top">™</sup>
                <span
                  className="
    absolute
    left-1/2
    -translate-x-1/2
    bottom-0
    h-px
    w-5/6
    bg-msaccent/30
    transition-colors
    group-hover:bg-warning/50
  "
                />
              </button>{" "}
              by simplifying complexities in governance, security, efficiency,
              and deployment.
            </p>
          </div>
        </section>

        {/* Clarity Delivery Section */}

        {/* <ClarityDelivery /> */}

        {open && <ClarityPrograms onClose={() => setOpen(false)} />}
      </main>
    </>
  );
}
