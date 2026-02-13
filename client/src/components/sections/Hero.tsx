import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        {/* Spacer to preserve text alignment after logo removal */}
        <div className="h-24 sm:h-32 md:h-48 mb-8" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-4 tracking-wide"
        >
          Creating <span className="text-gradient-gold font-bold italic">Unforgettable</span> Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl font-sans tracking-wider mb-8 md:mb-12 px-4"
        >
          COMPLETE EVENT PLANNING & ENTERTAINMENT SOLUTIONS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-transparent border border-gold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            <span className="relative text-white font-sans font-bold tracking-widest text-sm flex items-center gap-2 group-hover:text-black">
              PLAN YOUR EVENT <ArrowRight size={16} />
            </span>
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-sans font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            VIEW OUR WORK
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}