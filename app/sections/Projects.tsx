'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Tilt  from 'react-parallax-tilt'

const projects = [
  // {
  //   id: 1,
  //   title: 'E-commerce Platform',
  //   description: 'Built a high-performance online store handling 500+ daily transactions with Stripe integration and admin dashboard',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   image: '/images/portfolio1.jpg',
  //   link: '#',
  //   github: 'https://github.com/danielot-dev',
  //   stats: [
  //     { value: '40%', label: 'Faster load' },
  //     { value: '500+', label: 'Daily users' }
  //   ]
  // },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Designed an interactive portfolio with smooth animations and 100% accessibility score',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/Daniel OT Incorporations.COM - Google Chrome 7_2_2025 10_56_54 AM.png',
    link: 'https://danielot-dev.github.io/Daniel-Olobatoke-Portfolio/',
    github: 'https://github.com/danielot-dev',
    stats: [
      { value: '100%', label: 'Accessibility' },
      { value: '95+', label: 'Pagespeed' }
    ]
  },
  {
    id: 3,
    title: 'Job Search Website',
    description: 'Created a collaborative productivity tool for job seekers with real-time updates and Firebase integration',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/job-search-pro.png',
    link: 'https://danielot-dev.github.io/job-search-pro/',
    github: 'https://github.com/danielot-dev',
    stats: [
      { value: '20+', label: 'Teams' },
      { value: '4.9★', label: 'Rating' }
    ]
  },
]

const defaultOptions = {
  reverse: false,
  max: 8,
  perspective: 1000,
  scale: 1,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 -gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            Featured <span className="text-gold-500">Creations</span>
          </h2>
          <p className="text-lg text-navy-700 dark:text-navy-300 max-w-2xl mx-auto">
            Projects I've poured my creativity and code into
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000}>
                <div className="h-full bg- dark:bg-navy-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20 dark:border-navy-700/50 group">
                  {/* Image with hover effect */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Stats badges */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.stats.map((stat, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm rounded-full text-black text-xs font-medium"
                        >
                          {stat.value} {stat.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-950 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-navy-700 dark:text-navy-300 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ y: -2 }}
                          className="px-2.5 py-1 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gold-500 text-navy-900 font-medium rounded-lg hover:bg-gold-600 transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex items-center justify-center w-12 p-2.5 border border-navy-200 dark:border-navy-700 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
                      >
                        <FiGithub className="text-lg" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ y: -3 }}
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-gold-500 text-gold-600 dark:text-gold-400 font-medium rounded-lg hover:bg-gold-500/10 transition-colors"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}