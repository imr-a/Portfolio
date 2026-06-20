import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function ExternalLinkIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A collection of projects that showcase my skills in building modern web applications."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface-elevated p-8 transition-all hover:border-indigo-500/30 hover:glow-ring"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-400">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2h15a2.25 2.25 0 002.25-2v-6.75" />
                  </svg>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    aria-label={`${project.title} on GitHub`}
                    className="text-slate-500 transition-colors hover:text-white"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label={`${project.title} live demo`}
                    className="text-slate-500 transition-colors hover:text-white"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface-muted px-2.5 py-1 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {other.map((project) => (
              <article
                key={project.title}
                className="group flex items-start gap-4 rounded-xl border border-border bg-surface-elevated/50 p-6 transition-colors hover:border-border hover:bg-surface-elevated"
              >
                <div className="mt-1 shrink-0 text-slate-600 transition-colors group-hover:text-indigo-400">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 gap-2">
                      <a href={project.githubUrl} className="text-slate-500 hover:text-white">
                        <GitHubIcon />
                      </a>
                      <a href={project.liveUrl} className="text-slate-500 hover:text-white">
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
