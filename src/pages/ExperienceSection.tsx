import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ShieldCheck } from "lucide-react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";
import { RansomText } from "../components/RansomText";

export function ExperienceSection({ currentTheme }: { currentTheme: ThemeColors }) {
  const [activeExp, setActiveExp] = useState(0);
  const experiences = resumeData.experience;
  const job = experiences[activeExp];

  return (
    <div className="flex flex-col h-full space-y-16">
      <div className="relative">
        <RansomText text="EXPERIENCE" delay={0.2} />
        <motion.div 
          animate={{ backgroundColor: currentTheme.primary }}
          className="absolute -bottom-4 left-0 w-64 h-2 transform -skew-x-12"
        ></motion.div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 flex-1 min-h-0">
        {/* Role selector — slanted tabs */}
        <div className="w-full md:w-[240px] flex-shrink-0 flex md:flex-col gap-4 p-2 md:pr-6 overflow-x-auto md:overflow-x-visible no-scrollbar">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveExp(idx)}
              className={`px-6 py-5 transition-all relative cursor-pointer transform -skew-x-12 border-l-[12px] text-left group ${
                activeExp === idx 
                  ? "shadow-[12px_12px_0px_#000] z-10 scale-105" 
                  : "bg-p5-black border-white/20 opacity-60 hover:opacity-100 hover:translate-x-2"
              }`}
              style={{ 
                backgroundColor: activeExp === idx ? currentTheme.primary : undefined,
                borderColor: activeExp === idx ? "white" : undefined
              }}
            >
              <div className={`font-display text-lg font-black italic tracking-tighter transform skew-x-12 leading-none transition-colors ${activeExp === idx ? "text-white" : "text-white/70"}`}>
                {exp.company}
              </div>
              <div className={`font-mono text-[10px] mt-3 transform skew-x-12 font-bold tracking-widest ${activeExp === idx ? "text-white/80" : "text-white/30"}`}>
                {exp.period}
              </div>
              
              {activeExp === idx && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-p5-black p-1 transform rotate-12 shadow-[4px_4px_0px_#000]">
                  <ShieldCheck size={16} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="flex-1 md:pl-8 mt-8 md:mt-0 overflow-y-auto no-scrollbar relative">
          <div className="absolute inset-0 p5-halftone opacity-5 -z-10"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExp}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="space-y-12"
            >
              <div className="relative">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    animate={{ backgroundColor: currentTheme.primary }}
                    className="w-16 h-16 flex items-center justify-center transform -rotate-12 shadow-[8px_8px_0px_#000]"
                  >
                    <Star size={32} className="fill-white text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-black italic tracking-tighter p5-text-shadow leading-none">
                      {job.org}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <motion.div 
                        animate={{ backgroundColor: currentTheme.primary }}
                        className="h-1 w-24 transform -skew-x-12"
                      ></motion.div>
                      <p className="font-mono text-xs opacity-50 uppercase tracking-[0.3em]">{job.location}</p>
                    </div>
                  </div>
                </div>

                <motion.div 
                  animate={{ backgroundColor: currentTheme.primary }}
                  className="inline-block px-8 py-3 transform -skew-x-12 font-display text-xl lg:text-3xl font-black italic tracking-tighter shadow-[8px_8px_0px_#000] text-white"
                >
                  {job.role}
                </motion.div>
              </div>

              <div className="space-y-6 relative">
                <div className="absolute -left-12 top-0 bottom-0 w-2 bg-p5-black/5 transform -skew-x-12"></div>
                
                {job.bullets.map((bullet, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-6 items-start group"
                  >
                    <div className="mt-2 flex-shrink-0">
                      <motion.div 
                        animate={{ backgroundColor: currentTheme.primary }}
                        className="w-8 h-8 transform -rotate-12 flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:rotate-0 transition-transform"
                      >
                        <div className="w-2 h-2 bg-white transform rotate-45"></div>
                      </motion.div>
                    </div>
                    <div className="p5-card bg-white/90 p-4 lg:p-6 p5-jagged flex-1 group-hover:scale-[1.02] transition-transform">
                      <p className="font-display font-bold italic text-base lg:text-lg leading-relaxed text-p5-black">
                        {bullet}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-8">
                {job.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: currentTheme.primary,
                      rotate: i % 2 === 0 ? 5 : -5
                    }}
                    className="font-display text-sm font-black italic text-white bg-p5-black px-6 py-2 transform -skew-x-12 tracking-widest transition-all cursor-default shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
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
