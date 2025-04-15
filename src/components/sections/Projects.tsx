import { ChartIcon, CodeIcon, DatabaseIcon, GitHubIcon } from "../ui/icons"

export default function Projects() {
  const projects = [
    {
      title: "Event Management Dashboard",
      description:
        "Interactive Power BI dashboard for tracking event metrics, attendance, and resource allocation in real-time.",
      icon: ChartIcon,
      tags: ["Power BI", "DAX", "Data Modeling"],
      link: "#",
      github: "https://github.com/yourusername/event-management-dashboard",
    },
    {
      title: "Accommodation Allocation System",
      description: "Excel-based system with VBA automation for managing hotel allocations for large events.",
      icon: DatabaseIcon,
      tags: ["Excel", "VBA", "Data Validation"],
      link: "#",
      github: "https://github.com/yourusername/accommodation-allocation",
    },
    {
      title: "Vendor Cost Analysis Tool",
      description: "Data analysis tool that helped identify cost-saving opportunities across vendor contracts.",
      icon: ChartIcon,
      tags: ["Excel", "Power Query", "Data Analysis"],
      link: "#",
      github: "https://github.com/yourusername/vendor-cost-analysis",
    },
    {
      title: "Logistics Optimization Model",
      description: "Statistical model for optimizing transportation routes and resource allocation.",
      icon: CodeIcon,
      tags: ["Python", "Pandas", "Optimization"],
      link: "#",
      github: "https://github.com/yourusername/logistics-optimization",
    },
    {
      title: "Operational KPI Tracker",
      description: "Automated reporting system for tracking key performance indicators across event operations.",
      icon: ChartIcon,
      tags: ["Power BI", "SQL", "ETL"],
      link: "#",
      github: "https://github.com/yourusername/kpi-tracker",
    },
    {
      title: "Budget Forecasting Tool",
      description: "Predictive model for budget forecasting based on historical event data and current trends.",
      icon: DatabaseIcon,
      tags: ["Excel", "Statistical Analysis", "Forecasting"],
      link: "#",
      github: "https://github.com/yourusername/budget-forecasting",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>

              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-primary flex items-center justify-center gap-2 py-2"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
