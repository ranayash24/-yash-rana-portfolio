import { Profile } from "../types";
import Section from "../components/Section";

export default function AboutSection({ profile }: { profile: Profile }) {
  return (
    <Section id="about" eyebrow="Profile" title="About">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base text-slate-200">
          {profile.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Focused on contributing to research work and production-grade systems,
            with a grounding in AI/ML, full-stack development, and distributed
            systems.
          </p>
        </div>
        <div className="glass card-hover rounded-2xl p-6 text-sm text-slate-200">
          <h3 className="text-base font-semibold text-white">Working style</h3>
          <ul className="mt-4 space-y-2">
            <li>Patient, methodical approach to problem-solving.</li>
            <li>Comfortable in deadline-driven environments.</li>
            <li>Quick to learn new tools and platforms.</li>
            <li>Works independently or with cross-functional teams.</li>
            <li>Contributes to research work and production-grade systems.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
