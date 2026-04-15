import { motion } from "motion/react";

interface RansomTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RansomText({ text, className = "", delay = 0 }: RansomTextProps) {
  const chars = text.split("");
  
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {chars.map((char, i) => {
        if (char === " ") return <span key={i} className="w-2 lg:w-4" />;
        
        // Randomize styles for each character
        const rotation = (Math.random() - 0.5) * 15;
        const scale = 0.9 + Math.random() * 0.3;
        const isRed = Math.random() > 0.7;
        const isBlack = !isRed && Math.random() > 0.5;
        
        return (
          <motion.span
            key={i}
            initial={{ scale: 2, opacity: 0, rotate: rotation * 5 }}
            animate={{ scale: 1, opacity: 1, rotate: rotation }}
            transition={{ 
              delay: delay + i * 0.05,
              type: "spring",
              damping: 12,
              stiffness: 200
            }}
            className={`
              inline-block px-1 lg:px-2 py-0.5 lg:py-1 font-display font-black italic text-2xl lg:text-5xl
              ${isRed ? "bg-p5-red text-white" : isBlack ? "bg-p5-black text-white" : "bg-white text-p5-black"}
              shadow-[3px_3px_0px_#000] border border-black/10
            `}
            style={{ 
              transform: `rotate(${rotation}deg) scale(${scale})`,
              display: "inline-block"
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}
