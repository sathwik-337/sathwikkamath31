"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, User, MessageCircle } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#", smooth: true },
  { icon: Briefcase, label: "Projects", href: "#projects", smooth: true },
  { icon: User, label: "About", href: "#about", smooth: true },
  { icon: MessageCircle, label: "Contact", href: "https://wa.me/919591178734", smooth: false },
];

export default function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, smooth: boolean) => {
    if (smooth) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-1 p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      >
        {navItems.map((item, i) => (
          <motion.a
            key={item.label}
            custom={i}
            variants={itemVariants}
            href={item.href}
            onClick={(e) => handleSmoothScroll(e, item.href, item.smooth)}
            target={item.smooth ? "_self" : "_blank"}
            rel={item.smooth ? "" : "noopener noreferrer"}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 relative group"
          >
            <item.icon className="w-5 h-5" />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
            >
              {item.label}
            </motion.span>
          </motion.a>
        ))}
      </motion.nav>
    </div>
  );
}
