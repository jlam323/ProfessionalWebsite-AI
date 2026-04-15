import { motion } from "motion/react";
import { ChevronRight, ExternalLink } from "lucide-react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";
import { RansomText } from "../components/RansomText";

export function ProjectsSection({ currentTheme }: { currentTheme: ThemeColors }) {
  return (
    <div className="space-y-24 pb-24">
      <div className="relative">
        <RansomText text="PROJECTS" delay={0.2} />
        <motion.div 
          animate={{ backgroundColor: currentTheme.primary }}
          className="absolute -bottom-4 left-0 w-48 h-2 transform -skew-x-12"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {resumeData.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: idx % 2 === 0 ? 1 : -1 }}
            className="relative group cursor-pointer"
          >
            {/* Decorative background element */}
            <div className={`absolute -inset-4 bg-p5-black/5 -z-10 transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} p5-halftone opacity-10`}></div>
            
            <motion.div 
              animate={{ borderLeftColor: currentTheme.primary }}
              className="p5-card border-l-[16px] lg:border-l-[24px] p-8 lg:p-12 p5-jagged relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <ExternalLink size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <motion.h3 
                      whileHover={{ color: currentTheme.primary }}
                      className="text-3xl lg:text-5xl font-black italic tracking-tighter p5-text-shadow-tight transition-colors leading-none mb-4"
                    >
                      {project.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <motion.span 
                          key={tag} 
                          animate={{ backgroundColor: currentTheme.primary }}
                          className="font-display font-black italic text-[10px] lg:text-xs text-white px-4 py-1 transform -skew-x-12 shadow-[3px_3px_0px_#000]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.div 
                    animate={{ backgroundColor: currentTheme.primary }}
                    className="text-white p-4 transform rotate-12 shadow-[6px_6px_0px_#000] group-hover:rotate-0 transition-transform"
                  >
                    <ChevronRight size={32} />
                  </motion.div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-p5-black/10 transform -skew-x-12"></div>
                  <p className="text-lg lg:text-xl text-p5-black font-bold italic leading-relaxed max-w-3xl">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-p5-black/10"></div>
                  <div className="font-mono text-[10px] opacity-30 tracking-widest uppercase">Mission_ID: {idx + 1}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
