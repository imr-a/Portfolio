import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categoryColors: Record<string, string> = {
  Frontend: 'border-blue-500/20 bg-blue-500/10 text-blue-300',
  Backend: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  DevOps: 'border-amber-500/20 bg-amber-500/10 text-amber-300',
  Tools: 'border-violet-500/20 bg-violet-500/10 text-violet-300',
}

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <section id="skills" className="border-y border-border/60 bg-surface-elevated/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated stack of tools and frameworks I use to bring ideas to life."
        />

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-medium tracking-wider text-slate-500 uppercase">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition-transform hover:scale-105 ${categoryColors[category]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
