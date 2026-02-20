import { motion } from "framer-motion";
import { Profile } from "../types";
import AnimatedLogo from "../components/AnimatedLogo";

export default function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="section-pad relative flex min-h-[70vh] items-center pb-16 pt-24 md:pt-32"
    >
      <div className="mx-auto flex max-w-[88rem] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedLogo size={80} />
        </motion.div>
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="pill">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-violet-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </span>
        </motion.div>
        <motion.p
          className="mt-4 text-sm font-medium text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {profile.title}
        </motion.p>
        <motion.h1
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[82px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-5xl text-base text-slate-300 md:text-lg md:leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.summary[0]}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href={`mailto:${profile.email}`} className="btn-primary">
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
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub
          </a>
          <a href="/resume.pdf" className="btn-ghost" download>
            Resume
          </a>
        </motion.div>
        <motion.div
          className="glass card-hover mt-12 w-full max-w-5xl rounded-3xl p-6 text-left md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h2 className="text-lg font-semibold text-white">Expertise highlights</h2>
          <p className="mt-3 text-sm text-slate-300">
            Based in {profile.location}. Focused on research work and production-grade
            systems with a methodical approach to problem-solving.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {(profile.skills["Other Expertise"] || []).map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
