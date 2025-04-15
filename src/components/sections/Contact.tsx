import { MailIcon, WhatsAppIcon, LinkedInIcon, GitHubIcon, TwitterIcon, MediumIcon } from "../ui/icons"

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect with me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <LinkedInIcon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <GitHubIcon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">GitHub</span>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TwitterIcon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">Twitter</span>
              </a>

              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MediumIcon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">Medium</span>
              </a>
            </div>
          </div>

          {/* Right Side - Direct Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Direct Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MailIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium group-hover:text-primary transition-colors">Email</span>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-card rounded-lg border hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <WhatsAppIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium group-hover:text-primary transition-colors">WhatsApp</span>
                  <p className="text-sm text-muted-foreground">+1 (234) 567-890</p>
                </div>
              </a>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                Currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
