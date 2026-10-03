export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "C/C++"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Statistics",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "SQLModel", "Pydantic", "REST APIs", "JWT", "OAuth2"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Supabase", "Database Design", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "Recharts"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Linux",
      "DevTools",
      "Vercel",
      "Render",
    ],
  },
];
