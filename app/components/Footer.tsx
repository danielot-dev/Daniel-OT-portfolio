'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen, FaHeart } from 'react-icons/fa'
import { FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: 'https://github.com/danielot-dev', name: 'GitHub' },
    { icon: <FaLinkedin className="text-xl" />, url: 'https://linkedin.com/in/daniel-olobatoke-a7bbb6373', name: 'LinkedIn' },
    { icon: <FaTwitter className="text-xl" />, url: ' https://x.com/DanielOT419073?t=HJBIpXKr82TzrvehutNsdA&s=08 ', name: 'Twitter' },
    { icon: <FiMail className="text-xl" />, url: 'mailto:Danielot491@gmail.com', name: 'Email' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-b from-navy-900 to-navy-950 text-white pt-16 pb-8 overflow-hidden"
    >
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20 + Math.random() * 40],
              x: [0, -20 + Math.random() * 40],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            className="absolute rounded-full bg-gold-500/20"
            style={{
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            whileHover={{ y: -5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
              Daniel OT
            </h2>
            <p className="text-navy-300 max-w-xs">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-navy-400">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              <span>in Nigeria</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-navy-300 hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Resume', 'Tech Stack', 'Case Studies', 'Testimonials'].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-navy-300 hover:text-gold-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social/Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Let's Connect</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-white hover:text-gold-500 hover:bg-navy-700 transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <div className="text-navy-300">
              <p>Danielot491@gmail.com</p>
              <p>+234 (0) 906-616-5370</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Daniel Olobatoke. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-navy-800 rounded-full text-white hover:bg-gold-500 hover:text-navy-900 transition-colors"
          >
            Back to Top
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  )
}