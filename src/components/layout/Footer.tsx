export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a href="#" className="text-lg font-bold">
              <span className="text-primary">Karan</span>Rao
            </a>
            <span className="text-muted-foreground">© {currentYear}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Built with React & Vite</span>
            <span>•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
