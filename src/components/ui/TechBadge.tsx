interface TechBadgeProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function TechBadge({ label, size = 'md' }: TechBadgeProps) {
  return (
    <span
      className={`
        inline-block rounded border border-zinc-700 bg-zinc-800/60 text-zinc-300 font-mono
        ${size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'}
      `}
    >
      {label}
    </span>
  );
}
