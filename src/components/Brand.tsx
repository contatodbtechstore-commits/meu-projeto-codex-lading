import { brand } from "../content";
export function Bloom({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-symbol ${className}`} aria-hidden="true" />
  );
}
export function Brand() {
  return (
    <span className="brand">
      <Bloom />
      <span className="brand-wordmark" aria-hidden="true">
        <span className="brand-lettering" />
        <span className="brand-descriptor">{brand.descriptor}</span>
      </span>
      <span className="sr-only">{brand.fullName}</span>
    </span>
  );
}
