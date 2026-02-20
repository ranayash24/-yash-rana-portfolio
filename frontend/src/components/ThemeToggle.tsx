import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", theme === "light");
    root.classList.toggle("theme-dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-200 transition hover:border-violet-300/40 hover:text-white"
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            d="M12 3a1 1 0 0 1 1 1v2.2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Z"
            strokeLinecap="round"
          />
          <path
            d="M12 17.8a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.2a1 1 0 0 1 1-1Z"
            strokeLinecap="round"
          />
          <path
            d="M4.2 6.2a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 1 1-1.4 1.4L4.2 7.6a1 1 0 0 1 0-1.4Z"
            strokeLinecap="round"
          />
          <path
            d="M16.8 18.8a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1-1.4 1.4l-1.6-1.6a1 1 0 0 1 0-1.4Z"
            strokeLinecap="round"
          />
          <path
            d="M3 12a1 1 0 0 1 1-1h2.2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
            strokeLinecap="round"
          />
          <path
            d="M17.8 12a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-2.2a1 1 0 0 1-1-1Z"
            strokeLinecap="round"
          />
          <path
            d="M4.2 17.8a1 1 0 0 1 1.4 0l1.6-1.6a1 1 0 1 1 1.4 1.4l-1.6 1.6a1 1 0 0 1-1.4-1.4Z"
            strokeLinecap="round"
          />
          <path
            d="M16.8 5.2a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 1 1-1.4 1.4l-1.6-1.6a1 1 0 0 1 0-1.4Z"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3.6" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path
            d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
