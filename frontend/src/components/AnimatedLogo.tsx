import { motion } from "framer-motion";

const gradientId = "yr-gradient";

export default function AnimatedLogo({ size = 48 }: { size?: number }) {
  const radius = size / 2 - 6;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      whileHover={{ rotate: 2, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 160, damping: 14 }}
      aria-label="YR logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.2"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius - 4}
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Sora, system-ui, sans-serif"
        fontSize={size * 0.38}
        fill="white"
        style={{ letterSpacing: "0.08em" }}
      >
        YR
      </motion.text>
    </motion.svg>
  );
}
