import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LucideIcon } from "lucide-react";

interface InteractiveSkillCardProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  color: string;
  index: number;
}

export function InteractiveSkillCard({ title, skills, icon: Icon, color, index }: InteractiveSkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <Card className="glass-effect border-border/50 h-full relative overflow-hidden transition-all duration-300 hover:border-primary/50">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }}
        />
        
        <CardHeader className="relative z-10">
          <CardTitle className="flex items-center gap-3 text-lg text-foreground">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="w-5 h-5" style={{ color }} />
            </motion.div>
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-muted hover:bg-primary/20 transition-colors cursor-default text-foreground border-primary/20"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}