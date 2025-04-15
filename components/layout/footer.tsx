import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-playfair text-3xl font-bold tracking-tight">
<<<<<<< HEAD
              John<span className="text-muted-foreground">Doe</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Full Stack Developer specializing in creating beautiful, functional websites and applications.
=======
              Karan<span className="text-primary">Rao</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Data Analyst specializing in sports event operations and logistics analytics.
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
=======
                <Link href="/#home" className="text-muted-foreground hover:text-foreground transition-colors">
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
                  Home
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
=======
                <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
                  Projects
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/workshops" className="text-muted-foreground hover:text-foreground transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
=======
                <Link href="/#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
<<<<<<< HEAD
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
=======
              <a
                href="mailto:kryelgulwar@gmail.com" target="blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/kryelgulwar/" target="blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/kryelgulwar" target="blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" target="blank" className="text-muted-foreground hover:text-foreground transition-colors">
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-muted-foreground">
<<<<<<< HEAD
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
=======
          <p>© {new Date().getFullYear()} Karan Rao Yelgulwar. All rights reserved.</p>
>>>>>>> 69f928f7320476072ebc34d77f427d1887fe9cb7
        </div>
      </div>
    </footer>
  )
}
