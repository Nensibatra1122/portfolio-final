import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Exact image imports mapped to your filenames from image_d65bc8.png
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

      </div>
    </section>
  );
}