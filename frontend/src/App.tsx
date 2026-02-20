import { useEffect, useState } from "react";
import { api } from "./api";
import { Profile, Project } from "./types";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [profileData, projectData] = await Promise.all([
          api.profile(),
          api.projects(),
        ]);
        setProfile(profileData);
        setProjects(projectData.projects || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-ink-900 text-slate-100">
        <div className="section-pad py-16">
          <div className="skeleton h-8 w-40" />
          <div className="mt-6 space-y-3">
            <div className="skeleton h-4 w-3/4" />
            <div className="skeleton h-4 w-2/3" />
            <div className="skeleton h-4 w-1/2" />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="skeleton h-48" />
            <div className="skeleton h-48" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-900 text-slate-100">
        <p className="text-lg">{error || "Unable to load profile"}</p>
        <p className="mt-2 text-sm text-slate-400">
          Please refresh or check the backend API.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-900">
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-blob one" />
        <div className="ambient-blob two" />
      </div>
      <Navbar email={profile.email} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <EducationSection profile={profile} />
      <ExperienceSection profile={profile} />
      <ProjectsSection projects={projects} />
      <SkillsSection profile={profile} />
      <ContactSection profile={profile} />
      <Footer profile={profile} />
    </div>
  );
}
