import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the "premium" feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.img
              src="/assets/logo.png"
              alt="Loading"
              className="w-32 h-auto mb-8"
              animate={{
                scale: [1, 1.1, 1],
                filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="w-48 h-[1px] bg-white/20 overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Floating Action Button for WhatsApp */}
        {/* Floating Action Button for WhatsApp */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-4 group"
        >
          {/* Tooltip */}
          <span className="hidden md:block bg-white text-black px-4 py-2 rounded-full shadow-lg font-medium text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            Chat with us
          </span>

          {/* Button Container */}
          <div className="relative">
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 duration-1000" />

            <a
              href="https://wa.me/918917290824"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.03-.967-.272-.297-.471-.446-.967-.446-.495 0-.965.176-1.411.669-.446.495-1.708 1.671-1.708 4.075 0 2.404 1.751 4.726 1.999 5.073.248.347 3.407 5.205 8.243 7.301 2.872 1.244 3.961.998 4.679.923.718-.075 1.758-.718 2.006-1.411.248-.694.248-1.289.173-1.411z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}