export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container-custom">
        <h2 className="section-heading">Professional Experience</h2>

        <div className="space-y-12">
          {/* National Games, Uttarakhand 2025 */}
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="md:ml-8 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] hidden md:block"></div>

              <div className="card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/5 p-6">
                    <h3 className="text-xl font-bold">National Games, Uttarakhand</h3>
                    <p className="text-primary font-medium mt-1">2025</p>
                    <div className="mt-4">
                      <p className="font-medium">Operations Associate</p>
                      <p className="text-muted-foreground">Data & Contract Management</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          Power BI
                        </span>
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          Excel (Advanced)
                        </span>
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          MS Project
                        </span>
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          SAP ERP
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Managed data for 42 events with 10,000+ athletes, 5,000+ staff, and 3,000+ dignitaries.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Built interactive Power BI dashboards to track manpower, contracts, and real-time issue
                          resolution.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Supported data-backed cost negotiations with vendors, contributing to a 20% cost reduction.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Automated reporting workflows to enable faster decision-making during event operations.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* National Games, Goa 2023 */}
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="md:ml-8 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] hidden md:block"></div>

              <div className="card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/5 p-6">
                    <h3 className="text-xl font-bold">National Games, Goa</h3>
                    <p className="text-primary font-medium mt-1">2023</p>
                    <div className="mt-4">
                      <p className="font-medium">Operations Associate</p>
                      <p className="text-muted-foreground">Accommodation & Logistics Data</p>
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          Power BI
                        </span>
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          Excel
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">Highlights:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Managed hotel data for 250+ hotels across 7 cities for 13,000+ guests.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Developed Power BI visuals to monitor guest allocations, occupancy trends, and resource needs.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Assisted in refining data accuracy for room allocations, improving overall logistics
                          coordination.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          Collaborated with cross-functional teams to update and share data-driven insights in real
                          time.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
