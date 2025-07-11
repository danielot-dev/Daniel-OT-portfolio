'use client'
import { motion, useAnimation } from 'framer-motion'
import { useState, useRef } from 'react'
import { FiMail, FiPhone, FiSend} from 'react-icons/fi'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [activeCard, setActiveCard] = useState(null)
  const controls = useAnimation()
  const formRef = useRef()

  const handleCardHover = (card) => {
    setActiveCard(card)
    controls.start({
      x: card === 'email' ? -50 : card === 'phone' ? 0 : 50,
      y: -20,
      transition: { type: 'spring', stiffness: 300 }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await controls.start({
      scale: [1, 0.9, 1],
      transition: { duration: 0.5 }
    })
    // Form submission logic here
  }

  return (
    <section id="contact" className="py-28 gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-950 relative overflow-hidden">
      {/* Floating bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100 + Math.random() * 200],
              x: [0, -50 + Math.random() * 100],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
            className="absolute rounded-full bg-gold-500/10"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            whileHover={{ rotate: 2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gold-500/20 border-2 border-gold-500/30 flex items-center justify-center mx-auto rotate-45">
              <FiMail className="text-3xl text-gold-500 -rotate-45" />
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-navy-950 dark:text-white mb-4">
            Let&apos;s <span className="text-gold-500">Work Together</span>
          </h2>
          <p className="text-xl text-navy-700 dark:text-navy-300 max-w-2xl mx-auto">
            Choose your preferred way to get in touch
          </p>
        </motion.div>

        {/* Interactive contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -10 }}
            onHoverStart={() => handleCardHover('email')}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
              activeCard === 'email' 
                ? 'border-gold-500 /80 dark:bg-navy-800/80 shadow-xl'
                : 'border-navy-200 dark:border-navy-700 /50 dark:bg-navy-800/50'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                <FiMail className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 dark:text-white">Email</h3>
            </div>
            <p className="text-navy-700 dark:text-navy-300 mb-6">
              Send me a detailed message and I&apos;ll respond within 24 hours
            </p>
            <a 
              href="mailto:Danielot491@gmail.com" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-lg hover:bg-gold-500/20 transition-colors"
            >
              <FiMail /> Send Email
            </a>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -10 }}
            onHoverStart={() => handleCardHover('phone')}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
              activeCard === 'phone' 
                ? 'border-gold-500 /80 dark:bg-navy-800/80 shadow-xl'
                : 'border-navy-200 dark:border-navy-700 /50 dark:bg-navy-800/50'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                <FiPhone className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 dark:text-white">Call/Text</h3>
            </div>
            <p className="text-navy-700 dark:text-navy-300 mb-6">
              Perfect for quick questions or urgent matters
            </p>
            <div className="flex gap-3">
              <a 
                href="tel:+2349066165370" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 text-gold-600 dark:text-gold-400 rounded-lg hover:bg-gold-500/20 transition-colors"
              >
                <FiPhone /> Call Now
              </a>
              <a 
                href="https://wa.me/2349066165370" 
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Social Card */}
          <motion.div
            whileHover={{ y: -10 }}
            onHoverStart={() => handleCardHover('social')}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
              activeCard === 'social' 
                ? 'border-gold-500 /80 dark:bg-navy-800/80 shadow-xl'
                : 'border-navy-200 dark:border-navy-700 /50 dark:bg-navy-800/50'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gold-500/10 rounded-lg text-gold-500">
                <FaTelegramPlane className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 dark:text-white">Social</h3>
            </div>
            <p className="text-navy-700 dark:text-navy-300 mb-6">
              Connect with me on messaging platforms
            </p>
            <div className="flex gap-3">
              <a 
                href="https://t.me/yourusername" 
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <FaTelegramPlane /> Telegram
              </a>
              <a 
                href="https://linkedin.com/in/daniel-olobatoke-a7bbb6373" 
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
              >
                <FiMail /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating form */}
        <motion.div 
          animate={controls}
          ref={formRef}
          className="bg- dark:bg-navy-800 rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto border border-white/20 dark:border-navy-700/50"
        >
          <h3 className="text-3xl font-bold text-center text-navy-950 dark:text-white mb-8">
            Or Send Me a <span className="text-gold-500">Message</span>
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-900 rounded-xl border border-navy-200 dark:border-navy-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-900 rounded-xl border border-navy-200 dark:border-navy-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy-700 dark:text-navy-300">Your Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-navy-50 dark:bg-navy-900 rounded-xl border border-navy-200 dark:border-navy-700 focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Hello Daniel, I'd like to discuss..."
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <FiSend className="text-xl" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
