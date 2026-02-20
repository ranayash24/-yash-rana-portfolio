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
    <section id={id} className="section-pad scroll-mt-24 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[88rem]">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <p className="text-sm font-medium text-violet-300">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
