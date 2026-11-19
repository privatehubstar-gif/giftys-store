import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  /** Shown on the placeholder so you know which photo goes here. */
  label: string;
  /** Shown on the placeholder, e.g. the recommended shape and size. */
  hint?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Shows the photo when `src` is set, otherwise a clean placeholder.
 * The parent / className should give it a size (e.g. aspect-[4/5]).
 */
export default function ImageSlot({ src, alt, label, hint, className = "", sizes = "100vw", priority = false }: Props) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-sand ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-hidden bg-sand flex flex-col items-center justify-center text-center px-4 ${className}`}
      role="img"
      aria-label={alt}
    >
      <svg className="w-9 h-9 text-gold/70 mb-3" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.5h11l1 11a1 1 0 01-1 1h-12a1 1 0 01-1-1l1-11zM9 8.5V7a3 3 0 016 0v1.5" />
      </svg>
      <p className="text-[11px] sm:text-xs tracking-[0.18em] uppercase text-ink/70 font-medium">{label}</p>
      {hint && <p className="mt-1 text-[11px] text-muted max-w-[22ch]">{hint}</p>}
    </div>
  );
}
