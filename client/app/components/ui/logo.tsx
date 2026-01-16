import clsx from "clsx";

interface LogoProps {
  size?: number;          // icon size in px
  showText?: boolean;     // toggle "CodeX" text
  className?: string;
}

export default function Logo({
  size = 40,
  showText = true,
  className,
}: LogoProps) {
  const blades = 7;

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      {/* Logo Icon */}
      <div
        className="relative"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {/* Base platform */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded"
          style={{
            width: size * 0.75,
            height: size * 0.14,
            backgroundColor: "hsl(var(--primary))",
          }}
        />

        {/* Burst blades */}
        {Array.from({ length: blades }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-[14%] left-1/2 rounded-sm"
            style={{
              width: size * 0.08,
              height: size * 0.7,
              backgroundColor: "hsl(var(--primary))",
              transform: `rotate(${i * 12 - 36}deg) translateX(-50%)`,
              transformOrigin: "bottom",
              opacity: 0.55 + i * 0.06,
            }}
          />
        ))}
      </div>

      {/* Wordmark */}
      {showText && (
        <span className="text-2xl font-semibold tracking-tight">
          CodeX
        </span>
      )}
    </div>
  );
}
