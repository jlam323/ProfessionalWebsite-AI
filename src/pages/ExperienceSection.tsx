import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star } from "lucide-react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";

export function ExperienceSection({ currentTheme }: { currentTheme: ThemeColors }) {
  const [activeExp, setActiveExp] = useState(0);
  const experiences = resumeData.experience;
  const job = experiences[activeExp];

  return (
    <div className="flex flex-col h-full space-y-12">
      <div className="relative">
        <h2 className="text-3xl lg:text-6xl italic font-black leading-none mb-12 uppercase">EXPERIENCE</h2>
        <motion.div 
          animate={{ backgroundColor: currentTheme.primary }}
          className="absolute -bottom-2 left-0 w-32 h-2 transform -skew-x-12"
        ></motion.div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-0 flex-1 min-h-0">
        {/* Role selector — slanted tabs */}
        <div className="w-full md:w-[220px] flex-shrink-0 flex md:flex-col gap-4 p-2 md:pr-8 overflow-x-auto md:overflow-x-visible no-scrollbar">
          {experiences.map((exp, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveExp(idx)}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-4 lg:px-8 lg:py-6 transition-all relative cursor-pointer transform -skew-x-12 border-l-[12px] text-left group ${
                activeExp === idx 
                  ? "border-white shadow-[12px_12px_0px_#000] z-10" 
                  : "bg-p5-black border-p5-red/20 opacity-40 hover:opacity-100"
              }`}
              style={{ backgroundColor: activeExp === idx ? currentTheme.primary : undefined }}
            >
              <div className={`font-display text-lg lg:text-xl font-black tracking-tighter transform skew-x-12 leading-none transition-colors ${activeExp === idx ? "text-white" : "p5-red-text"}`}>
                {exp.company}
              </div>
              <div className={`font-mono text-[10px] mt-3 transform skew-x-12 font-bold tracking-widest ${activeExp === idx ? "text-white/80" : "text-gray-600"}`}>
                {exp.period}
              </div>
              
              {/* Decorative star for active tab */}
              {activeExp === idx && (
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 12 }}
                  className="absolute -right-3 -top-3 p-1.5 shadow-lg"
                  style={{ backgroundColor: currentTheme.accent }}
                >
                  <Star size={14} className="fill-p5-black text-p5-black" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Detail */}
        <div className="flex-1 md:pl-12 mt-12 md:mt-0 overflow-y-auto no-scrollbar relative">
          {/* Decorative background element */}
          <motion.div 
            animate={{ backgroundColor: currentTheme.primary }}
            className="absolute top-0 right-0 w-96 h-96 opacity-5 -z-10 transform rotate-45 translate-x-48 -translate-y-24"
          ></motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              initial={{ x: 50, opacity: 0, skewX: 5 }}
              animate={{ x: 0, opacity: 1, skewX: 0 }}
              exit={{ x: -50, opacity: 0, skewX: -5 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-12 pb-12"
            >
              <div className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    animate={{ 
                      backgroundColor: currentTheme.secondary === "#000000" ? "#000" : currentTheme.primary, 
                      borderBottomColor: currentTheme.primary,
                      boxShadow: `6px 6px 0px ${currentTheme.primary}4D`
                    }}
                    className="text-white px-6 py-1.5 font-display text-sm font-black tracking-widest transform -skew-x-12 border-b-4"
                  >
                    {job.location || "REMOTE"}
                  </motion.div>
                  <motion.div 
                    animate={{ backgroundImage: `linear-gradient(to right, ${currentTheme.primary}, transparent)` }}
                    className="h-1 flex-1 opacity-30"
                  ></motion.div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-4xl lg:text-6xl font-black italic transform -skew-x-6 p5-text-shadow leading-[0.9] mb-4">
                    {job.org}
                  </h3>
                  <motion.div 
                    animate={{ 
                      backgroundColor: currentTheme.primary, 
                      color: "white",
                      boxShadow: `8px 8px 0px #000`
                    }}
                    className="inline-block px-6 py-2 transform -skew-x-12 font-display text-xl lg:text-2xl font-black tracking-tighter italic"
                  >
                    {job.role}
                  </motion.div>
                </div>
              </div>

              <div className="font-mono text-base font-black tracking-[0.2em] flex items-center gap-4">
                <motion.div 
                  animate={{ backgroundColor: currentTheme.primary }}
                  className="w-12 h-1"
                ></motion.div>
                <motion.span animate={{ color: currentTheme.primary }} className="uppercase">{job.period}</motion.span>
              </div>

              <div className="grid grid-cols-1 gap-6 relative">
                {/* Halftone-like decorative pattern */}
                <motion.div 
                  animate={{ backgroundImage: `radial-gradient(${currentTheme.primary} 2px,transparent 2px)` }}
                  className="absolute inset-0 opacity-10 pointer-events-none [background-size:12px_12px] -z-10"
                ></motion.div>
                
                {job.bullets.map((bullet, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: -30, opacity: 0, rotate: i % 2 === 0 ? -1 : 1 }}
                    animate={{ x: 0, opacity: 1, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.02, rotate: 0, zIndex: 20 }}
                    className="p-6 bg-white border-l-[12px] shadow-[8px_8px_0px_#000] relative group transition-all"
                    style={{ borderLeftColor: currentTheme.primary }}
                  >
                    <div className="absolute top-2 right-4 opacity-10 font-display font-black text-4xl italic group-hover:opacity-20 transition-opacity">
                      0{i + 1}
                    </div>
                    <p className="font-mono text-sm lg:text-base text-p5-black font-bold leading-relaxed relative z-10">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-12">
                {job.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ 
                      scale: 1, 
                      rotate: -12,
                      boxShadow: `6px 6px 0px #000` 
                    }}
                    whileHover={{ 
                      backgroundColor: currentTheme.primary,
                      scale: 1.1,
                      rotate: 0
                    }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="font-display text-xs font-black text-white bg-p5-black px-5 py-2.5 tracking-widest transition-all cursor-default border-b-2 border-white/20"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
