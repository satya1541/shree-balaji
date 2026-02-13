import { motion, useInView, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Animated counter hook
function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return count;
}

const stats = [
  { number: 10, suffix: "+", label: "Years of Experience" },
  { number: 500, suffix: "+", label: "Successful Events" },
  { number: 50, suffix: "+", label: "Premium Vendors" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
];

const checklistItems = [
  "Premium Vendor Network",
  "Personalized Theme Design",
  "End-to-End Event Management",
  "Dedicated Event Coordinator"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">

          {/* Image Side with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              ref={imageRef}
              style={{ y: imageY }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm border-8 border-white shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
                alt="Wedding Decor"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              />
              {/* Hover overlay with gold tint */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-700" />
            </motion.div>
            {/* Decorative Frame */}
            <div className="absolute top-10 -left-10 w-full h-full border border-gold z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-red rounded-full opacity-10 blur-2xl"></div>

            {/* Floating gold accent */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-gold/30 rounded-full hidden md:block"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text Side with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <motion.span variants={itemVariants} className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold block">
              About Balaji Events
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
              We Don't Just Plan Events, <br />
              <span className="text-gold italic">We Craft Memories.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of experience in the luxury event industry, Balaji Events & Entertainment has established itself as a premier name in creating spectacular celebrations. We blend traditional Indian grandeur with modern sophistication to deliver events that leave a lasting impression.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-10">
              {checklistItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    <Check size={14} />
                  </div>
                  <span className="font-serif text-lg text-foreground/80 group-hover:text-gold transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="border-l-4 border-gold pl-6 py-2 bg-gold/5 italic text-foreground/80 font-serif text-lg"
            >
              "Our mission is to bring your vision to life with flawless execution and unparalleled elegance."
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats Counter */}
        <div ref={statsRef} className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} isInView={statsInView} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isInView, delay }: { stat: typeof stats[0]; isInView: boolean; delay: number }) {
  const count = useCounter(stat.number, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: "spring" as const, stiffness: 100 }}
      className="text-center p-6 rounded-xl border border-gold/20 bg-gradient-to-b from-gold/[0.03] to-transparent hover:border-gold/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-500 group"
    >
      <div className="text-3xl md:text-4xl font-serif font-bold text-gold group-hover:scale-110 transition-transform duration-300 inline-block">
        {count}{stat.suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider font-sans">{stat.label}</p>
    </motion.div>
  );
}