import { ChartIcon } from "../ui/icons"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col items-start max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-4 text-sm rounded-full bg-primary/10 text-primary"
          >
            <ChartIcon className="w-4 h-4 mr-2" />
            <span>Data Analyst</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-primary">Karan Rao Yelgulwar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 md:pr-10"
          >
            I help organizations make data-driven decisions through powerful visualizations, insightful analysis, and
            effective reporting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary px-6 py-3">
              Get in Touch
            </a>
            <a href="#projects" className="btn-outline px-6 py-3">
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Dashboards Built</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg bg-card border border-border"
            >
              <div className="text-3xl font-bold text-primary">30%</div>
              <div className="text-sm text-muted-foreground">Avg. Cost Reduction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
