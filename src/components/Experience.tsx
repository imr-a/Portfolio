import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-y border-border/60 bg-surface-elevated/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="My professional journey building products for startups and established companies."
        />

        <div className="relative space-y-0">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[7px]"
          />

          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.role}`}
              className="relative grid gap-4 pb-12 pl-8 md:grid-cols-[200px_1fr] md:gap-8 md:pl-8"
            >
              <div
                aria-hidden="true"
                className="absolute top-2 left-0 size-[15px] rounded-full border-2 border-indigo-500 bg-surface"
              />

              <div>
                <p className="font-mono text-sm text-indigo-400">{job.period}</p>
              </div>

              <div className={`${index < experience.length - 1 ? '' : ''}`}>
                <h3 className="font-display text-lg font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-400">
                  {job.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {job.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
