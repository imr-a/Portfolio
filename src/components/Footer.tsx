import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-slate-500">
          &copy; {year} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
        <a
          href="#"
          className="text-sm text-slate-500 transition-colors hover:text-white"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  )
}
