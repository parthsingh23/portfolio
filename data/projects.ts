export type Project = {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
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
      "A full-stack analytics platform for exploring sales performance through KPIs, trends, product rankings, regional breakdowns and category analysis.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "Recharts",
    ],
    highlights: [
      "Interactive sales KPIs, revenue trends, regional and category breakdowns and top-product analysis.",
      "Daily, weekly and monthly revenue trend analysis with date-range filtering.",
      "FastAPI and SQLModel backend with analytics endpoints, SQL aggregations, validation and CRUD operations.",
      "JWT authentication with protected endpoints and admin/viewer role-based access.",
    ],
    category: "Full Stack",
    status: "Live",
    github_frontend: "https://github.com/parthsingh23/SalesDashboard",
    github_backend: "https://github.com/parthsingh23/SalesAnalyticsAPI",
    live: "https://sales-dashboard-ebon-one.vercel.app/",
    featured: true,
  },
];
