
export interface Project {
  title: string;
  description: string;
  images: string[];
  links: {
    label: string;
    url: string;
    type: "primary" | "secondary";
  }[];
}

export const projects: Project[] = [
  {
    title: "Landing Page Accreditation System",
    description: "This project is designed to provide a clear guide on the regulations that apply to students on campus. By utilizing a project-based learning method, students are encouraged to collaborate and contribute to creating a better learning environment..",
    images: ["/my project/landing page.png", "/my project/bis.png", "/my project/desc.png", "/my project/desc-1.png"],
    links: [
      { label: "Figma", url: "https://www.figma.com/design/vUjj35ElLr5QBih6pXlgIk/accreditation-ui?node-id=0-1&t=pA7e1frIYur7RO1c-1", type: "primary" },
      { label: "GitHub", url: "https://github.com/SatriyaViar/PBL_2025", type: "secondary" }
    ]
  },
  {
    title: "Tibma",
    description: "A dashboard web app for managing data and tracking analytics with a clean interface and smooth workflow.",
    images: ["/my project/tibma/Landing page.jpg", "/my project/tibma/Login Screen.jpg"],
    links: [
      { label: "GitHub", url: "https://github.com/NaufalArdian12/TibMa", type: "primary" },
    ]
  },
  {
    title: "Nail Art : Luxe-Nail Web & Mobile",
    description: "An innovative Nail Art Design platform, combining AI Design Visualisation features (integrated with OpenRouter API) in the Flutter mobile application, with an efficient Web Booking system. The backend (Laravel/MySQL) is designed for scalability, handling exclusive data management (treatment tiers) and complex queue workflows for 4 Nail Artists..",
    images: [
      "/my project/luxenail/landingpage.png",
      "/my project/luxenail/loginpage.png",
      "/my project/luxenail/dashboard.png",
      "/my project/luxenail/booking.png",
      "/my project/luxenail/aboutus.png"
    ],
    links: [
      { label: "Live", url: "#", type: "primary" },
      { label: "GitHub", url: "#", type: "secondary" },
      {label: "Figma WEB", url: "https://www.figma.com/design/blXKJqWCsy0iJokQUmHFTa/Mobile-LuxNail-dev?node-id=0-1&t=3ZYJiN6m5UtSL5rW-1", type: "secondary" },
      {label: "Figma MOBILE", url: "https://www.figma.com/design/6ZgfIMXHJMfVKSFyJ52hUe/Web-LuxNail-Desain-landing?node-id=0-1&t=EKzJctJ0IzTYElWW-1", type: "secondary" },
    ]
  },

  {
    title: "Coffe Shop Landing Page",
    description: "A modern coffee shop landing page with a responsive design, showcasing premium blends",
    images: ["/my%20project/ecommerce/section.png"],
    links: [
      { label: "Live Demo", url: "https://coffesimplelanding.netlify.app/", type: "primary" },
      { label: "GitHub", url: "https://github.com/Samidkun/E-commerce-Coffee-Landing-Page", type: "secondary" },
      {label: "Figma", url: "https://www.figma.com/design/XNL2Tgnq2B9RdqZLtO8zXN/Ecommerce-Landing-Page?node-id=104-9&t=XXghogha9ylaHrPe-1", type: "secondary" }
    ]
  },
  {
    title: "Expense Manager App",
    description: "A comprehensive expense tracking application to help users manage their finances. Features include income/expense logging, category management, and visual reports.",
    images: ["/my%20project/expense%20manager/home.png"],
    links: [
      { label: "Figma", url: "https://www.figma.com/design/G7FG9HuQHvXZUHijSeclNZ/Expense-UI-Design?node-id=0-1&t=AntyAqhygbP4z7XO-1", type: "primary" },
      { label: "GitHub", url: "https://github.com/room1357/individual-project-3g-Samidkun", type: "secondary" }
    ]
  },
  {
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard offering real-time updates, 5-day forecasts, and detailed atmospheric data. Designed with a clean interface for easy weather monitoring.",
    images: ["/my%20project/weather/dashboard.png"],
    links: [
      { label: "Figma", url: "https://www.figma.com/design/co10nyaar2tJx51tTru92Y/Admin?node-id=0-1&t=SVvrc3CDtpLXoqyC-1", type: "primary" },
      { label: "GitHub", url: "https://github.com/Samidkun/Samidkun-Professional-Weather-Dashboard", type: "secondary" }
    ]
  }
];
