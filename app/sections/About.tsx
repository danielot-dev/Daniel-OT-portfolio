'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCode, FaPalette, FaRocket, FaDownload, FaPaperPlane } from 'react-icons/fa'

export default function About() {
  const skills = [
    { name: 'HTML', icon: <FaCode />, category: 'frontend' },
    { name: 'CSS', icon: <FaPalette />, category: 'frontend' },
    { name: 'JavaScript', icon: <FaCode />, category: 'frontend' },
    { name: 'TypeScript', icon: <FaCode />, category: 'frontend' },
    { name: 'React', icon: <FaRocket />, category: 'frontend' },
    { name: 'Next.js', icon: <FaRocket />, category: 'frontend' },
    { name: 'Node.js', icon: <FaCode />, category: 'backend' },
    { name: 'Tailwind CSS', icon: <FaPalette />, category: 'frontend' },
    { name: 'Git', icon: <FaCode />, category: 'tools' },
    { name: 'Framer Motion', icon: <FaPalette />, category: 'frontend' },
  ]

  const categories: Record<string, { color: string; text: string }> = {
    frontend: { color: 'bg-blue-100/80 dark:bg-blue-900/30', text: 'text-blue-600 dark:text-blue-400' },
    backend: { color: 'bg-purple-100/80 dark:bg-purple-900/30', text: 'text-purple-600 dark:text-purple-400' },
    tools: { color: 'bg-amber-100/80 dark:bg-amber-900/30', text: 'text-amber-600 dark:text-amber-400' }
  }

  return (
    <section id="about" className="py-32 -gradient-to-br from-navy-950 to-navy-900 dark:from-navy-950 dark:to-navy-900 relative overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with animated decoration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center mx-auto">
              <FaCode className="text-3xl text-gold-500" />
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-gold-500">Me</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-2xl mx-auto">
            Crafting digital experiences with code and creativity
          </p>
        </motion.div>

        {/* Content with 3D effect */}
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-navy-900/50 dark:bg-navy-900/30 backdrop-blur-sm p-8 rounded-3xl border border-navy-800/30 shadow-2xl">
          {/* Profile image with floating effect */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 relative group"
            whileHover={{ y: -10 }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-4 border-gold-500/30 shadow-2xl">
              <Image 
                src="/images/IMG_20221123_164811_085 (2).jpg" 
                alt="Profile Picture" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/15 to-transparent opacity-40" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gold-500/10 border border-gold-500/30 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 -z-10"></div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-3/5"
          >
            <h3 className="text-4xl font-bold text-white mb-6">
              Who <span className="text-gold-500">am I?</span>
            </h3>
            
            <motion.p 
              className="text-xl leading-relaxed text-navy-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I'm a passionate full-stack developer specializing in creating immersive digital experiences. With a unique blend of technical expertise and design sensibility, I build applications that are not just functional but tell a story. My approach combines cutting-edge technology with human-centered design principles.
            </motion.p>

            {/* Animated skills cloud */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-10 h-1 bg-gold-500 mr-3"></span>
                My <span className="text-gold-500 ml-2">Superpowers</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.05
                    }}
                    whileHover={{ y: -5 }}
                    className={`px-4 py-2 rounded-full ${categories[skill.category].color} ${categories[skill.category].text} flex items-center gap-2 border border-white/10`}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interactive buttons */}
            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-xl hover:shadow-gold-lg transition-all duration-300 flex items-center gap-3"
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border-2 border-gold-500 text-white font-bold rounded-xl hover:bg-gold-500/10 hover:shadow-gold-sm transition-all duration-300 flex items-center gap-3"
              >
                <FaPaperPlane />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}