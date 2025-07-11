'use client'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'

const experiences = [
 
  {
    id: 1,
    role: 'Junior Developer',
    company: 'Startup Solutions',
    period: 'June 2020 - June 2021',
    description: [
      'Started building websites ',
      'Reduced page load time by 40% through optimization',
      'Implemented automated testing that caught 200+ bugs',
    ],
    icon: <FaCode className="text-2xl" />,
    color: 'bg-purple-100 dark:bg-purple-900/50',
  },
  {
    id: 2,
    role: 'Intern',
    company: 'Diplomats and Eminenece ltd',
    period: 'Jan 2022 - April 2022',
    description: [
      'Built 3 client websites that went live',
      'Created internal tools that saved 20+ hours/week',
      'Won "Best Intern Project" for an accessibility plugin',
    ],
    icon: <FaLightbulb className="text-2xl" />,
    color: 'bg-amber-100 dark:bg-amber-900/50',
  },
   {
    id: 3,
    role: 'Frontend Developer',
    company: 'Freelance.',
    period: 'May 2022 - Present',
    description: [
      'Built 15+ web apps with React/Next.js ',
      'Led UI redesign that increased conversion by 32%',
      'Mentored a junior developers in our team',
    ],
    icon: <FaRocket className="text-2xl" />,
    color: 'bg-blue-100 dark:bg-blue-900/50',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 -gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            Career <span className="text-gold-500">Journey</span>
          </h2>
          <p className="text-lg text-navy-700 dark:text-navy-300 max-w-2xl mx-auto">
            From my first line of code to leading projects - here's my story
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Decorative timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-gold-500 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Floating card */}
                <div className={`relative z-10 ${index % 2 === 0 ? 'md:ml-auto md:w-5/12' : 'md:mr-auto md:w-5/12'} 
                  ${exp.color} p-8 rounded-2xl shadow-xl border border-white/20 dark:border-navy-700/50 
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
                  
                  {/* Icon badge */}
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white shadow-lg">
                    {exp.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-3 py-1 bg- dark:bg-navy-800 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-lg font-medium text-gold-600 dark:text-gold-400">
                      @ {exp.company}
                    </p>
                    
                    <ul className="space-y-2 pl-1">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          whileHover={{ x: 5 }}
                          className="flex items-start text-navy-800 dark:text-navy-200"
                        >
                          <span className="text-gold-500 mr-2">▹</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector dot (mobile) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gold-500 border-2 border-white dark:border-navy-900 md:hidden"></div>
              </motion.div>
            ))}
          </div>

          {/* Floating elements */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}