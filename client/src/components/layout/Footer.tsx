import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-12 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="Balaji Logo" className="h-16 w-auto brightness-0 invert" />
              <div>
                <h3 className="text-2xl font-serif text-gold">BALAJI</h3>
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-70">Events & Entertainment</p>
              </div>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Creating unforgettable experiences with a touch of royal elegance. Your premier partner for luxury event management.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-serif text-xl mb-6">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Stage Fabrication</li>
              <li>Artist Management</li>
              <li>Catering</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Balaji Events & Entertainment. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="/terms-and-conditions" className="hover:text-gold transition-colors">Terms & Conditions</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}