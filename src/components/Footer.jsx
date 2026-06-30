import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub, FaFileArrowDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800/60 py-10 bg-gray-950/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Personalized Copyright Info */}
        <p className="text-xs text-gray-500 font-medium tracking-wide order-3 md:order-1 text-center md:text-left">
          © {new Date().getFullYear()} Nensi Batra. All Rights Reserved.
        </p>

        {/* Right Side: Social Media Icons + Premium Core Action Button Container */}
        <div className="flex flex-col sm:flex-row items-center gap-4 order-1 md:order-2 w-full md:w-auto justify-center md:justify-end">
          
          {/* Social Icons Strip */}
          <div className="flex items-center gap-3">
            {/* Active Professional Gmail Link */}
            <motion.a
              href="mailto:nensibatra1122@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-lg text-gray-400 hover:text-white transition-colors duration-200 rounded-xl bg-gray-900/40 border border-gray-800/40"
              whileHover={{ scale: 1.1, borderColor: 'rgba(99, 102, 241, 0.4)', color: '#6366f1' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <FaEnvelope />
            </motion.a>

            {/* Active Industrial Engineering LinkedIn Link */}
            <motion.a
              href="https://www.linkedin.com/in/engr-nensi-batra-385115251/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-lg text-gray-400 hover:text-white transition-colors duration-200 rounded-xl bg-gray-900/40 border border-gray-800/40"
              whileHover={{ scale: 1.1, borderColor: 'rgba(99, 102, 241, 0.4)', color: '#6366f1' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <FaLinkedin />
            </motion.a>

            {/* Active Engineering GitHub Repository Profile Link */}
            <motion.a
              href="https://github.com/Nensibatra1122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-lg text-gray-400 hover:text-white transition-colors duration-200 rounded-xl bg-gray-900/40 border border-gray-800/40"
              whileHover={{ scale: 1.1, borderColor: 'rgba(99, 102, 241, 0.4)', color: '#6366f1' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <FaGithub />
            </motion.a>
          </div>

          {/* Premium Alternative: Explicit Download CV Button */}
          <motion.a
            href="/resume.pdf"
            download="Nensi_Batra_Resume.pdf" // Triggers automatic local file download prompt
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600/90 hover:bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/10 border border-indigo-500/30 transition-all duration-200 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <FaFileArrowDown className="text-sm" />
            Download CV
          </motion.a>

        </div>
      </div>
    </footer>
  )
}