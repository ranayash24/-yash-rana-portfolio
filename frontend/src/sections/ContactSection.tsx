import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { Profile } from "../types";
import { api } from "../api";
import Toast, { ToastState } from "../components/Toast";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    if (form.email && !emailRegex.test(form.email))
      next.email = "Email is invalid";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await api.contact(form);
      setToast({ type: "success", message: "Message sent successfully." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setToast({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title="Contact">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          className="space-y-4 text-slate-200"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p>
            Have a role, research collaboration, or product idea in mind? Send a
            message and I will get back to you.
          </p>
          <div className="glass card-hover rounded-2xl p-6 text-sm">
            <p>
              <span className="text-teal-200">Email:</span> {profile.email}
            </p>
            <p className="mt-2">
              <span className="text-teal-200">Phone:</span> {profile.phone}
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href={profile.linkedin}
                className="text-teal-200 hover:text-teal-300"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="text-teal-200 hover:text-teal-300"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="glass card-hover rounded-2xl p-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-slate-200">Name</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-teal-300 focus:outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-300">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-200">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-teal-300 focus:outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-300">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-200">Subject</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-teal-300 focus:outline-none"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-red-300">{errors.subject}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-200">Message</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-teal-300 focus:outline-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-300">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-teal-400 px-5 py-2 text-sm font-semibold text-ink-900 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </Section>
  );
}
