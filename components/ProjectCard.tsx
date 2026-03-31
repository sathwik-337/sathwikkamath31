"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Terminal, ArrowRight } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ProjectCardProps {
  title: string;
  description: string;
  codeSnippet: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  codeSnippet,
  githubUrl,
  liveUrl,
  tags,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-xl group perspective-1000"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
      >
        {/* Border Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

        <div className="flex flex-col gap-6 h-full">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:translate-z-10 transition-transform duration-500">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: tagIndex * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase border border-white/10 rounded-md bg-white/5 text-white/60 transition-colors"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <p className="text-sm text-white/60 leading-relaxed font-light">
            {description}
          </p>

          <div className="relative group/code rounded-xl overflow-hidden border border-white/5 bg-black/40 backdrop-blur-md">
            <SyntaxHighlighter
              language="javascript"
              style={atomDark}
              customStyle={{
                background: "transparent",
                padding: "1.5rem",
                fontSize: "0.75rem",
                margin: 0,
              }}
              codeTagProps={{
                style: {
                  fontFamily: "var(--font-geist-mono)",
                },
              }}
            >
              {codeSnippet}
            </SyntaxHighlighter>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <Terminal className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/40 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all group/link"
            >
              View Project
              <motion.div whileHover={{ x: 3 }}>
                <ArrowRight className="w-4 h-4 transition-transform" />
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
