interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-2 text-sm font-medium tracking-widest text-indigo-400 uppercase">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
