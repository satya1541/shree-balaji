import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img
              src="/assets/logo.png"
              alt="Balaji Events"
              className="h-12 w-auto md:h-16 transition-transform group-hover:scale-105 duration-500"
            />
            <div className={cn("hidden lg:block", !isScrolled && "text-white")}>
              <h1 className="font-serif text-2xl font-bold tracking-wider text-gold">श्री BALAJI</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans"> Events & Entertainment</p>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "font-sans text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300 relative group",
                isScrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-gold to-gold-light hover:from-white hover:to-white hover:text-gold text-black font-bold border-none rounded-none px-6 tracking-widest"
          >
            PLAN EVENT
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("p-2", isScrolled ? "text-foreground" : "text-white")}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden h-screen"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-24">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-6 mt-8 items-center w-full px-8">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-black font-bold uppercase tracking-widest py-6"
                >
                  Plan Event
                </Button>

                <div className="flex gap-8">
                  <a href="https://www.instagram.com/shree_balajievents?igsh=cGVlMzV3Z3dpNmNl" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  {/* Phone link */}
                  <a href="tel:+918917290824" className="text-gold hover:text-white transition-colors">
                    <Phone className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}