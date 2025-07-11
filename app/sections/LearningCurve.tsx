'use client'
import { motion } from 'framer-motion'
import { FaBookOpen, FaLaptopCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

const learningData = [
  { 
    year: '2018', 
    milestone: 'Started learning web development basics',
    icon: <FaBookOpen className="text-2xl" />,
    color: 'bg-blue-100 dark:bg-blue-900/50'
  },
  { 
    year: '2019', 
    milestone: 'Graduated to more complex languages',
    icon: <FaBookOpen className="text-2xl" />,
    color: 'bg-blue-100 dark:bg-purple-900/50'
  },
  { 
    year: '2020', 
    milestone: 'Mastered some complex languages',
    icon: <FaBookOpen className="text-2xl" />,
    color: 'bg-blue-100 dark:bg-amber-900/50'
  },
  { 
    year: '2021', 
    milestone: 'Built first full-stack application',
    icon: <FaLaptopCode className="text-2xl" />,
    color: 'bg-purple-100 dark:bg-blue-900/50'
  },
  { 
    year: '2022', 
    milestone: 'Learned React and modern JavaScript',
    icon: <FaGraduationCap className="text-2xl" />,
    color: 'bg-amber-100 dark:bg-purple-900/50'
  },
  { 
    year: '2023', 
    milestone: 'Started freelancing and contributing to open source',
    icon: <FaRocket className="text-2xl" />,
    color: 'bg-emerald-100 dark:bg-emerald-900/50'
  },
  { 
    year: '2024', 
    milestone: 'Mastered TypeScript and Next.js',
    icon: <FaLaptopCode className="text-2xl" />,
    color: 'bg-red-100 dark:bg-red-900/50'
  },
  { 
    year: '2025', 
    milestone: 'Exploring advanced languages and frameworks like Rust and GraphQL',
    icon: <FaRocket className="text-2xl" />,
    color: 'bg-indigo-100 dark:bg-indigo-900/50'
  },
]

export default function LearningCurve() {
  return (
    <section className="py-24 -gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 dark:text-white mb-4">
            My <span className="text-gold-500">Learning Adventure</span>
          </h2>
          <p className="text-lg text-navy-700 dark:text-navy-300 max-w-2xl mx-auto">
            From first steps to professional mastery
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Decorative timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-gold-500 to-transparent hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {learningData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline Card */}
                <div className={`relative z-10 ${index % 2 === 0 ? 'md:ml-auto md:w-5/12' : 'md:mr-auto md:w-5/12'} 
                  ${item.color} p-8 rounded-2xl shadow-lg border border-white/20 dark:border-navy-700/50 
                  transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}>
                  
                  {/* Icon Badge */}
                  <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-navy-950 dark:text-white">
                        {item.year}
                      </h3>
                      <span className="px-3 py-1 bg- dark:bg-navy-800 rounded-full text-sm font-medium">
                        Year {index + 1}
                      </span>
                    </div>
                    
                    <p className="text-lg leading-relaxed text-navy-800 dark:text-navy-200">
                      {item.milestone}
                    </p>
                  </div>
                </div>

                {/* Connector dot (mobile) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gold-500 border-2 border-white dark:border-navy-900 md:hidden"></div>
              </motion.div>
            ))}
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-purple-500/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}