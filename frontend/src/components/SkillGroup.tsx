export default function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="glass card-hover rounded-2xl p-6">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 px-3 py-1">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
