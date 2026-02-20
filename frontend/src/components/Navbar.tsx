import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-ink-900/70 backdrop-blur-lg">
        <nav className="section-pad flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3">
            <AnimatedLogo size={32} />
            <span className="text-base font-semibold tracking-wide text-white">
              Yash Rana
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <ThemeToggle />
            </div>
            <a
              href={`mailto:${email}`}
              className="btn-primary px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm"
            >
              <span className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m22 8-10 6L2 8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email me
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-violet-300/40 hover:text-white md:hidden"
            >
              {open ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        <div
          id="mobile-nav"
          className={`md:hidden ${open ? "block" : "hidden"}`}
        >
          <div className="section-pad pb-4">
            <div className="glass rounded-2xl p-4">
              <div className="flex flex-col gap-3 text-sm text-slate-200">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
