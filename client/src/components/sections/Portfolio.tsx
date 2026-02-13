import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Using real portfolio images from attached assets
const portfolioItems = [
  { 
    id: 1, 
    type: "Wedding", 
    title: "Royal Bridal Grandeur", 
    image: "/assets/bride_image_1770965767561.png", 
    size: "tall" 
  },
  { 
    id: 2, 
    type: "Corporate", 
    title: "Executive Conference", 
    image: "/assets/corporate_conference_1770965767562.png", 
    size: "normal" 
  },
  { 
    id: 3, 
    type: "Wedding", 
    title: "Golden Mandap Decor", 
    image: "/assets/Wedding_Mandap_1770965767567.png", 
    size: "normal" 
  },
  { 
    id: 4, 
    type: "Event", 
    title: "Valentine Special Night", 
    image: "/assets/valaentine_day_special_1770965767564.png", 
    size: "wide" 
  },
  { 
    id: 5, 
    type: "Wedding", 
    title: "Grand Entrance Portal", 
    image: "/assets/Wedding_entrance_1770965767565.png", 
    size: "tall" 
  },
  { 
    id: 6, 
    type: "Corporate", 
    title: "Official Summit", 
    image: "/assets/meeting_hall_1770965767563.png", 
    size: "normal" 
  },
  { 
    id: 7, 
    type: "Wedding", 
    title: "Floral Stage Design", 
    image: "/assets/Wedding_Stage_1770965767568.png", 
    size: "wide" 
  }
];

export function Portfolio() {
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