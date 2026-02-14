import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Trophy, Calendar } from "lucide-react";

interface InteractiveProjectCardProps {
  title: string;
  year: string;
  type: string;
  technologies: string[];
  achievements: string[];
  index: number;
  link?: string;
}

export function InteractiveProjectCard({ 
  title, 
  year, 
  type, 
  technologies, 
  achievements, 
  index,
  link
}: InteractiveProjectCardProps) {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'hackathon': return '#00bcd4';
      case 'project': return '#0097a7';
      default: return '#00acc1';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        y: -15,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
    >
      <Card className="glass-effect border-border/50 h-full relative overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{ 
            background: `linear-gradient(135deg, ${getTypeColor(type)}40, transparent)` 
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <CardHeader className="relative z-10">
          <div className="flex items-start justify-between mb-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Badge 
                variant="outline" 
                className="mb-2 border-primary/50 text-primary bg-primary/10"
                style={{ borderColor: getTypeColor(type), color: getTypeColor(type) }}
              >
                <Trophy className="w-3 h-3 mr-1" />
                {type}
              </Badge>
            </motion.div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {year}
            </div>
          </div>
          
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-secondary">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-accent">Key Achievements:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, achIndex) => (
                <motion.li 
                  key={achIndex} 
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + achIndex * 0.1 }}
                >
                  <motion.span 
                    className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.2 }}
                  />
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4 border-primary/50 text-primary hover:bg-primary/10 group-hover:border-primary transition-all duration-300"
              onClick={() => link && window.open(link, '_blank')}
            >
              View on GitHub
              <ExternalLink className="w-3 h-3 ml-2" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}