import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function TimelineItem({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle: string;
  meta: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute left-2.5 top-6 h-3 w-3 rounded-full bg-teal-400 shadow-glow" />
      <div className="glass card-hover rounded-2xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-slate-300">{meta}</span>
        </div>
        <p className="text-sm text-teal-200">{subtitle}</p>
        {children && <div className="mt-4 text-sm text-slate-200">{children}</div>}
      </div>
    </motion.div>
  );
}
