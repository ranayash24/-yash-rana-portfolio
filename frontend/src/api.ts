const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5050";

export const api = {
  profile: async () => {
    const res = await fetch(`${API_BASE}/api/profile`);
    if (!res.ok) {
      throw new Error("Failed to load profile");
    }
    return res.json();
  },
  projects: async () => {
    const res = await fetch(`${API_BASE}/api/projects`);
    if (!res.ok) {
      throw new Error("Failed to load projects");
    }
    return res.json();
  },
  contact: async (payload: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const res = await fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || "Failed to send message");
    }
    return data;
  },
};

export { API_BASE };
