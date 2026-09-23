import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="flex min-w-0 items-center gap-3" href="/">
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-cream text-center font-noto text-xl leading-none text-navy shadow-sm">
        ACV
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-bold uppercase tracking-[0.08em] text-white">
          Ana Cristina Volante
        </span>
        <span className="block truncate text-[0.66rem] font-bold uppercase tracking-[0.28em] text-cream/75">
          The Clear Pathway
        </span>
      </span>
    </Link>
  );
}
