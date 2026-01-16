"use client";

export default function RandomBinaryBackground() {
  const rows = 70;
  const cols = 30;

  // Generate random bits once per client render
  const binaryArray = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (Math.random() > 0.5 ? "1" : "0"))
  );

  return (
    <div className="absolute inset-0 z-0 font-mono text-xl tracking-widest text-sky-200/20 pointer-events-none flex flex-col justify-between">
      {binaryArray.map((row, i) => (
        <div key={i} className="flex justify-center space-x-4">
          {row.map((bit, j) => (
            <span key={j}>{bit}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
