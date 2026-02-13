import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  Building2, 
  Mic2, 
  Theater, 
  GraduationCap, 
  Lightbulb, 
  Palette, 
  Users, 
  UtensilsCrossed, 
  Camera, 
  CalendarCheck 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: HeartHandshake, title: "Wedding Planning", desc: "Complete wedding management from decoration to vidai." },
  { icon: Building2, title: "Corporate Events", desc: "Professional conferences, seminars, and business meets." },
  { icon: Mic2, title: "Stage Shows", desc: "Celebrity management, live bands, and stage performances." },
  { icon: Theater, title: "Stage Fabrication", desc: "Custom themes, grand stage setups, and fabrication." },
  { icon: Lightbulb, title: "Sound & Light", desc: "High-end sound systems, LED walls, and intelligent lighting." },
  { icon: GraduationCap, title: "School Functions", desc: "Annual days, sports meets, and college festivals." },
  { icon: Palette, title: "Theme Decoration", desc: "Unique themes, floral arrangements, and set designing." },
  { icon: Users, title: "Artist Management", desc: "Anchors, singers, dancers, and international acts." },
  { icon: UtensilsCrossed, title: "Catering Services", desc: "Exquisite multi-cuisine menus and premium service." },
  { icon: Camera, title: "Photo & Video", desc: "Cinematic videography, candid photography, and drone shoots." },
  { icon: CalendarCheck, title: "Event Coordination", desc: "End-to-end logistics and on-ground management." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
} as const; // Added as const to fix type inference

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">World-Class Event Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground font-sans text-lg">
            We transform ordinary occasions into extraordinary celebrations with our meticulous planning and premium execution.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div variants={item} key={index}>
              <Card className="h-full border border-gold/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:shadow-gold/10 transition-all duration-500 group overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center text-center relative z-10">
                  <div className="mb-6 p-4 rounded-full bg-gold/5 border border-gold/20 group-hover:bg-gold group-hover:text-white transition-colors duration-500 shadow-sm relative">
                    <service.icon size={32} strokeWidth={1.5} className="text-gold group-hover:text-white transition-colors duration-500" />
                    {/* Metallic Shine Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-gold-dark transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}