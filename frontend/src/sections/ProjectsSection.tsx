import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(active));

  return (
    <Section id="projects" eyebrow="Selected" title="Projects">
      <span id="blog" className="block h-0 scroll-mt-24" aria-hidden="true" />
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-lg border px-4 py-2 text-xs font-semibold transition ${
              active === category
                ? "border-violet-400/60 bg-violet-500/15 text-white"
                : "border-white/10 text-slate-300 hover:border-violet-300/40 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
