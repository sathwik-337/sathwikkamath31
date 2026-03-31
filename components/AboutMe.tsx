import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-40 px-6 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <Image
              src="/Linkedinpic.png"
              alt="Sathwik Kamath"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              className="rounded-full border-4 border-white/10 shadow-2xl"
              loading="eager"
              sizes="(max-width: 768px) 16rem, 20rem"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3 text-center md:text-left space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Let's build the future.</h2>
          <p className="text-lg text-white/60 leading-relaxed font-light">
            Available for selected freelance opportunities and collaborations. 
            Passionate about open-source and pushing the boundaries of the web.
          </p>
          <motion.div
            className="pt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://wa.me/919591178734" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
