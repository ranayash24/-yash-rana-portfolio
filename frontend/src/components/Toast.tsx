import { motion, AnimatePresence } from "framer-motion";

export type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className={`fixed bottom-6 right-6 z-50 rounded-xl border px-4 py-3 text-sm shadow-lg backdrop-blur ${
            toast.type === "success"
              ? "border-teal-300/40 bg-teal-500/10 text-teal-100"
              : "border-red-300/40 bg-red-500/10 text-red-100"
          }`}
        >
          <div className="flex items-center gap-4">
            <span>{toast.message}</span>
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-white/70"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
