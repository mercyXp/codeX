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
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-sky-400 to-blue-600 px-6 py-16">
         {/* Binary Background covering entire section */}
      <RandomBinaryBackground />

      {/* Main Heading */}
      <h2 className="relative z-10 mb-8 text-center text-5xl font-semibold text-white max-w-3xl leading-snug">
        Learn programming, mathematics, backend fundamentals, and much more — effectively with CodeX.
      </h2>

      {/* White Card */}
      <div className="relative z-10 max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold">{panels[index].title}</h3>
        <p className="text-sm leading-relaxed">{panels[index].description}</p>

        {/* Navigation arrows */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={handlePrev}
            className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100 transition"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="flex h-9 w-9 items-center justify-center rounded-md border hover:bg-gray-100 transition"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
