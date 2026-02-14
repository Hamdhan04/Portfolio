import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar, Award, Code, Brain, Database, BarChart3, Users, Download, Github, MessageCircle } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";
import { InteractiveSkillCard } from "./InteractiveSkillCard";
import { InteractiveProjectCard } from "./InteractiveProjectCard";
import profileImage from "../assets/profile.png";

export function Portfolio() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "R", "SQL"],
      icon: Code,
      color: "#00bcd4"
    },
    {
      title: "AI & ML",
      skills: ["Supervised & Unsupervised Learning", "Deep Learning", "CNNs"],
      icon: Brain,
      color: "#0097a7"
    },
    {
      title: "Data Science Tools",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
      icon: Database,
      color: "#4dd0e1"
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Excel"],
      icon: BarChart3,
      color: "#00acc1"
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Critical Thinking", "Teamwork", "Adaptability", "Time Management"],
      icon: Users,
      color: "#26c6da"
    }
  ];

  const projects = [
    {
      title: "LandslideX — Vulnerability Assessment & Risk Monitor",
      year: "2025",
      type: "Hackathon",
      technologies: ["Javascript", "Python", "Google Earth Engine", "LSTM"],
      achievements: [
        "ML-based geospatial platform to identify landslide-prone zones in Tamil Nadu",
        "Generated static vulnerability heatmaps using historical satellite & rainfall data",
        "Integrated risk simulation and confidence scoring for long-term planning"
      ],
      link: "https://github.com/Hamdhan04/LandslideX-Detection-Monitoring"
    },
    {
      title: "Student Attendance & Concentration Tracking System",
      year: "2025",
      type: "Hackathon",
      technologies: ["Python", "Flask", "AWS Rekognition", "OpenCV"],
      achievements: [
        "Automated attendance using real-time face recognition via webcam",
        "Tracked focus vs distraction using eye-state analysis",
        "Generated daily Excel reports with duplicate attendance prevention"
      ],
      link: "https://github.com/Hamdhan04/Student-Attendance-Concentration"
    },
    {
      title: "Callisto AI — End-to-End Answering Chatbot",
      year: "2025",
      type: "Project",
      technologies: ["Node.js", "Express", "JavaScript", "LLM APIs"],
      achievements: [
        "Full-stack conversational AI with secure login and chat persistence",
        "Real-time question answering with dynamic, dark-themed chat UI",
        "Sidebar-based conversation history management for seamless UX"
      ],
      link: "https://github.com/Hamdhan04/End-To-End-Answering-Chatbot"
    },
    {
      title: "Real-Time Analytics & Visualization Dashboard",
      year: "2025",
      type: "Project",
      technologies: ["R", "Shiny", "ggplot2", "quantmod"],
      achievements: [
        "Interactive dashboard for data upload, EDA, and visual analytics",
        "Correlation heatmaps, summary stats, and dynamic plots",
        "Integrated real-time stock price monitoring and export features"
      ],
      link: "https://github.com/Hamdhan04/Real-Time-Analytics-Visualization-Dashboard"
    }
  ];

  const experience = [
    {
      title: "Data Analytics & Visualization Intern",
      company: "EinNel Technologies",
      duration: "Jul 2025 – Aug 2025",
      location: "Remote",
      achievements: [
        "Built an interactive analytics dashboard in Angular using ECharts & AG Grid with real-time data integration",
        "Implemented features like expandable charts, time toggles (12h/24h), dynamic/static X-axis modes, and live API data tables",
        "Designed a Framer-style sidebar for variable creation, improving dashboard flexibility and user experience",
        "Strengthened skills in Angular, Tailwind CSS, APIs, and real-time visualization through hands-on industry projects"
      ],
      link: "https://drive.google.com/file/d/1PPa_Z1v7wo5HYV-pUiY4A7sXUCWBsqGo/view?usp=sharing"
    },
    {
      title: "Data Analytics & Software Development Intern",
      company: "DP World",
      duration: "Jun 2025 – Jul 2025",
      location: "Chennai, India · On-site",
      achievements: [
        "Developed live Power BI dashboards integrating SQL Server & Python for real-time monitoring",
        "Built a chatbot with PDF upload, Wikipedia integration, and voice-enabled features",
        "Prototyped a student portal & e-commerce app (QuickPin) with core modules (login, cart, payment, tracking)",
        "Automated Excel & Word workflows, enhancing reporting and bulk communication efficiency"
      ],
      link: "https://drive.google.com/file/d/1NM897iq8JAw-txfJOwHFt-UYDYwSzh-f/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Plasmid Innovation",
      duration: "Dec 2024 – Feb 2025",
      location: "Remote",
      achievements: [
        "Completed 5-week training on AI concepts, applying models to 3+ use cases in healthcare and education, improving project execution accuracy by 20%",
        "Developed and deployed a neural network model achieving 87% accuracy on MNIST, reducing manual labeling by 40% in simulation"
      ],
      link: "https://drive.google.com/file/d/1XwGEVSepiXJ_v4gQr8igFw8Ej60Fdl58/view?usp=drive_link"
    }
  ];

  const certifications = [
    {
      name: "Google AI Essentials - Coursera",
      link: "https://drive.google.com/file/d/1rXqSXfY8bTsspniaDRa9a0aGETvkBbRW/view?usp=sharing"
    },
    {
      name: "R for Data Science - Open Source Club, Crescent",
      link: "https://drive.google.com/file/d/1O50rqLfkHNDYmPeXBEe2uUe2n0B4ygND/view?usp=sharing"
    },
    {
      name: "Python & C - CodeGalatta",
      link: "https://drive.google.com/file/d/1kWNY5GA_8urKWnycAjDOFTMVlb6cFlQu/view?usp=sharing"
    },
    {
      name: "Learning Data Mining with R - Infosys Springboard",
      link: "https://drive.google.com/file/d/1V8ozpNzijuBIu7FcmoUz3J_E7LiA7gKF/view?usp=sharing"
    },
    {
      name: "Data Visualization - Forage",
      link: "https://drive.google.com/file/d/1SwG_KKLdjJ7LmjbduL2eNES0G_mcnjTW/view?usp=sharing"
    },
    {
      name: "Completion of C & C++ - IIT Bombay",
      link: "https://drive.google.com/file/d/11Rai00E3GQPJ4mz4j4usXNf46TVSrH3I/view?usp=sharing"
    },
    {
      name: "Data Science Using Python - INI",
      link: "https://drive.google.com/file/d/1REn8dWSs6NQNvOl70pBrNwah_radGMqh/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingIcons />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-6">
        <div className="absolute inset-0">
          <div className="gradient-animation opacity-20"></div>
        </div>

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-primary font-medium tracking-wide text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hey, I am Mohamed Hamdhan
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-primary">AI</span> Engineer
              </motion.h1>

              <motion.p
                className="text-xl max-w-lg leading-relaxed text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Passionate about solving real-world problems through innovative AI/ML solutions. Transforming data into actionable insights.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >


                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 group"
                >
                  <a
                    href="/Mohamed_Hamdhan_AI_Engineer_CV.pdf"
                    download="Mohamed_Hamdhan_AI_Engineer_CV.pdf"
                  >
                    Download CV
                  </a>
                </Button>




              </motion.div>

              <motion.div
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="flex items-center gap-2 text-sm text-foreground/70"
                  whileHover={{ scale: 1.05, color: "#00bcd4" }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4" />
                  +91 99435 72354
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-sm text-foreground/70"
                  whileHover={{ scale: 1.05, color: "#00bcd4" }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-4 h-4" />
                  Thiruvarur, India
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Profile Photo Section - Clean Circle Design */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-80 h-80">
                {/* Background gradient blur effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"></div>

                {/* Main gradient circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full p-1 shadow-2xl shadow-primary/20">
                  {/* Inner white circle for clean photo border */}
                  <div className="w-full h-full bg-[#fafbfc] rounded-full p-2 shadow-inner">
                    {/* Profile Photo Container */}
                    <div className="w-full h-full rounded-full overflow-hidden">

                      <img
                        src={profileImage}
                        alt="Mohamed Hamdhan"
                        className="w-full h-full object-cover object-center"
                      />

                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the photo */}
              <motion.div
                className="absolute top-8 right-8 text-accent"
                animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code className="w-6 h-6" />
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-8 text-secondary"
                animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Database className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="absolute top-16 left-8 text-primary"
                animate={{ y: [0, -12, 0], rotate: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                <Brain className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Professional Summary */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardTitle className="text-2xl text-center text-primary">Professional Summary</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-foreground leading-relaxed text-center text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Motivated and goal-oriented B.Tech student in Artificial Intelligence and Data Science with a passion for solving real-world problems through data-driven and AI-powered solutions. Proficient in Python, SQL, and Machine Learning, with hands-on experience in data analysis, visualization, and secure authentication systems. Completed the Google AI Essentials Certificate and an online internship at Plasmid, gaining practical exposure to AI tools and real-world project workflows. Eager to contribute to innovative projects through continuous learning, critical thinking, and strong technical skills.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-6 bg-muted/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <InteractiveSkillCard
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <InteractiveProjectCard
                key={index}
                title={project.title}
                year={project.year}
                type={project.type}
                technologies={project.technologies}
                achievements={project.achievements}
                index={index}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-20 px-6 bg-muted/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-accent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-primary text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="text-secondary">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-accent">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3 text-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + achIndex * 0.1 }}
                        >
                          <motion.span
                            className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                          onClick={() => exp.link && window.open(exp.link, '_blank')}
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & <span className="text-primary">Certifications</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </motion.div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-medium text-lg text-foreground">B.S. Abdur Rahman Crescent Institute of Science and Technology</h3>
                    <p className="text-primary">B.Tech in Artificial Intelligence and Data Science</p>
                    <p className="text-sm text-muted-foreground">Aug 2023 – June 2027 | Chennai, India</p>
                    <p className="text-sm font-medium text-secondary mt-1">CGPA: 9.22</p>
                    <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                      Majors: Machine Learning, Deep Learning, Data Structures and Algorithms, Artificial Intelligence, Data Mining, Natural Language Processing, Python Programming
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-medium text-lg text-foreground">Delta Public School (CBSE)</h3>
                    <p className="text-secondary">Class XII (CBSE Board)</p>
                    <p className="text-sm text-muted-foreground">June 2022 – May 2023 | Koothanallur, India</p>
                    <p className="text-xs text-foreground/70 mt-2">
                      Subjects: Mathematics, Physics, Chemistry, Computer Science, English
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-effect border-border/50 hover:border-secondary/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-secondary" />
                    </motion.div>
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start justify-between gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5, color: "#0097a7" }}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <motion.span
                            className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm transition-colors duration-300 text-foreground">{cert.name}</span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-primary hover:bg-primary/10"
                            onClick={() => window.open(cert.link, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h2>

          <motion.p
            className="text-foreground mb-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Passionate about solving problems through innovation, teamwork, and continuous learning.
            Participated in 5+ AI hackathons and technical workshops.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=mdhamdhan04@gmail.com&su=Portfolio%20Contact', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                mdhamdhan04@gmail.com
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 px-8"
                onClick={() => window.open('https://www.linkedin.com/in/mohamed-hamdhan-9a8910352/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8"
                onClick={() => window.open('https://github.com/Hamdhan04', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}