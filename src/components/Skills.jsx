import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiSpringboot,
  SiMysql,
  SiOpencv,
  SiCanva
} from 'react-icons/si';
import {
  FaJava,
  FaBrain,
  FaChartBar,
  FaRobot,
  FaCogs,
  FaDatabase,
  FaFileAlt,
  FaPenNib
} from 'react-icons/fa';

// Strictly mapped to your authentic engineering skill set
const allSkills = {
  'Backend & Software': [
    { name: 'Java', icon: FaJava },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'MySQL', icon: SiMysql },
    { name: 'JPA / Hibernate', icon: FaDatabase },
    { name: 'REST APIs', icon: FaCogs },
    { name: 'React JS', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 }
  ],
  'AI, CV & Robotics': [
    { name: 'Python', icon: SiPython },
    { name: 'OpenCV', icon: SiOpencv },
    { name: 'Computer Vision', icon: FaBrain },
    { name: 'Machine Learning', icon: FaBrain },
    { name: 'Autonomous Systems', icon: FaRobot },
    { name: 'Scikit-learn', icon: SiScikitlearn },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Data Analytics', icon: FaChartBar }
  ],
  'Creative Side-Hustles': [
    { name: 'Visual Design', icon: SiCanva },
    { name: 'Content Writing', icon: FaPenNib },
    { name: 'eBook Formatting', icon: FaFileAlt }
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Backend & Software');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 12 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 text-white scroll-mt-20">
      <ThreeBackground />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
            A specialized domain breakdown of enterprise web architectures, computer vision networks, and engineering tools.
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(allSkills).map(tab => (
            <button
              key={tab}
              className={`px-5 py-2.5 rounded-xl font-medium text-xs md:text-sm tracking-wide border transition-all duration-300 backdrop-blur-sm ${
                activeTab === tab
                  ? 'bg-cyan-500 border-cyan-400 text-gray-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-gray-900/40 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Layout Matrix */}
        <motion.div
          key={activeTab} 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto justify-items-center"
        >
          {allSkills[activeTab].map(skill => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative flex flex-col items-center justify-center w-full aspect-square max-w-[140px] p-4 bg-gray-900/30 rounded-2xl border border-gray-800/80 backdrop-blur-md shadow-xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gray-950/40 border border-gray-800/50 group-hover:border-cyan-500/20 transition-all duration-300">
                  <IconComponent className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
                <span className="mt-3 text-xs text-gray-400 group-hover:text-white transition-colors text-center font-medium tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}