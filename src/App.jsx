import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
// Path ko explicit .jsx extension ke sath update karein:
import Certificates from './components/Certificates.jsx'

export default function App() {
  return (
    // Global dark system background wrapper that allows canvas mesh textures to float seamlessly
    <div className="min-h-screen bg-gray-950 text-white selection:bg-cyan-500/30 selection:text-cyan-300 antialiased">
      
      {/* Production Synced Header Matrix */}
      <Navbar />
      
      {/* Main Structural Streamlined Grid Containers */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Personalized Intro Hero System */}
        <Hero />
        
        
        <Certificates/>
        
        {/* Featured Enterprise Architectures, AI Models & Engineering Project Core */}
        <Projects />
        
        {/* Real Dynamic Technical Breakdown Matrix */}
        <Skills />
        
        {/* Corporate Trainee Track Milestone Elements */}
        <Experience />
        
        {/* Direct Functional Lead Generation Contact Node */}
        <Contact />
        
      </main>
      
      {/* Clean Global Interface Footer Section */}
      <Footer />
      
    </div>
  )
}