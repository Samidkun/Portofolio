export interface Project {
  title: string;
  description: string;
  image: string;
  links: {
    label: string;
    url: string;
    type: "primary" | "secondary";
  }[];
}

export const projects: Project[] = [
  {
    title: "Landing Page Accreditation System",
    description: "A responsive website built to present the accreditation profile of the Business Information Systems Program at the State Polytechnic of Malang.",
    image: "/my project/landing page.png",
    links: [
      { label: "Figma", url: "https://www.figma.com/design/vUjj35ElLr5QBih6pXlgIk/accreditation-ui?node-id=0-1&t=pA7e1frIYur7RO1c-1", type: "primary" },
      { label: "GitHub", url: "https://github.com/SatriyaViar/PBL_2025", type: "secondary" }
    ]
  },
  {
    title: "Admin Dashboard",
    description: "A dashboard web app for managing data and tracking analytics with a clean interface and smooth workflow.",
    image: "/projects/dashboard.png",
    links: [
      { label: "Figma", url: "#", type: "primary" },
      { label: "Preview", url: "#", type: "secondary" }
    ]
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio to showcase projects and certificates. Built with Astro and Tailwind CSS to ensure fast performance and elegant design.",
    image: "/projects/portfolio.png",
    links: [
      { label: "Live", url: "#", type: "primary" },
      { label: "GitHub", url: "#", type: "secondary" }
    ]
  },
  {
    title: "E-Commerce App",
    description: "A mobile-first e-commerce application built with Flutter. Features include product catalog, cart management, and payment gateway integration.",
    image: "/projects/ecommerce.png",
    links: [
      { label: "Case Study", url: "#", type: "primary" },
      { label: "GitHub", url: "#", type: "secondary" }
    ]
  },
  {
    title: "Task Management System",
    description: "A collaborative task management tool for teams. Includes real-time updates, file sharing, and progress tracking.",
    image: "/projects/taskmanager.png",
    links: [
      { label: "Live Demo", url: "#", type: "primary" },
      { label: "GitHub", url: "#", type: "secondary" }
    ]
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather dashboard that displays current conditions and forecasts for multiple cities using a public API.",
    image: "/projects/weather.png",
    links: [
      { label: "Live", url: "#", type: "primary" },
      { label: "Source", url: "#", type: "secondary" }
    ]
  }
];
