<<<<<<< HEAD

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Github, Linkedin, Mail, Twitter, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock workshops data
const workshops = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Learn advanced React patterns and techniques to build scalable applications.",
    date: "April 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "advanced-react-patterns",
  },
  {
    id: 2,
    title: "TypeScript for JavaScript Developers",
    description: "A comprehensive introduction to TypeScript for experienced JavaScript developers.",
    date: "May 10, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Tech Hub, San Francisco",
    image: "/placeholder.svg?height=300&width=500",
    status: "Upcoming",
    slug: "typescript-for-javascript-developers",
  },
  {
    id: 3,
    title: "Building with Next.js",
    description: "Explore the features of Next.js and learn how to build performant web applications.",
    date: "March 5, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Online",
    image: "/placeholder.svg?height=300&width=500",
    status: "Past",
    slug: "building-with-nextjs",
  },
]
=======
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, ExternalLink, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Timeline } from "@/components/timeline"
import { SkillsGrid } from "@/components/skills-grid"
import { ProjectCard } from "@/components/project-card"
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="container-custom section-spacing flex flex-col justify-center min-h-[90vh]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground text-lg mb-2 font-medium">Hello, I'm</p>
<<<<<<< HEAD
              <h1 className="heading-xl mb-4">John Doe</h1>
              <h2 className="heading-md text-muted-foreground">Full Stack Developer</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              I create beautiful, functional websites and applications with a focus on typography and user experience.
=======
              <h1 className="heading-lg mb-4"><span className="text-primary">K</span>aran<span className="text-primary">R</span>ao<span className="text-primary">Y</span>elgulwar</h1>
              <h2 className="heading-md text-muted-foreground">Data Analyst</h2>
            </div>
            <p className="body-lg text-muted-foreground max-w-md">
              Transforming complex data into actionable insights. Specialized in sports event operations and logistics
              analytics.
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
<<<<<<< HEAD
                <Link href="/projects">View Projects</Link>
=======
                <Link href="/#experience">View Experience</Link>
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-muted rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted rounded-full opacity-50"></div>
            <div className="relative z-10 aspect-square bg-muted rounded-2xl overflow-hidden border border-border">
<<<<<<< HEAD
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="John Doe"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
=======
            <Image
               src="/typography-portfolio/placeholder.svg"
                alt="John Doe"
               width={600}
               height={600}
               className="w-full h-full object-cover"
               unoptimized
            />
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowRight className="h-10 w-10 rotate-90 text-muted-foreground" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container-custom section-spacing">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              About
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">01</span>
            </h2>
          </div>
          <div className="md:col-span-2">
            <p className="body-lg mb-6">
<<<<<<< HEAD
              I'm a passionate developer with over 5 years of experience building web applications. I specialize in
              React, Next.js, and Node.js, creating responsive and accessible websites.
            </p>
            <p className="body-lg mb-6">
              When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I believe in
              clean, minimal design that puts the focus on content and user experience.
            </p>
            <p className="body-lg mb-10">
              I also regularly conduct{" "}
              <Link href="/workshops" className="font-medium underline underline-offset-4">
                workshops and training sessions
              </Link>{" "}
              for developers looking to level up their skills in modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/blog">Read My Blog</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/workshops">View Workshops</Link>
=======
              I'm a passionate data analyst with specialized experience in sports event operations and logistics. My
              expertise lies in transforming complex operational data into actionable insights that drive efficiency and
              cost-effectiveness.
            </p>
            <p className="body-lg mb-6">
              With a background in managing data for large-scale national sporting events, I've developed a unique skill
              set that combines analytical thinking with practical operational knowledge. I excel at creating
              interactive dashboards and visualizations that tell compelling stories from data.
            </p>
            <p className="body-lg mb-10">
              When I'm not crunching numbers, I enjoy hiking, reading about emerging data technologies, and contributing
              to data science communities. I'm constantly looking for new challenges that allow me to apply my
              analytical skills to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://medium.com/@johndoe" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read My Blog
                </Link>
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
              </Button>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Projects Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Featured Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
          <Link href="/projects" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-24">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-8xl font-bold text-muted/30 group-hover:text-muted/50 transition-colors">
                    0{project}
                  </span>
                  <h3 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                    Project {project}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    A detailed description of this project, including the problem it solves, the technologies used, and
                    the challenges overcome during development.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href={`/projects/project-${project}`}>View Project</Link>
                  </Button>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                    <Image
                      src={`/placeholder.svg?height=270&width=480`}
                      alt={`Project ${project}`}
                      width={480}
                      height={270}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Workshops
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
          <Link href="/workshops" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Workshops
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <Card key={workshop.id} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={workshop.status === "Upcoming" ? "default" : "secondary"}>{workshop.status}</Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{workshop.title}</CardTitle>
                <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{workshop.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{workshop.location}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link href={`/workshops/${workshop.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
=======
      {/* Experience Section */}
      <section id="experience" className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Experience
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">02</span>
          </h2>
        </div>

        <Timeline />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Projects
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">03</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Event Operations Dashboard"
            description="Interactive Power BI dashboard for tracking manpower, contracts, and real-time issue resolution during National Games."
            image="/placeholder.svg?height=300&width=500"
            tags={["Power BI", "Data Visualization", "Operations"]}
            link="#"
          />
          <ProjectCard
            title="Accommodation Analytics"
            description="Data visualization system for monitoring hotel allocations and occupancy trends across multiple cities."
            image="/placeholder.svg?height=300&width=500"
            tags={["Power BI", "Excel", "Logistics"]}
            link="#"
          />
          <ProjectCard
            title="Transport Efficiency Analysis"
            description="Dashboard that identified key delay patterns, resulting in 20% improvement in transport efficiency."
            image="/placeholder.svg?height=300&width=500"
            tags={["Power BI", "Data Analysis", "Transport"]}
            link="#"
          />
          <ProjectCard
            title="Cost Optimization Model"
            description="Data-backed negotiation framework that contributed to 20% cost reduction with vendors."
            image="/placeholder.svg?height=300&width=500"
            tags={["Excel", "Financial Analysis", "Negotiation"]}
            link="#"
          />
          <ProjectCard
            title="Automated Reporting System"
            description="Workflow automation that enabled faster decision-making during event operations."
            image="/placeholder.svg?height=300&width=500"
            tags={["Power BI", "Automation", "Reporting"]}
            link="#"
          />
          <ProjectCard
            title="Resource Allocation Tracker"
            description="Visual system for monitoring and optimizing resource distribution across multiple event venues."
            image="/placeholder.svg?height=300&width=500"
            tags={["Power BI", "Resource Management", "Analytics"]}
            link="#"
          />
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
        </div>
      </section>

      {/* Skills Section */}
<<<<<<< HEAD
      <section className="container-custom section-spacing">
=======
      <section id="skills" className="container-custom section-spacing">
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h2 className="heading-lg mb-6 relative">
              Skills
              <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">04</span>
            </h2>
          </div>
          <div className="md:col-span-2">
<<<<<<< HEAD
            <div className="grid grid-cols-2 gap-y-8 gap-x-16">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL", "MongoDB", "AWS"].map(
                (skill, index) => (
                  <div key={skill} className="border-b border-border pb-2 group">
                    <div className="flex items-baseline">
                      <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">{skill}</span>
                    </div>
                  </div>
                ),
              )}
            </div>
=======
            <SkillsGrid />
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Recent Blog Posts */}
      <section className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="heading-lg relative">
            Recent Articles
            <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
          </h2>
          <Link href="/blog" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
            View All Articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((post) => (
            <Link
              key={post}
              href={`/blog/post-${post}`}
              className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-muted overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400`}
                  alt={`Blog Post ${post}`}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">March {post}, 2025</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Typography in Web Design: Best Practices
                </h3>
                <p className="text-muted-foreground">
                  Learn how to use typography effectively to create beautiful and readable web experiences.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

=======
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
      {/* Contact Section */}
      <section id="contact" className="container-custom section-spacing">
        <h2 className="heading-lg mb-16 relative text-center">
          Get In Touch
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 left-1/2 -translate-x-1/2 opacity-80">
<<<<<<< HEAD
            06
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl leading-relaxed mb-10">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">john.doe@example.com</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">linkedin.com/in/johndoe</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">github.com/johndoe</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-xl text-muted-foreground hover:text-foreground group">
                <Twitter className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="link-underline">twitter.com/johndoe</span>
              </a>
            </div>
          </div>
          <div>
            <form className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-lg mb-2 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
                ></textarea>
              </div>
              <div>
                <Button size="lg" className="text-lg px-8 w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
=======
            05
          </span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="border border-border bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                    <p className="text-muted-foreground">
                      Feel free to reach out for collaborations or just a friendly chat.
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:kryelgulwar@gmail.com" target="blank"
                        className="font-medium hover:text-primary transition-colors"
                      >
                        kryelgulwar@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <a href="https://wa.me/7225044854" target="blank" className="font-medium hover:text-primary transition-colors">
                        +91 7225044854
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <a href="mailto:john.doe@example.com" target="blank"> 
                      <Mail className="mr-2 h-5 w-5" />
                      Email Me
                    </a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Me
                    </a>
                  </Button>

                  <Button asChild variant="secondary" size="lg" className="w-full">
                    <Link href="https://medium.com/@johndoe" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                      Visit My Medium Blog
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
        </div>
      </section>
    </div>
  )
}
