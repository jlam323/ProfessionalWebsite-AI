import { motion } from "motion/react";
import { Star, Zap } from "lucide-react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";
import { RansomText } from "../components/RansomText";

export function SkillsSection({ currentTheme }: { currentTheme: ThemeColors }) {
  return (
    <div className="space-y-32 pb-24">
      <div className="relative">
        <RansomText text="SKILLS" delay={0.2} />
        <motion.div 
          animate={{ backgroundColor: currentTheme.primary }}
          className="absolute -bottom-4 left-0 w-48 h-2 transform -skew-x-12"
        ></motion.div>
      </div>

      <div className="relative min-h-[400px]">
        {/* Scattered Skills Tags */}
        <div className="flex flex-wrap gap-6 justify-center max-w-5xl mx-auto relative z-10">
          {resumeData.skills.languages.map((skill, idx) => {
            const rotation = (idx % 3 - 1) * 5;
            return (
              <motion.div
                key={skill}
                initial={{ scale: 0, opacity: 0, rotate: rotation * 2 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotate: rotation,
                  borderBottomColor: currentTheme.primary 
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: rotation * -1,
                  backgroundColor: currentTheme.primary,
                  color: "#fff",
                  zIndex: 50,
                  boxShadow: "8px 8px 0px #000"
                }}
                transition={{ delay: idx * 0.05, type: "spring" }}
                className="bg-p5-black text-white px-8 py-4 text-xl lg:text-2xl font-display font-black italic transform -skew-x-12 border-b-8 cursor-default transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
              >
                {skill}
              </motion.div>
            );
          })}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p5-halftone opacity-5 -z-10"></div>
        <motion.div 
          animate={{ color: currentTheme.primary }}
          className="absolute top-0 left-0 opacity-10 -z-10"
        >
          <Zap size={200} />
        </motion.div>
      </div>
      
      <div className="mt-24 relative">
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          className="absolute inset-0 bg-p5-black transform -skew-y-2 -z-10 shadow-[20px_20px_0px_#D32F2F]"
          style={{ boxShadow: `20px 20px 0px ${currentTheme.primary}` }}
        ></motion.div>
        
        <div className="p-8 lg:p-20 text-white relative overflow-hidden">
          {/* Halftone pattern inside the dark box */}
          <div className="absolute inset-0 p5-halftone opacity-10 pointer-events-none"></div>
          
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-1 bg-white transform -skew-x-12"></div>
            <motion.h3 
              className="text-4xl lg:text-6xl font-black italic tracking-tighter uppercase"
            >
              SPECIALTIES
            </motion.h3>
            <div className="flex-1 h-1 bg-white/20 transform -skew-x-12"></div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-display italic">
            {resumeData.skills.specialties.map((s, i) => (
              <motion.li 
                key={i} 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-6 group cursor-default"
              >
                <div className="relative">
                  <motion.div 
                    animate={{ backgroundColor: currentTheme.primary }}
                    className="w-10 h-10 transform -rotate-12 flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 shadow-[4px_4px_0px_#fff]"
                  >
                    <Star size={20} className="fill-white text-white" />
                  </motion.div>
                </div>
                <motion.span 
                  whileHover={{ x: 10, color: currentTheme.primary }} 
                  className="text-xl lg:text-2xl font-black tracking-tighter transition-all"
                >
                  {s}
                </motion.span>
              </motion.li>
            ))}
          </ul>

          {/* Decorative Rank Up text */}
          <div className="absolute bottom-4 right-8 font-display font-black italic text-white/5 text-8xl lg:text-[12rem] select-none pointer-events-none">
            RANK UP
          </div>
        </div>
      </div>
    </div>
  );
}
