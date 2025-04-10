import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  PieChart,
  Briefcase,
  TrendingUp,
  Truck,
  Building,
  Users,
  Clock,
  DollarSign,
} from "lucide-react"

export function SkillsGrid() {
  const skills = [
    {
      category: "Data Analysis Tools",
      items: [
        { name: "Power BI", icon: <PieChart className="h-6 w-6" />, level: 95 },
        { name: "Excel (Advanced)", icon: <FileSpreadsheet className="h-6 w-6" />, level: 90 },
        { name: "MS Project", icon: <Clock className="h-6 w-6" />, level: 85 },
        { name: "SAP ERP", icon: <Database className="h-6 w-6" />, level: 80 },
        { name: "SQL", icon: <Database className="h-6 w-6" />, level: 75 },
        { name: "Data Visualization", icon: <BarChart3 className="h-6 w-6" />, level: 90 },
      ],
    },
    {
      category: "Domain Expertise",
      items: [
        { name: "Event Operations", icon: <Briefcase className="h-6 w-6" />, level: 95 },
        { name: "Logistics Analytics", icon: <Truck className="h-6 w-6" />, level: 90 },
        { name: "Accommodation Management", icon: <Building className="h-6 w-6" />, level: 85 },
        { name: "Resource Allocation", icon: <Users className="h-6 w-6" />, level: 90 },
        { name: "Performance Metrics", icon: <TrendingUp className="h-6 w-6" />, level: 85 },
        { name: "Cost Analysis", icon: <DollarSign className="h-6 w-6" />, level: 80 },
      ],
    },
  ]

  return (
    <div className="space-y-10">
      {skills.map((category, idx) => (
        <div key={idx} className="space-y-4">
          <h3 className="text-2xl font-bold">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((skill, index) => (
              <Card key={index} className="border border-border hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">{skill.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
