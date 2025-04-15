export default function Skills() {
  const skillCategories = [
    {
      category: "Data Visualization",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Tableau", level: 75 },
        { name: "Excel Charts", level: 95 },
        { name: "Data Storytelling", level: 85 },
      ],
    },
    {
      category: "Data Analysis",
      skills: [
        { name: "Excel (Advanced)", level: 95 },
        { name: "SQL", level: 80 },
        { name: "Python (Pandas)", level: 70 },
        { name: "Statistical Analysis", level: 85 },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "MS Office Suite", level: 95 },
        { name: "SAP ERP", level: 75 },
        { name: "MS Project", level: 80 },
        { name: "Git/Version Control", level: 65 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="section-heading">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold mb-6">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Additional Skills</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Data Cleaning",
              "ETL Processes",
              "Dashboard Design",
              "Report Automation",
              "Data Modeling",
              "KPI Development",
              "Process Optimization",
              "Cost Analysis",
              "Resource Planning",
              "Forecasting",
              "Data Governance",
              "Business Intelligence",
              "Data Quality Management",
              "Cross-functional Collaboration",
              "Project Management",
            ].map((skill, index) => (
              <span key={index} className="px-3 py-2 bg-secondary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
