import { MediumIcon } from "../ui/icons"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate Data Analyst with expertise in transforming complex data into clear, actionable insights.
              With a background in statistics and business intelligence, I specialize in creating interactive dashboards
              and reports that drive decision-making.
            </p>
            <p className="text-lg mb-6">
              My experience spans across event management, logistics, and operations, where I've leveraged data to
              optimize processes, reduce costs, and improve overall efficiency.
            </p>
            <p className="text-lg mb-8">
              I'm particularly skilled in Power BI, Excel, and SQL, with a growing expertise in Python for data
              analysis. I thrive in collaborative environments where I can translate data stories into business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <MediumIcon className="w-5 h-5" />
                <span>Read My Blog</span>
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Specialized in event data management and operational analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Experienced in managing data for large-scale national events</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Skilled in creating interactive Power BI dashboards for real-time monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Proficient in data-backed cost negotiations and resource optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Passionate about automating reporting workflows for faster decision-making</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
