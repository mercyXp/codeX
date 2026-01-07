import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MarketingPanel() {
  return (
    <div className="relative hidden lg:flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-400 to-blue-600">
      {/* Binary background */}
      <div className="absolute inset-0 font-mono text-xs leading-6 text-white/20">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i}>101001010010101001010010101001010</div>
        ))}
      </div>

      <div className="relative max-w-lg p-10 text-white">
        <h2 className="mb-6 text-3xl font-semibold leading-snug">
          Learn programming, mathematics, backend fundamentals,
          and much more — effectively with CodeX.
        </h2>

        <div className="rounded-xl bg-white p-6 text-gray-900 shadow-lg">
          <h3 className="mb-2 text-lg font-semibold">
            Multiple IT disciplines in one platform
          </h3>
          <p className="text-sm leading-relaxed">
            An interactive learning platform with automatic solution
            checking and a rich problem bank across essential IT
            areas: backend, frontend, algorithmic thinking, and more.
          </p>

          <div className="mt-4 flex justify-end gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-md border">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-md border">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
