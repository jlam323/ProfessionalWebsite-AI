import { motion } from "motion/react";
import { Star, Trophy } from "lucide-react";
import resumeData from "../data.json";
import { ThemeColors } from "../types";
import { RansomText } from "../components/RansomText";

export function AwardsSection({ currentTheme }: { currentTheme: ThemeColors }) {
  return (
    <div className="space-y-24 pb-24">
      <div className="relative">
        <RansomText text="AWARDS" delay={0.2} />
        <motion.div 
          animate={{ backgroundColor: currentTheme.primary }}
          className="absolute -bottom-4 left-0 w-48 h-2 transform -skew-x-12"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {resumeData.awards.map((award, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring" }}
            whileHover="hover"
            variants={{
              hover: { scale: 1.02, rotate: idx % 2 === 0 ? 0.5 : -0.5 }
            }}
            className="relative group max-w-4xl"
          >
            {/* Decorative background element */}
            <div className="absolute -inset-2 bg-p5-black/5 -z-10 transform rotate-1 p5-halftone opacity-10"></div>
            
            <motion.div 
              animate={{ borderRightColor: currentTheme.primary, borderLeftColor: currentTheme.primary }}
              className="p5-card border-r-[16px] lg:border-r-[24px] p-8 lg:p-12 p5-jagged relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Trophy size={100} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        animate={{ backgroundColor: currentTheme.primary }}
                        className="px-4 py-1 transform -skew-x-12 font-display text-sm lg:text-lg font-black tracking-widest italic text-white shadow-[4px_4px_0px_#000]"
                      >
                        {award.ranking}
                      </motion.div>
                      <div className="h-px w-12 bg-p5-black/20"></div>
                      <span className="font-mono text-[10px] opacity-30 tracking-widest">{award.year}</span>
                    </div>
                    
                    <motion.h3 
                      variants={{
                        hover: { color: currentTheme.primary }
                      }}
                      className="text-2xl lg:text-4xl font-black italic tracking-tighter transition-colors leading-tight p5-text-shadow-tight"
                    >
                      {award.title}
                    </motion.h3>
                  </div>

                  <motion.div 
                    animate={{ backgroundColor: currentTheme.accent }}
                    className="p-3 transform rotate-12 shadow-[4px_4px_0px_#000] group-hover:rotate-0 transition-transform"
                  >
                    <Star size={24} className="fill-p5-black text-p5-black" />
                  </motion.div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-p5-red/20 transform -skew-x-12"></div>
                  <p className="text-base lg:text-lg text-p5-black font-bold italic leading-relaxed opacity-80">
                    {award.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative background text */}
      <div className="fixed bottom-0 right-0 font-display font-black italic text-p5-black/5 text-[20rem] select-none pointer-events-none -z-10 translate-y-1/2 translate-x-1/4">
        WINNER
      </div>
    </div>
  );
}
