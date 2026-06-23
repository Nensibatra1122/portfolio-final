import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Network, Cpu, Shield, Database, Terminal } from 'lucide-react'

const jobs = [
  {
    role: 'Full-Stack Engineer — Startup Ecosystem Platform',
    company: 'Innovation Hub / Ecosystem Project',
    period: 'Active — Present',
    icon: Network,
    color: 'from-amber-500 to-orange-500',
    points: [
      "Architecting and developing a high-performance Startup Ecosystem Platform to streamline investor matching, startup tracking, and venture resource pipelines.",
      "Designing responsive multi-tenant dashboards and dynamic filtering matrices using React.js, optimizing complex data discoverability for founders and stakeholders.",
      "Implementing scalable microservices and relational database schemas to handle secure, role-based access control (RBAC) and real-time data auditing across the ecosystem."
    ]
  },
  {
    role: 'Graduate Trainee Engineer',
    company: 'Utopia Industries',
    period: 'April 2026 — Present',
    icon: Briefcase,
    color: 'from-cyan-500 to-blue-500',
    points: [
      "Engineered scalable full-stack enterprise solutions utilizing Java, Spring Boot, Hibernate/JPA, and MySQL architectures.",
      "Developed and optimized an automated inventory tracking management system to streamline production operations and real-time data auditing.",
      "Collaborated with cross-functional engineering groups to implement modular backend REST APIs and interactive React.js web dashboards."
    ]
  },
  {
    role: 'Deep Learning Research Intern',
    company: 'NCAI Neurocomputation Lab',
    period: 'September 2024 — October 2024',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-500',
    points: [
      "Conducted core algorithmic research and predictive modeling pipelines focused on medical imaging benchmarks (Diabetic Retinopathy).",
      "Benchmarked deep convolutional neural networks (CNNs) to optimize prediction accuracy and model training performance metrics.",
      "Coordinated with academic research units to analyze feature extraction architectures and validate predictive accuracy metrics."
    ]
  },
  {
    role: 'Machine Learning Intern',
    company: 'NCAI Smart City Lab',
    period: '2024',
    icon: Terminal,
    color: 'from-indigo-500 to-cyan-500',
    points: [
      "Designed and trained predictive statistical frameworks using Machine Learning algorithms for mathematical material optimization.",
      "Engineered automated regression models to run robust Concrete Strength Prediction analysis on multivariate dataset pipelines.",
      "Utilized Python ecosystem libraries (NumPy, Pandas, Scikit-Learn) for extensive exploratory data analysis (EDA) and data preprocessing."
    ]
  },
  {
    role: 'Data Science Virtual Intern',
    company: 'Oasis Infobyte',
    period: '2024',
    icon: Database,
    color: 'from-blue-600 to-purple-600',
    points: [
      "Built exploratory data analytics setups and cleaned relational data records to model predictive trends.",
      "Drafted and evaluated analytical insights using data mining structures and structured query manipulation libraries."
    ]
  },
  {
    role: 'Web Development Virtual Intern',
    company: 'CodSoft',
    period: '2024',
    icon: Shield,
    color: 'from-teal-500 to-emerald-500',
    points: [
      "Developed modular web user interfaces using modern client-side architectures and CSS framework libraries.",
      "Structured accessible front-end landing pages focusing on high-fidelity layouts and clean component design flows."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-20 px-4 max-w-5xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-cyan-400 bg-clip-text text-transparent mb-3"
        >
          Professional Journey
        </motion.h2>
        <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
          A track record highlighting full-stack ecosystem platforms, industrial deployments, neural research engineering, and production-ready machine learning architectures.
        </p>
      </div>

      {/* Dynamic Vertical Modern Mesh Layout */}
      <div className="relative border-l border-gray-800/80 ml-4 md:ml-6 space-y-12">
        {jobs.map((j, idx) => {
          const IconComponent = j.icon;
          return (
            <motion.div
              key={`${j.role}-${idx}`}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 100, delay: idx * 0.05 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Orb Node Indicator with Dynamic Vector Color Fills */}
              <div className="absolute -left-[17px] top-1.5 bg-gray-950 p-1.5 rounded-full border border-gray-800 group-hover:border-cyan-500 transition-colors duration-300 z-10 shadow-xl shadow-black">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${j.color} flex items-center justify-center opacity-85 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Component Info Display Card */}
              <div className="rounded-2xl border border-gray-900 bg-gray-900/20 p-6 backdrop-blur-sm hover:border-gray-800/80 hover:bg-gray-900/40 transition-all duration-300 shadow-md shadow-black/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-800/50 pb-3 mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">
                      {j.role}
                    </h3>
                    <p className="text-xs font-medium text-gray-400 mt-0.5">
                      {j.company}
                    </p>
                  </div>
                  <span className="inline-block text-[10px] md:text-xs font-semibold tracking-wider text-cyan-500/90 bg-cyan-500/5 px-2.5 py-1 rounded-full border border-cyan-500/10 md:self-center self-start whitespace-nowrap">
                    {j.period}
                  </span>
                </div>
                
                <ul className="space-y-3 text-xs text-gray-400 leading-relaxed">
                  {j.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-500/60 select-none mt-1 text-[10px]">■</span>
                      <span className="group-hover:text-gray-300 transition-colors duration-200">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}