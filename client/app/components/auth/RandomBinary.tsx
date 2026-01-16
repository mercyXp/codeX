"use client";

export default function RandomBinaryBackground() {
  const rows = 40;
  const cols = 20;

  // Since this component is now Client-Only, we can use Math.random() safely
  const binaryRows = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (Math.random() > 0.5 ? "1" : "0")).join("  ")
  );

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden font-mono text-lg md:text-xl tracking-widest text-sky-200/10 pointer-events-none select-none flex flex-col justify-around items-center"
      aria-hidden="true"
    >
      {binaryRows.map((row, i) => (
        <div key={i} className="whitespace-nowrap">
          {row}
        </div>
      ))}
    </div>
  );
}