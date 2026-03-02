"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClarityDelivery() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const totalSlides = 3;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScroll = sectionRef.current.offsetHeight - windowHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const scrollProgress = scrolled / totalScroll;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateX = -(progress * (totalSlides - 1) * 100);

  const goToSlide = (index) => {
    if (!sectionRef.current) return;

    const windowHeight = window.innerHeight;
    const targetOffset =
      sectionRef.current.offsetTop +
      (index / (totalSlides - 1)) *
        (sectionRef.current.offsetHeight - windowHeight);

    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${totalSlides * 100}vh` }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute z-100 top-4 left-4 bg-msaccent text-dark-blue p-2 rounded-md">
          <h2 className="">We deliver AI Clarity in 3 phases</h2>
        </div>
        {/* Horizontal Track */}
        <div
          className="flex h-full transition-transform duration-75 ease-linear"
          style={{
            width: `${totalSlides * 100}vw`,
            transform: `translateX(${translateX}vw)`,
          }}
        >
          {/* Slide 1 */}
          <div className="w-screen h-full flex items-start justify-start bg-lilac text-dark-blue pt-20 px-4">
            <h3 className="font-medium text-4xl lg:text-7xl">01. The Awakening</h3>
            <div className="grid "></div>
          </div>

          {/* Slide 2 */}
          <div className="w-screen h-full flex items-center justify-center bg-neutral-800 text-white text-4xl">
            Page 2
          </div>

          {/* Slide 3 */}
          <div className="w-screen h-full flex items-center justify-center bg-neutral-700 text-white text-4xl">
            Page 3
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-10 right-10 flex gap-4">
          <button
            onClick={() =>
              goToSlide(
                Math.max(0, Math.floor(progress * (totalSlides - 1)) - 1),
              )
            }
            className="p-3 rounded-full bg-dark-blue/10 backdrop-blur hover:bg-dark-blue/20 cursor-pointer"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              goToSlide(
                Math.min(
                  totalSlides - 1,
                  Math.floor(progress * (totalSlides - 1)) + 1,
                ),
              )
            }
            className="p-3 rounded-full bg-dark-blue/10 backdrop-blur hover:bg-dark-blue/20 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
