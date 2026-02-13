import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Using placeholder images for now - would normally be actual portfolio images
const portfolioItems = [
  { id: 1, type: "Wedding", title: "Royal Palace Wedding", image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=800", size: "tall" },
  { id: 2, type: "Corporate", title: "Tech Summit 2025", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 3, type: "Concert", title: "Live Music Night", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800", size: "normal" },
  { id: 4, type: "Decor", title: "Floral Grandeur", image: "https://images.unsplash.com/photo-1478146896981-b80c46364355?auto=format&fit=crop&q=80&w=800", size: "wide" },
  { id: 5, type: "Stage", title: "Award Night Setup", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", size: "tall" },
  { id: 6, type: "Catering", title: "Luxury Dining", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800", size: "normal" },
];

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">Witness The Grandeur</h2>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-muted-foreground font-sans max-w-md text-right md:text-right text-left">
              A curated showcase of our most prestigious events, from intimate gatherings to grand spectacles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {portfolioItems.map((item, i) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-sm ${
                    item.size === "tall" ? "md:row-span-2" : item.size === "wide" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-gold text-xs uppercase tracking-widest font-bold mb-2">{item.type}</span>
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 text-white">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto rounded-lg shadow-2xl" 
                />
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-b-lg -mt-2">
                  <h3 className="text-2xl font-serif text-gold">{item.title}</h3>
                  <p className="text-gray-300">{item.type}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}