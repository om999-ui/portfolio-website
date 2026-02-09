import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "JSTACK — Job Portal",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    description:
      "Responsive job portal where users can view listings and submit applications. Built server-side routing and form handling.",
    github: "https://github.com/om999-ui/job-Portal",
  },
  {
    title: "FitMeal – Nutrition Tracker ",
    tech: ["Node.js", "Express", "MongoDB","React"],
    description:
      "Built an end-to-end MERN app for logging meals and tracking macros; React frontend with mobile-first responsive CSS and Node.js/Express backend.",
    github: "https://github.com/om999-ui",
  },
  {
    title: "Service Booking Backend System ",
    tech: ["Java", "SQL (MySQL)", "JDBC", "REST APIs", "Git"],
    description:
      "Developed a backend system for booking services with Java and MySQL; implemented RESTful APIs for CRUD operations and integrated JDBC for database connectivity.",
    github: "  https://github.com/om999-ui/Service-Booking-Backend-System",
  },
  {
    title: "Student Management System (SQL Project) ",
    tech: ["SQL (MySQL)", "Database Design", "Queries", "Normalization"],
    description:
      "Designed and implemented a relational database for managing student records using MySQL; created complex queries and ensured data integrity through normalization techniques.",
    github: "https://github.com/om999-ui/Student-Management-System-SQL-Project-",
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-xl card-shadow-lg hover-lift transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 flex-grow">{project.description}</p>
                <div className="flex gap-3">
                  <Button variant="hero-outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
