import { motion } from "motion/react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";
import { RansomText } from "../components/RansomText";

export function AboutSection({ currentTheme }: { currentTheme: ThemeColors }) {
  return (
    <div className="space-y-24">
      <div className="relative">
        <RansomText text="ABOUT ME" delay={0.2} />
        <motion.div 
          animate={{ borderColor: currentTheme.primary }}
          className="absolute -top-8 -left-8 w-full h-full border-8 -z-10 transform rotate-2 opacity-20"
        ></motion.div>
      </div>
      
      <div className="relative">
        {/* Decorative background splatter */}
        <div className="absolute -top-20 -right-20 w-64 h-64 p5-halftone opacity-10 -z-10 rotate-12" style={{ color: currentTheme.primary }}></div>
        
        <motion.div 
          animate={{ borderLeftColor: currentTheme.primary }}
          className="p5-card border-l-[16px] p5-jagged"
        >
          <div className="absolute top-0 right-0 p-2 bg-p5-black text-white font-mono text-[8px] rotate-90 origin-top-right translate-x-full">
            DATA_STREAM_01
          </div>
          <p className="text-sm lg:text-lg leading-relaxed font-bold italic whitespace-pre-wrap p-4">
            {resumeData.about.summary.split(resumeData.personalInfo.role)[0]}
            {resumeData.about.summary.includes(resumeData.personalInfo.role) && (
              <motion.span 
                animate={{ backgroundColor: currentTheme.primary }}
                className="text-white px-3 py-1 italic shadow-[4px_4px_0px_#000] inline-block transform -rotate-2 mx-1"
              >
                {resumeData.personalInfo.role}
              </motion.span>
            )}
            {resumeData.about.summary.split(resumeData.personalInfo.role)[1]}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        <div className="absolute inset-0 p5-halftone opacity-5 -z-20"></div>
        
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          animate={{ boxShadow: `12px 12px 0px ${currentTheme.primary}` }}
          className="bg-p5-black text-white p-8 transform -skew-x-6 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-white/20 group-hover:bg-white transition-colors"></div>
          <motion.h3 
            animate={{ color: currentTheme.primary }}
            className="text-2xl mb-6 font-black italic tracking-tighter"
          >
            LOCATION
          </motion.h3>
          <p className="font-display text-3xl font-black italic tracking-widest">{resumeData.personalInfo.location}</p>
          <div className="mt-4 font-mono text-[10px] opacity-30">COORDINATES_LOCKED</div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          animate={{ backgroundColor: currentTheme.primary }}
          className="text-white p-8 transform skew-x-6 shadow-[12px_12px_0px_#000] relative group"
        >
          <div className="absolute bottom-0 right-0 w-full h-1 bg-black/20 group-hover:bg-black transition-colors"></div>
          <h3 className="text-2xl mb-6 font-black italic tracking-tighter border-b-4 border-white inline-block">STATUS</h3>
          <p className="font-display text-3xl font-black italic tracking-widest uppercase">{resumeData.personalInfo.status}</p>
          <div className="mt-4 font-mono text-[10px] opacity-50">SYSTEM_READY</div>
        </motion.div>
      </div>

      <div className="relative pt-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-p5-black/20"></div>
        
        <motion.div 
          whileHover={{ skewY: -1, scale: 1.01 }}
          animate={{ borderRightColor: currentTheme.primary }}
          className="p5-card border-r-[16px] relative overflow-hidden p5-jagged"
        >
          <motion.div 
            animate={{ backgroundColor: currentTheme.primary }}
            className="absolute top-0 right-0 w-32 h-32 rotate-45 translate-x-16 -translate-y-16 p5-halftone opacity-50"
          ></motion.div>
          
          <div className="relative z-10 space-y-10 p-6 lg:p-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-p5-black text-white flex items-center justify-center transform -rotate-12 font-display font-black text-2xl">E</div>
                <h3 className="text-3xl lg:text-5xl font-black italic tracking-tighter">EDUCATION</h3>
              </div>
              
              <div className="ml-16">
                <motion.p animate={{ color: currentTheme.primary }} className="text-2xl lg:text-4xl font-black italic mt-2 p5-text-shadow-tight">{resumeData.education.degree}</motion.p>
                <p className="text-xl font-bold mt-2">{resumeData.education.school}</p>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <p className="font-display font-black italic text-sm bg-p5-black text-white px-4 py-1 transform -skew-x-12 shadow-[4px_4px_0px_#D32F2F]">{resumeData.education.class}</p>
                  <p className="font-mono text-xs border-2 border-p5-black text-p5-black px-4 py-1 italic font-bold">{resumeData.education.location}</p>
                </div>
              </div>
            </div>
            
            <div className="h-1 bg-p5-black/10 w-full transform -skew-x-12"></div>
            
            <div className="ml-16 relative">
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-p5-red/20 transform -skew-x-12"></div>
              <p className="text-base lg:text-lg italic text-p5-black font-bold leading-relaxed max-w-2xl">
                {resumeData.education.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
