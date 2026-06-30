import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Absolute imported paths matching your exact local directory assets structure from image_093339.jpg
import ncaiCert from '../assets/ncai-internship-cert.jpeg'; // Verify if it has extension issues
import ncaiAward from '../assets/ncai-award-ceremony.jpeg'; // Matched perfectly
import ncaiPic from '../assets/ncai-achievement-pic.jpeg'; // Matched perfectly
import ncaiGroup from '../assets/ncai-internship-group.jpeg'; // Matched perfectly
import googleIOCert from '../assets/google-io-extended-karachi-ai.jpeg'; 
import unileverEng from '../assets/unilever-engineering-possibilities.PNG';
import ibmMLCert from '../assets/ibm-coursera-machine-learning.PNG';
import codingArenaTop from '../assets/it-club-coding-arena-top-scorer.PNG';
import smartCityCert from '../assets/ncai-smart-city-internship.jpeg';
import oasisDataSci from '../assets/oasis-infobyte-data-science.PNG';
import codsoftWebDev from '../assets/codsoft-web-development.PNG';

// FIXING TYPOS BASED ON YOUR WINDOWS EXPLORER FILENAMES SCREENSHOT:
import datacampSQLIntermediate from '../assets/datacamp-intermediate-sql.PNG'; // File on disk is 'datacamp-intermediate-sql.png'
import datacampSQLJoining from '../assets/datacamp-joining-data-sql.PNG'; // File on disk is 'datacamp-joining-data-sql.png'
import greatLearningML from '../assets/great-learning-ml-algorithms.PNG'; // File on disk is 'great-learning-ml-algorithms.png'
import navttcML from '../assets/navttc-machine-learning.jpeg'; // File on disk is 'navttc-machine-learning.jpg'
import technerdsPython from '../assets/technerds-python-workshop.jpeg'; // File on disk is 'technerds-python-workshop.jpg'
import aicpDataSci from '../assets/aicp-data-science-ai.jpeg'; // File on disk is 'aicp-data-science-ai.jpg'

const certificates = [
  // --- SECTION 1: RESEARCH LABS & BENCHMARKS (NCAI) ---
  { 
    title: "Research Internship Certificate (Diabetic Retinopathy) - NCAI Neurocomputation Lab", 
    image: ncaiCert,
    tag: "Research",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30"
  },
  { 
    title: "Research Achievement & Core Contribution Recognition - NCAI NCL, NEDUET", 
    image: ncaiPic,
    tag: "Research",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30"
  },
  { 
    title: "NCAI Neurocomputation Lab - Certificate Distribution Ceremony Award", 
    image: ncaiAward,
    tag: "Recognition",
    color: "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30"
  },
  { 
    title: "Ramadan Research Internship - Deep Learning Group Track (NCAI NCL)", 
    image: ncaiGroup,
    tag: "Research",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30"
  },
  { 
    title: "Machine Learning Internship (Concrete Strength Prediction) - Smart City Lab, NCAI", 
    image: smartCityCert,
    tag: "Research",
    color: "from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/30"
  },

  // --- SECTION 2: SPECIALIZED DATA SCIENCE & ALGORITHMIC VALIDATIONS ---
  { 
    title: "Machine Learning Introduction for Everyone - IBM (Coursera)", 
    image: ibmMLCert,
    tag: "Machine Learning",
    color: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/30"
  },
  { 
    title: "Machine Learning Algorithms Certification - Great Learning Academy", 
    image: greatLearningML,
    tag: "Machine Learning",
    color: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/30"
  },
  { 
    title: "Advanced Programming & Coding (Machine Learning & Data Mining) - NAVTTC", 
    image: navttcML,
    tag: "Data Mining",
    color: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30"
  },
  { 
    title: "Data Science Virtual Internship Certificate - Oasis Infobyte", 
    image: oasisDataSci,
    tag: "Data Science",
    color: "from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/30"
  },
  { 
    title: "Python Programming Foundation Workshop - TechNerds", 
    image: technerdsPython,
    tag: "Python Core",
    color: "from-teal-500/20 to-teal-500/5 text-teal-400 border-teal-500/30"
  },

  // --- SECTION 3: DATABASES & ENTERPRISE WEB ENGINEERING ---
  { 
    title: "Intermediate SQL Database Management - DataCamp", 
    image: datacampSQLIntermediate,
    tag: "Databases",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/30"
  },
  { 
    title: "Joining Data in SQL Relational Architectures - DataCamp", 
    image: datacampSQLJoining,
    tag: "Databases",
    color: "from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/30"
  },
  { 
    title: "Web Development Architecture Virtual Internship - CodSoft", 
    image: codsoftWebDev,
    tag: "Web Dev",
    color: "from-pink-500/20 to-pink-500/5 text-pink-400 border-pink-500/30"
  },
  { 
    title: "Top Scorer - Campus Coding Arena Tournament (IT Club)", 
    image: codingArenaTop,
    tag: "Competitive",
    color: "from-red-500/20 to-red-500/5 text-red-400 border-red-500/30"
  },

  // --- SECTION 4: GLOBAL CORPORATE PROGRAMS & COMMUNITY SUMMITS ---
  { 
    title: "Engineering Possibilities Programme National Representative - Unilever", 
    image: unileverEng,
    tag: "Corporate",
    color: "from-indigo-500/20 to-indigo-500/5 text-indigo-400 border-indigo-500/30"
  },
  { 
    title: "Google I/O Extended & Karachi AI Meetup (GenAI & Multi-Agent Frameworks)", 
    image: googleIOCert,
    tag: "Community",
    color: "from-sky-500/20 to-sky-500/5 text-sky-400 border-sky-500/30"
  },
  { 
    title: "Academic Horizons in Data Science & AI Masterclass - AICP", 
    image: aicpDataSci,
    tag: "AI Tech",
    color: "from-violet-500/20 to-violet-500/5 text-violet-400 border-violet-500/30"
  }
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-white" id="certificates">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Section Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent"
        >
          Certifications & Verified Milestones
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm">
          A structured timeline of technical specializations, research internships, and industry-backed credentials.
        </p>

        {/* Responsive Grid Display Sheet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ scale: 1.025, y: -4 }}
              onClick={() => cert.image && setSelectedImg(cert.image)}
              className="group bg-gray-900/40 p-4 rounded-2xl shadow-xl border border-gray-800/80 hover:border-indigo-500/60 transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-sm relative overflow-hidden"
            >
              {/* Card Meta Header */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border bg-gradient-to-r ${cert.color}`}>
                  {cert.tag}
                </span>
              </div>

              {/* Central Dynamic Asset Canvas Container */}
              <div className="relative w-full h-44 mb-2 bg-gray-950/80 rounded-xl overflow-hidden flex items-center justify-center border border-gray-800/50">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-1.5 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:blur-[0.5px]" 
                  />
                ) : (
                  <div className="text-gray-600 font-mono text-[10px] uppercase tracking-widest animate-pulse">
                    Asset Syncing...
                  </div>
                )}
                
                {/* Modern Blur Hover Mask Layer */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-indigo-600/95 text-white font-semibold text-[11px] px-3.5 py-1.5 rounded-lg shadow-xl tracking-wide">
                    View Certificate 🔍
                  </span>
                </div>
              </div>

              {/* Explicit Color Guard Text Frame */}
              <h3 
                style={{ color: '#e5e7eb' }} 
                className="text-xs font-bold leading-relaxed text-left line-clamp-2 px-1 mt-3 group-hover:text-white transition-colors"
              >
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Immersive Fullscreen Lightbox Shield --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 26, stiffness: 190 }}
              className="relative max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg} 
                alt="Enlarged Certificate Verification View"
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain border border-gray-800/80 bg-gray-950"
              />
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-14 right-0 text-gray-400 hover:text-white text-4xl font-light transition-colors bg-gray-900/60 hover:bg-gray-800 border border-gray-800/40 w-11 h-11 rounded-full flex items-center justify-center shadow-2xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}