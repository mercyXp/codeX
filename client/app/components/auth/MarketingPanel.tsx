"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RandomBinaryBackground from "./RandomBinary";

const panels = [
  {
    title: "Gradual Development of Competencies",
    description:
      "We’ve designed our tasks so you can grow step by step. You’ll never feel stuck with something too hard or bored with something too easy — instead, you’ll progress smoothly and comfortably.",
  },
  {
    title: "A Wide Range of IT Disciplines on a Single Platform",
    description:
      "An interactive platform with automatic solution checking and a task bank covering the most essential IT areas: backend, frontend, basics of algorithms, and much more.",
  },
];

export default function MarketingPanel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? panels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === panels.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-blue-700 px-6 py-12 md:py-20">
      {/* Binary Background */}
      <RandomBinaryBackground />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Main Heading - Scaled for Mobile */}
        <h2 className="mb-10 text-center text-3xl md:text-5xl font-bold text-white leading-tight md:leading-snug">
          Learn programming, mathematics, and backend fundamentals —{" "}
          <span className="text-sky-200">effectively with CodeX.</span>
        </h2>

        {/* White Card - Match AuthForm rounded-2xl */}
        <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-10">
          {/* Content with Fixed Height to prevent jumping */}
          <div className="min-h-[120px]">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {panels[index].title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {panels[index].description}
            </p>
          </div>

          {/* Navigation and Indicators */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {panels.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 transition-all rounded-full ${
                    index === i ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm active:scale-90"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm active:scale-90"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}