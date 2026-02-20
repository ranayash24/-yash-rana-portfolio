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
      <span className="absolute left-2.5 top-6 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-glow" />
      <div className="glass card-hover rounded-2xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-slate-300">{meta}</span>
        </div>
        <p className="text-sm text-violet-300">{subtitle}</p>
        {children && <div className="mt-4 text-sm text-slate-300">{children}</div>}
      </div>
    </motion.div>
  );
}
