'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDocker, FaFigma } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiJest } from 'react-icons/si'
import { FiGitBranch } from 'react-icons/fi'

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, proficiency: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, proficiency: 85 },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, proficiency: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, proficiency: 95 },
      { name: 'Framer Motion', icon: <span className="text-xs font-bold">FM</span>, proficiency: 75 },
    ],
    color: 'bg-blue-100/80 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, proficiency: 88 },
      { name: 'Express', icon: <SiExpress />, proficiency: 82 },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, proficiency: 78 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, proficiency: 70 },
    ],
    color: 'bg-purple-100/80 dark:bg-purple-900/30',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: <FiGitBranch className="text-[#F05032]" />, proficiency: 92 },
      { name: 'VS Code', icon: <span className="text-xs font-bold">VS</span>, proficiency: 98 },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" />, proficiency: 85 },
      { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" />, proficiency: 65 },
      { name: 'Jest', icon: <SiJest className="text-[#C21325]" />, proficiency: 75 },
    ],
    color: 'bg-amber-100/80 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-400'
  },
]

export default function TechStack() {
  return (
    <section className="py-24 -gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            My <span className="text-gold-500">Tech Toolkit</span>
          </h2>
          <p className="text-lg text-navy-700 dark:text-navy-300 max-w-2xl mx-auto">
            Skills quantified with proficiency levels
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stack.color} p-8 rounded-2xl shadow-lg border border-white/20 dark:border-navy-700/50 backdrop-blur-sm`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${stack.iconColor} bg-white/50 dark:bg-navy-700/50`}>
                  {stack.category === 'Frontend' ? <FaReact className="text-2xl" /> :
                   stack.category === 'Backend' ? <FaNodeJs className="text-2xl" /> :
                   <FaDocker className="text-2xl" />}
                </div>
                <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
                  {stack.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {stack.items.map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-navy dark:bg-navy-800">
                          {item.icon}
                        </div>
                        <span className="font-medium text-navy-800 dark:text-navy-200">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-navy-700 dark:text-navy-300">
                        {item.proficiency}%
                      </span>
                    </div>
                    
                    {/* Animated Proficiency Bar */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.proficiency}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-white/80 dark:bg-navy-700/50 rounded-full overflow-hidden"
                    >
                      <div 
                        className={`h-full ${stack.iconColor} rounded-full`}
                        style={{ width: `${item.proficiency}%` }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}