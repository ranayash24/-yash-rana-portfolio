import { Profile } from "../types";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="section-pad border-t border-white/10 py-10 text-sm text-slate-300">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>(c) {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href={profile.linkedin}
            className="hover:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            className="hover:text-teal-300"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-teal-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
