import AnimatedLogo from "./AnimatedLogo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-900/80 backdrop-blur">
      <nav className="section-pad flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3">
          <AnimatedLogo size={40} />
          <span className="text-lg font-semibold tracking-wide">Yash Rana</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-teal-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${email}`}
            className="rounded-full border border-teal-300/40 px-4 py-2 text-sm font-semibold text-teal-200 transition hover:border-teal-300 hover:text-white"
          >
            Email me
          </a>
        </div>
      </nav>
    </header>
  );
}
