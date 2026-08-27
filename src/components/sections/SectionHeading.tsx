import { FadeIn } from "@/components/animated/FadeIn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[60px] bg-primary/40" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-primary font-medium">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
        {title} <span className="text-primary">{accent}</span>
      </h2>
      {description && (
        <p className="text-lg text-muted max-w-2xl mb-8 leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
