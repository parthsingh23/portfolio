export type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: "Live" | "In Development";
  github_frontend?: string;
  github_backend?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Sales Analytics Platform",
    description:
      "A full-stack analytics platform for exploring sales performance through KPIs, trends, product rankings, regional breakdowns, and category analysis.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Recharts",
    ],
    category: "Full Stack",
    status: "Live",
    github_frontend: "https://github.com/parthsingh23/SalesDashboard",
    github_backend: "https://github.com/parthsingh23/SalesAnalyticsAPI",
    live: "https://salesdashboard.vercel.app",
    featured: true,
  },
];
