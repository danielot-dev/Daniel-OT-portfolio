'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi'

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks in 2023",
    excerpt: "Learn how to use React Hooks effectively to build cleaner components.",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Frontend",
    slug: "mastering-react-hooks",
    image: "/images/download.png"
  },
  {
    id: 2,
    title: "The Power of Next.js Static Generation",
    excerpt: "How we improved our SEO and performance with Next.js SSG.",
    date: "July 2, 2023",
    readTime: "8 min read",
    category: "Next.js",
    slug: "nextjs-static-generation",
    image: "/images/download.jpeg"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "A practical guide to choosing the right layout method for your project.",
    date: "August 10, 2023",
    readTime: "6 min read",
    category: "CSS",
    slug: "css-grid-vs-flexbox",
    image: "/images/css vs flexbox.png"
  },
]

const categories = ["All", "Frontend", "Next.js", "CSS"]

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredPost, setHoveredPost] = useState(null)

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <section id="blog" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredPost === post.id ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div 
                    className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                  >
                    Read Article
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <FiCalendar className="text-blue-500" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <FiClock className="text-blue-500" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FiTag className="text-blue-500" />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {post.category}
                      </span>
                    </div>
                    <motion.div
                      animate={{ 
                        x: hoveredPost === post.id ? 5 : 0 
                      }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <FiArrowRight className="text-blue-500" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600/10 dark:hover:bg-blue-400/10 transition-colors group"
          >
            View All Articles
            <motion.span
              animate={{ 
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
              className="ml-2"
            >
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}