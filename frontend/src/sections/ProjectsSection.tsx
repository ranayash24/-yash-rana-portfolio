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
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              active === category
                ? "bg-teal-400 text-ink-900"
                : "border border-white/15 text-slate-200 hover:border-teal-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
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
