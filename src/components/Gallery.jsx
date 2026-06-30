import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { 
    id: 1, 
    src: "/ncai_certificate.jpg", 
    title: "Machine Learning Research Certification", 
    desc: "National Center of Artificial Intelligence (NCAI NCL) — Predictive modeling and feature extraction milestone." 
  },
  { 
    id: 2, 
    src: "/ned_degree.jpg", 
    title: "B.E. Computer & Information Systems", 
    desc: "Academic graduation excellence track at NED University of Engineering & Technology." 
  },
  { 
    id: 3, 
    src: "/clair_display.jpg", 
    title: "CLAIR Robot Autonomous Validation", 
    desc: "Real-time OpenCV navigation loop, obstacle avoidance, and robotics project presentation." 
  },
  { 
    id: 4, 
    src: "/utopia_trainee.jpg", 
    title: "Graduate Trainee Engineer Track", 
    desc: "Industrial systems automation and professional development milestones at Utopia Industries." 
  },
  { 
    id: 5, 
    src: "/inventory_system.jpg", 
    title: "Enterprise Systems Architecture", 
    desc: "Deployment showcase of the Enterprise Inventory Pro System built with Spring Boot and MySQL." 
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            style={{ color: '#ffffff' }}
            className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent"
          >
            Certificates & Milestones
          </motion.h2>
          <p style={{ color: '#9ca3af' }} className="max-w-xl mx-auto mt-3 text-sm font-medium">
            Visual verification of my technical certifications, research honors, and industrial engineering milestones.
          </p>
        </div>

        {/* Clean Balanced Grid Structure with Height Guard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedImg(item)}
              className="relative rounded-2xl p-5 min-h-[220px] flex flex-col justify-between border border-cyan-500/20 bg-gray-950/90 shadow-2xl transition-all duration-300 hover:border-cyan-400"
            >
              {/* Top Meta Design Frame */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                  Milestone 0{item.id}
                </span>
                <span style={{ color: '#00f3ff' }} className="text-xs font-bold animate-pulse">
                  Verify 🔍
                </span>
              </div>

              {/* Center Details Frame (Forced Solid Colors) */}
              <div className="mt-4 flex-1 flex flex-col justify-center">
                <h4 
                  style={{ color: '#ffffff' }} 
                  className="font-extrabold text-base tracking-wide leading-snug text-left"
                >
                  {item.title}
                </h4>
                <p 
                  style={{ color: '#9ca3af' }} 
                  className="text-xs text-left mt-2 leading-relaxed font-medium"
                >
                  {item.desc}
                </p>
              </div>

              {/* Hidden/Fallback Image Handling (Doesn't block the UI if broken) */}
              <img
                src={item.src}
                alt={item.title}
                className="hidden"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Trigger View */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-2xl w-full text-center p-6 bg-gray-900 rounded-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ color: '#ffffff' }} className="text-xl font-bold">{selectedImg.title}</h3>
              <p style={{ color: '#00f3ff' }} className="text-sm mt-2 font-mono">{selectedImg.desc}</p>
              <button 
                onClick={() => setSelectedImg(null)}
                className="mt-6 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Close View
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}