import React from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ index, title, desc, img, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group block overflow-hidden rounded-2xl border border-gray-900 bg-gray-950/40 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/10 relative"
    >
      {/* Dynamic Image Container Layout */}
      <div className="relative h-52 overflow-hidden bg-gray-900">
        <img 
          src={img} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 opacity-75 group-hover:opacity-95 group-hover:scale-[1.02]" 
        />
        {/* Soft Linear Vignette Blend Mode Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
        
        {/* Absolute Link Badge Overlay */}
        <div className="absolute top-4 right-4 bg-gray-950/80 border border-gray-800 p-2 rounded-xl text-gray-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors duration-300 backdrop-blur-md">
          <Github className="w-4 h-4" />
        </div>
      </div>

      {/* Core Card Content Metrics */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-gray-100 tracking-wide transition-colors duration-200 group-hover:text-cyan-400">
            {title}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>
        
        <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed text-left line-clamp-3 group-hover:text-gray-300 transition-colors">
          {desc}
        </p>
        
        {/* Render Tech Tags Map */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <li 
              key={t} 
              className="rounded-lg border border-gray-950 bg-gray-900/40 px-2.5 py-1 text-[11px] font-mono text-cyan-400/80 tracking-wide"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}