import { Profile } from "../types";
import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";

export default function EducationSection({ profile }: { profile: Profile }) {
  return (
    <Section id="education" eyebrow="Timeline" title="Education">
      <div className="timeline space-y-6">
        {profile.education.map((edu) => (
          <TimelineItem
            key={edu.institution}
            title={edu.institution}
            subtitle={`${edu.degree} - ${edu.location}`}
            meta={edu.dates}
          />
        ))}
      </div>
    </Section>
  );
}
