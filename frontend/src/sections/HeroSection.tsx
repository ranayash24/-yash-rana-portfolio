import { motion } from "framer-motion";
import { Profile } from "../types";

export default function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="section-pad hero-grid relative overflow-hidden pb-16 pt-20 md:pt-28"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute left-[-10%] top-[-20%] h-72 w-72 animate-float rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-10%] h-80 w-80 animate-float rounded-full bg-amber-400/20 blur-3xl" />
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-teal-300"
          >
            Software Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-200"
          >
            {profile.summary[0]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-ink-900 transition hover:bg-teal-300"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-teal-300"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-teal-300"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-teal-300"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass card-hover rounded-3xl p-8"
        >
          <h2 className="text-lg font-semibold text-white">Expertise highlights</h2>
          <p className="mt-4 text-sm text-slate-200">
            Based in {profile.location}. Focused on research work and production-grade
            systems with a methodical approach to problem-solving.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {(profile.skills["Other Expertise"] || []).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
