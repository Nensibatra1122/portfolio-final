import React from 'react';
import { motion } from 'framer-motion';
// src/assets folder se image import ho rahi hai
import profile from '../assets/profile2.jpeg'; 
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-40 md:scroll-mt-0 px-4 max-w-7xl mx-auto">
      
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center md:text-left text-white"
      >
        About Me
      </motion.h2>

      {/* Grid structure handles mobile stacking and desktop side-by-side view seamlessly */}
      <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-[240px,1fr]">

        {/* Profile Image - Mobile aur Desktop dono par dikhegi */}
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={profile}
          alt="Nensi Batra Profile"
          className="mx-auto w-48 h-48 object-cover rounded-2xl border border-white/10 p-1 shadow-md"
        />

        {/* Text Content - No hidden classes, pure content visible everywhere */}
        <div>
          <p className="text-white/75 text-center md:text-justify leading-relaxed text-sm md:text-base">
            I am a Computer Science graduate from NED University of Engineering & Technology with a strong passion for Artificial Intelligence, Machine Learning, Computer Vision, and Robotics. My experience spans Data Science, AI-powered applications, and intelligent automation systems through internships, academic research, and real-world projects.
          </p>
          
          <p className="mt-4 text-white/75 text-center md:text-justify leading-relaxed text-sm md:text-base">
            I have developed solutions ranging from predictive analytics models to CLAIR, an autonomous AI-powered cleaning robot that integrates computer vision and intelligent navigation to solve real-world problems.
          </p>

          <p className="mt-4 text-white/75 text-center md:text-justify leading-relaxed text-sm md:text-base">
            I am passionate about building impactful, data-driven systems and continuously exploring emerging fields such as Generative AI, Autonomous Systems, and AI for Social Good. I am currently seeking opportunities in AI Engineering, Machine Learning, Data Science, and Research roles.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">

            {/* Email */}
            <motion.a
              href="mailto:nensibatra1122@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors"
              whileHover={{ scale: 1.15 }}
            >
              <FaEnvelope />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Nensibatra1122"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors"
              whileHover={{ scale: 1.15 }}
            >
              <FaGithub />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/engr-nensi-batra-385115251/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors"
              whileHover={{ scale: 1.15 }}
            >
              <FaLinkedin />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/923183618419"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors"
              whileHover={{ scale: 1.15 }}
            >
              <FaWhatsapp />
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}