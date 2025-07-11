'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/danielot-dev' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/daniel-olobatoke-a7bbb6373' },
    { icon: <FaTwitter />, url: ' https://x.com/DanielOT419073?t=HJBIpXKr82TzrvehutNsdA&s=08 ' },
    { icon: <HiOutlineMail />, url: 'mailto:danielot491@email.com' }
  ]

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -gradient-to-br from-navy-950 via-navy-900 to-purple-900/50 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        {/* Floating particles/animated elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-gold-500/30"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gold-500 font-mono text-4xl mb-4"
          >
            Hi there! I&apos;m
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="text-white bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Daniel Olobatoke Timilehin
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-navy-200 max-w-3xl mx-auto leading-relaxed"
          >
            Frontend Developer crafting <span className="text-gold-400">immersive</span>,{' '}
            <span className="text-gold-400">accessible</span> web experiences with{' '}
            <span className="text-gold-400">cutting-edge</span> technologies
          </motion.h2>
        </motion.div>

        {/* Buttons with cool hover effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link
            href="#contact"
            className="relative px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-lg group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiOutlineMail className="text-xl" />
              Contact Me
            </span>
            <motion.span
              className="absolute inset-0 bg-gold-600 z-0"
              initial={{ y: '100%' }}
              whileHover={{ y: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <Link
            href="#about"
            className="relative px-8 py-4 border-2 border-gold-500 text-white font-bold rounded-lg group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiArrowDown className="text-xl" />
              Learn More
            </span>
            <motion.span
              className="absolute inset-0 bg-gold-500/10 z-0"
              initial={{ y: '-100%' }}
              whileHover={{ y: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl text-white hover:text-gold-500 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Link href="#about" className="flex flex-col items-center text-white group">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-10 h-10 rounded-full border-2 border-gold-500 flex items-center justify-center mb-2"
          >
            <FiArrowDown className="text-gold-500 text-xl" />
          </motion.div>
          <span className="text-sm text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
