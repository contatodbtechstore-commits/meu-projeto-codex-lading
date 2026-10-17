import { brand } from "../content";
export function Bloom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.3">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            cx="32"
            cy="21"
            rx="7.5"
            ry="16"
            transform={`rotate(${i * 45} 32 32)`}
          />
        ))}
        <circle cx="32" cy="32" r="5" />
      </g>
    </svg>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <Bloom />
      <span className="brand-type">
        {brand.name}
        <span>{brand.descriptor}</span>
      </span>
    </span>
  );
}
