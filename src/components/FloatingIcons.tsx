import { motion } from "motion/react";
import { Brain, Code, Database, Sparkles, Zap, Globe } from "lucide-react";

export function FloatingIcons() {
  const icons = [
    { Icon: Brain, position: { top: "20%", left: "10%" }, delay: 0 },
    { Icon: Code, position: { top: "15%", right: "15%" }, delay: 0.5 },
    { Icon: Database, position: { top: "60%", left: "5%" }, delay: 1 },
    { Icon: Sparkles, position: { bottom: "30%", right: "10%" }, delay: 1.5 },
    { Icon: Zap, position: { top: "40%", right: "5%" }, delay: 2 },
    { Icon: Globe, position: { bottom: "20%", left: "15%" }, delay: 2.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-30"
          style={position}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.15, 0.35, 0.15], 
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}