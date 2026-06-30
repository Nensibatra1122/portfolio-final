import React from 'react';
import { motion } from 'framer-motion';
import Scene from './canvas/Scene';
import { TypeAnimation } from 'react-type-animation';

import profileImg from '../assets/profile.jpeg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      {/* 3D Background Mesh Layer */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Main Content Container */}
      <div className="z-20 relative flex flex-col items-center max-w-4xl mx-auto drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
        
        {/* Corporate Position Top Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="px-4 py-1.5 mb-6 text-[10px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-gray-900/80 border border-cyan-500/30 rounded-full backdrop-blur-xl flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Graduate Trainee Engineer @ Utopia Industries
        </motion.div>

        {/* Floating Profile Image */}
        <div className="animate-float w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-2 border-cyan-400/80 overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.25)] mb-8 transition-all duration-300 hover:border-indigo-400 bg-gray-900">
          <img
            src={profileImg}
            alt="Nensi Batra"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Personalized Name Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Nensi Batra</span>
        </motion.h1>

        {/* ✨ ULTIMATE VISIBILITY FIX: Forced Inline White Style to Overwrite Global CSS */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: '#ffffff', backgroundColor: 'rgba(3, 7, 18, 0.95)' }} /* Pure White & Deep Dark Overlay */
          className="mt-6 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-bold px-6 py-4 rounded-2xl border border-gray-800 tracking-wide block shadow-2xl"
        >
          Computer & Information Systems Engineering Graduate specialized in building enterprise full-stack solutions, high-scale startup platforms, and data-driven AI systems.
        </motion.p>

        {/* Typewriter Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm sm:text-base md:text-xl font-mono font-extrabold tracking-widest drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] bg-gray-950/95 px-5 py-2.5 rounded-xl border border-cyan-400/40 backdrop-blur-md flex items-center justify-center gap-1"
        >
          <span className="text-cyan-400 font-bold">{"< "}</span>
          <TypeAnimation
            sequence={[
              'Full Stack Java Developer', 2000,
              'Ecosystem Platform Architect', 2000,
              'AI & Machine Learning Developer', 2000,
              'Computer Vision Engineer', 2000,
              'Spring Boot Specialist', 2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ color: '#00f3ff', display: 'inline-block' }} 
            deletionSpeed={70}
            repeat={Infinity}
            className="px-1"
          />
          <span className="text-cyan-400 font-bold">{" />"}</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 w-full sm:w-auto px-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-xl bg-cyan-500 hover:bg-cyan-400 px-6 py-3 font-semibold shadow-md shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:-translate-y-0.5 transition-all duration-200 text-gray-950 text-xs tracking-wide"
          >
            View Projects 🚀
          </a>

          <a
            href="/Nensi_Batra_Resume.pdf"
            download="Nensi_Batra_Resume.pdf"
            className="w-full sm:w-auto rounded-xl border border-cyan-500/20 bg-gray-950/40 px-6 py-3 font-semibold hover:bg-cyan-500/5 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 text-xs tracking-wide text-cyan-400"
          >
            Download CV 📄
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto rounded-xl border border-white/5 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 text-xs tracking-wide text-gray-300"
          >
            Contact Me
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}