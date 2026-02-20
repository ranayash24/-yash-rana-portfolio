import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-pad py-16 md:py-20">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.3em] text-teal-300">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
