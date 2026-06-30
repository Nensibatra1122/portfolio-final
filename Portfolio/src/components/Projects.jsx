import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Exact image imports mapped to your filenames
import robotClair from '../assets/robot-clair.JPG';
import inventrySystem from '../assets/inventry-system.JPG';
import dogBreed from '../assets/dog-breed.JPG';
import smartCities from '../assets/smart-cities.JPG';
import clientDashboard from '../assets/client-dashboard.JPG';
import incubator from '../assets/incubator.JPG';

const items = [
  {
    title: 'CLAIR Robot — Autonomous Navigation',
    desc: 'An intelligent autonomous cleaning robot featuring real-time navigation pipelines. Integrated OpenCV for computer vision, visual edge mapping, and robust obstacle avoidance control loops to maintain fluid robotic path planning.',
    img: robotClair,
    tech: ['Python', 'OpenCV', 'Computer Vision', 'Robotics', 'Path Planning'],
    link: 'https://github.com/Nensibatra1122/CLAIR-FYP-ALL-DOCS'
  },
  {
    title: 'Enterprise Inventory Pro System',
    desc: 'An automated, industry-grade inventory tracking solution built to handle high-concurrency enterprise data. Designed with a robust Java Spring Boot backend, JPA Hibernate mapping, and a scalable MySQL relational database layer.',
    img: inventrySystem,
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'REST APIs', 'Backend Development'],
    link: 'https://github.com/Nensibatra1122/Enterprise_Inventory_Pro_System'
  },
  {
    title: 'Pre-trained Dog Breed Classifier',
    desc: 'A machine learning system engineered to ingest test images and identify canine breeds using pre-trained deep convolutional neural network classification headers. Features structured dataset extraction and predictive benchmarking.',
    img: dogBreed, 
    tech: ['Python', 'PyTorch', 'Deep Learning', 'Image Classification', 'CNN'],
    link: 'https://github.com/Nensibatra1122/Use-a-pre-trained-classifier-to-identify-dog-breeds-main'
  },
  {
    title: 'Startup Ecosystem Platform',
    desc: 'A scalable full-stack platform engineered to connect early-stage startups with incubators, mentors, and investors. Features dynamic resource directories, real-time ecosystem analytics, and streamlined matching pipelines for project fundraising.',
    img: incubator,
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    link: 'https://github.com/Nensibatra1122/Startup-Ecosystem-Platform' 
  },
  {
    title: 'Smart City Optimization Systems',
    desc: 'Algorithmic model benchmarking and data preprocessing frameworks engineered for metropolitan automation. Developed optimized exploratory data analysis (EDA) pipelines to clean and isolate structural trend variations.',
    img: smartCities,
    tech: ['Python', 'Data Science', 'Exploratory Data Analysis', 'Statistical Trends', 'NCAI Lab'],
    link: 'https://github.com/Nensibatra1122/Smart-City-Data-Optimization'
  },
  {
    title: 'Enterprise Software Client UI',
    desc: 'A production-ready full-stack management dashboard designed to communicate seamlessly with enterprise microservices. Features modular state components, high performance data grid rendering, and dynamic route controls.',
    img: clientDashboard,
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Full-Stack Integration'],
    link: 'https://github.com/Nensibatra1122/Enterprise-Client-Dashboard'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-40 md:scroll-mt-0 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent"
          >
            Featured Engineering Projects
          </motion.h2>
          <p className="text-gray-400 mt-2 text-xs sm:text-sm max-w-2xl">
            A targeted collection of autonomous robotics systems, full-stack enterprise applications, and predictive deep learning frameworks.
          </p>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {items.map((p, i) => (
            <ProjectCard key={p.title} index={i} {...p} />
          ))}
        </div>

        {/* CENTERED GITHUB BUTTON ADDED HERE */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="https://github.com/Nensibatra1122"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 px-8 py-4 bg-gray-950/80 hover:bg-gray-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 font-mono text-sm tracking-wider rounded-xl transition-colors shadow-2xl group"
          >
            {/* Minimal SVG GitHub Icon */}
            <svg 
              className="w-5 h-5 fill-current transition-transform group-hover:rotate-6" 
              viewBox="0 0 24 24" 
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>VIEW ON GITHUB</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
}