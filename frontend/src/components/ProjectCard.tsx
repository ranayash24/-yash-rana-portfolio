import { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass card-hover flex h-full flex-col rounded-2xl p-6">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm text-slate-200">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-3 py-1 text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-teal-200 transition hover:text-teal-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
