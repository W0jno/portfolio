import { skillItems } from "@/components/skills/constants";

export function SkillsCarousel() {
  const loop = [...skillItems, ...skillItems];

  return (
    <div className="min-w-0 w-full overflow-hidden [contain:paint] border border-border bg-bg-raised py-3">
      <ul className="marquee-track flex w-max max-w-none gap-3 px-3">
        {loop.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="shrink-0 border border-neon px-3 py-2 text-xs uppercase tracking-widest text-neon neon-glow"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
