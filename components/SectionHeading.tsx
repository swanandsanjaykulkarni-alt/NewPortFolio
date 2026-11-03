type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? (
        <p className="section-description mt-4">{description}</p>
      ) : null}
    </div>
  );
}
