import SectionHeading from './SectionHeading'

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Building products that matter"
          description="I'm a passionate developer who loves turning complex problems into simple, beautiful solutions."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-slate-400 lg:col-span-3">
            <p>
              With over five years of experience in web development, I specialize in
              building scalable, user-centric applications. My journey started with a
              curiosity for how things work on the web, and it has evolved into a career
              focused on creating meaningful digital products.
            </p>
            <p>
              I believe in writing clean, maintainable code and collaborating closely
              with designers and stakeholders. When I&apos;m not coding, you&apos;ll find me
              contributing to open source, exploring new technologies, or sharing
              knowledge through technical writing.
            </p>
            <p>
              Currently, I&apos;m focused on building accessible, performant web
              applications using modern tools like React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface-elevated p-8 glow-ring">
              <div className="grid grid-cols-3 gap-6">
                {highlights.map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-display text-3xl font-bold text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4 border-t border-border pt-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Focus</span>
                  <span className="text-slate-300">Full-Stack Development</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Interests</span>
                  <span className="text-slate-300">UI/UX, Open Source</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Education</span>
                  <span className="text-slate-300">B.S. Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
