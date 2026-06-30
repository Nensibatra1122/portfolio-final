import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, ArrowRight, Mail, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  // Activated with your direct email form ID node
  const [state, handleSubmit] = useForm("xeeboeey");

  // Premium Animated Success State Display Card with Reset Option
  if (state.succeeded) {
    return (
      <section id="contact" className="py-32 flex flex-col items-center justify-center min-h-[60vh] px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 16 }}
          className="max-w-md w-full p-8 bg-gray-900/40 border border-emerald-500/20 rounded-2xl text-center shadow-[0_0_30px_rgba(16,185,129,0.05)] backdrop-blur-md"
        >
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/20 shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Transmission Successful</h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-6">
            Thank you for reaching out! Your message has safely bypassed network layers and hit my workspace inbox. I will review it and get back to you shortly.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200 group bg-emerald-500/5 px-4 py-2 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30"
          >
            Send another message 
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 flex flex-col items-center scroll-mt-20 px-6 max-w-5xl mx-auto w-full">
      {/* Title Header Section */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-indigo-400 bg-clip-text text-transparent mb-3"
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-400 max-w-sm mx-auto text-xs leading-relaxed">
          Have a question, an ecosystem initiative, or want to collaborate on full-stack/ML systems? Drop a transmission node down below.
        </p>
      </div>

      {/* Outer Form Design with Indigo Glow Border & Glassmorphism */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 w-full max-w-2xl p-6 md:p-8 bg-gray-900/20 rounded-2xl backdrop-blur-sm shadow-[0_0_30px_rgba(99,102,241,0.02)] border border-gray-900 hover:border-indigo-500/20 transition-all duration-500"
      >
        {/* Name Input Field */}
        <div className="flex flex-col relative group">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 flex items-center gap-1.5 group-focus-within:text-indigo-400 transition-colors">
            <User className="w-3 h-3" /> Full Name
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-xl border border-gray-800 bg-gray-950/40 px-4 py-3 text-xs text-white placeholder-gray-600 outline-none focus:border-indigo-500/60 focus:bg-gray-950/80 transition-all duration-300"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-[11px] text-red-400 mt-1 px-1" />
        </div>

        {/* Email Input Field */}
        <div className="flex flex-col relative group">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 flex items-center gap-1.5 group-focus-within:text-indigo-400 transition-colors">
            <Mail className="w-3 h-3" /> Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-800 bg-gray-950/40 px-4 py-3 text-xs text-white placeholder-gray-600 outline-none focus:border-indigo-500/60 focus:bg-gray-950/80 transition-all duration-300"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[11px] text-red-400 mt-1 px-1" />
        </div>

        {/* Message Input Field */}
        <div className="md:col-span-2 flex flex-col relative group">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 ml-1 flex items-center gap-1.5 group-focus-within:text-indigo-400 transition-colors">
            <MessageSquare className="w-3 h-3" /> Message Blueprint
          </label>
          <textarea
            required
            name="message"
            placeholder="Describe your project, platform ideas or queries..."
            rows="5"
            className="w-full rounded-xl border border-gray-800 bg-gray-950/40 px-4 py-3 text-xs text-white placeholder-gray-600 outline-none focus:border-indigo-500/60 focus:bg-gray-950/80 transition-all duration-300 resize-none leading-relaxed"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[11px] text-red-400 mt-1 px-1" />
        </div>

        {/* Premium Core Action Button */}
        <div className="md:col-span-2 flex justify-end mt-1">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={state.submitting}
            className="w-full md:w-auto rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-3 transition-colors duration-300 shadow-md shadow-indigo-600/5 disabled:bg-gray-950 disabled:text-gray-600 disabled:border-gray-900 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {state.submitting ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5 text-indigo-200" />
              </>
            )}
          </motion.button>
        </div>
      </motion.form>
    </section>
  )
}