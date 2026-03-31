"use client";

import AboutMe from "@/components/AboutMe";
import ReactLogo from "@/components/ReactLogo";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <circle cx="17.5" cy="6.5" r="1.5"></circle>
  </svg>
);

const SOCIAL_LINKS = [
  { id: "github", url: "https://github.com/sathwik-337", icon: GithubIcon },
  { id: "linkedin", url: "https://www.linkedin.com/in/sathwik-kamath-99287b310/", icon: LinkedinIcon },
  { id: "instagram", url: "https://www.instagram.com/sathwik._31/?hl=en", icon: InstagramIcon },
];

const PROJECTS = [
  {
    title: "AI VS ME",
    description: "Explore your job's future. Find out how likely your job is to be automated. Understand how AI is shaping careers with data-driven insights.",
    tags: ["AI", "Data Analysis", "Career Guidance"],
    githubUrl: "https://github.com",
    liveUrl: "https://www.aiversusme.com/",
    codeSnippet: `const riskScore = await analyzeJobRisk({
  jobTitle: 'Software Engineer',
  industry: 'Technology'
});

console.log(\`Automation Risk: \${riskScore}%\`);`
  },
  {
    title: "BranchSelector",
    description: "AI powered Career Assessments! A comprehensive platform designed to help students understand their strengths, weaknesses, and aptitudes.",
    tags: ["Education", "AI", "Assessments"],
    githubUrl: "https://github.com",
    liveUrl: "https://www.branchselector.com/",
    codeSnippet: `const assessment = new CareerAssessment({
  type: 'Engineering',
  studentProfile: data
});

const recommendations = assessment.generatePaths();`
  },
  {
    title: "Cyber Safe Girl",
    description: "Beti Bachao, Cyber Crime Se. An E-Learning Program designed to inculcate the best practices of responsible browsing and stay safe from cyber threats.",
    tags: ["Cybersecurity", "E-Learning", "Social Impact"],
    githubUrl: "https://github.com",
    liveUrl: "https://www.cybersafegirl.com/",
    codeSnippet: `import { SecurityModule } from '@csg/core';

const course = new SecurityModule({
  topic: 'Digital Safety',
  targetAudience: 'Students'
});

course.start();`
  },
  {
    title: "NetTrackr",
    description: "Track Every Click with Advanced Analytics. Shorten your URLs and unlock powerful analytics. Gain real-time insights into your audience's behavior.",
    tags: ["Analytics", "URL Shortener", "SaaS"],
    githubUrl: "https://github.com",
    liveUrl: "https://nettrackr.vercel.app/",
    codeSnippet: `const link = await NetTrackr.shorten({
  url: 'https://long-url.com/campaign',
  domain: 'custom.link'
});

NetTrackr.track(link.id);`
  },
  {
    title: "SehatSathi",
    description: "Provide 24/7 intelligent medical support using conversational AI. Triage symptoms, book appointments, and deliver empathetic care with voice-first automation.",
    tags: ["Healthcare", "Voice AI", "Telemedicine"],
    githubUrl: "https://github.com",
    liveUrl: "https://sehatsathii.vercel.app/",
    codeSnippet: `const session = await SehatSathi.startConsultation({
  mode: 'voice',
  language: 'hi-IN'
});

session.on('diagnosis', (data) => {
  generateReport(data);
});`
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-50">
          <ReactLogo />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[12vw] md:text-9xl font-black tracking-tighter leading-none mix-blend-difference"
            >
              Sathwik Kamath
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-white/40"
            >
              A full stack developer
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 list-none"
            >
              {SOCIAL_LINKS.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.li
                    key={link.id}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center gap-4 max-w-md mx-auto"
          >
            <motion.div
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
              I am a full stack developer with a passion for creating beautiful and functional web applications.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] font-bold tracking-widest uppercase text-white/20">Scroll</span>
          <ChevronDown className="w-4 h-4 text-white/20" />
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="relative py-40 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/30">Selected Works</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Engineering Beauty</h2>
            </div>
            <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed">
              A collection of experiments, tools, and platforms built with precision and intent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={index % 3 === 0 ? "lg:col-span-2 flex justify-center" : ""}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Contact Preview */}
      <AboutMe />

      {/* Navigation */}
      <Navbar />

      {/* Footer Decoration */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center text-white/10 text-[10px] font-bold tracking-[0.5em] uppercase"
      >
        Obscura Systems &copy; 2026
      </motion.footer>
    </div>
  );
}
