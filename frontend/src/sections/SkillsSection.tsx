import Section from "../components/Section";
import SkillGroup from "../components/SkillGroup";
import { Profile } from "../types";
import { motion } from "framer-motion";

export default function SkillsSection({ profile }: { profile: Profile }) {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(profile.skills).map(([group, skills]) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <SkillGroup title={group} skills={skills} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
