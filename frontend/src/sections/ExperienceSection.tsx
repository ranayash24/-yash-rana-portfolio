import { Profile } from "../types";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";

export default function ExperienceSection({ profile }: { profile: Profile }) {
  return (
    <Section id="experience" eyebrow="Timeline" title="Experience">
      <div className="timeline space-y-6">
        {profile.experience.map((exp) => (
          <TimelineItem
            key={exp.company}
            title={exp.company}
            subtitle={`${exp.role} - ${exp.location}`}
            meta={exp.dates}
          >
            <ul className="list-disc space-y-2 pl-4">
              {exp.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </TimelineItem>
        ))}
      </div>
    </Section>
  );
}
