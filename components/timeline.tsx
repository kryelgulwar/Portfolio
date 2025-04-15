import { Badge } from "@/components/ui/badge"

export function Timeline() {
  const experiences = [
    {
      title: "Operations Associate – Data & Contract Management",
      company: "National Games, Uttarakhand",
      period: "2025",
      tools: ["Power BI", "Excel (Advanced)", "MS Project", "SAP ERP"],
      highlights: [
        "Managed data for 42 events with 10,000+ athletes, 5,000+ staff, and 3,000+ dignitaries.",
        "Built interactive Power BI dashboards to track manpower, contracts, and real-time issue resolution.",
        "Supported data-backed cost negotiations with vendors, contributing to a 20% cost reduction.",
        "Automated reporting workflows to enable faster decision-making during event operations.",
      ],
    },
    {
      title: "Operations Associate – Accommodation & Logistics Data",
      company: "National Games, Goa",
      period: "2023",
      tools: ["Power BI", "Excel"],
      highlights: [
        "Managed hotel data for 250+ hotels across 7 cities for 13,000+ guests.",
        "Developed Power BI visuals to monitor guest allocations, occupancy trends, and resource needs.",
        "Assisted in refining data accuracy for room allocations, improving overall logistics coordination.",
        "Collaborated with cross-functional teams to update and share data-driven insights in real time.",
      ],
    },
    {
      title: "Tour Manager – Transport Data Monitoring",
      company: "Khelo India Youth Games, Uttar Pradesh",
      period: "2023",
      tools: ["Power BI", "Excel"],
      highlights: [
        "Monitored transportation for 8,000+ athletes and staff using structured tracking reports.",
        "Designed Power BI dashboards to visualize vehicle movement and delay trends.",
        "Achieved 20% improvement in transport efficiency by identifying and acting on key delay patterns.",
        "Reported daily performance metrics to operations leadership for quick issue resolution.",
      ],
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-muted"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-5 h-5 rounded-full border-4 border-background bg-primary"></div>

            <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "md:grid-flow-dense" : ""}`}>
              <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {exp.company} | {exp.period}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                    {exp.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <ul className={`space-y-2 text-sm ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start md:items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 md:order-2"></span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`hidden md:block ${index % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
