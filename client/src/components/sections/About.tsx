import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" 
                alt="Wedding Decor" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute top-10 -left-10 w-full h-full border border-gold z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-royal-red rounded-full opacity-10 blur-2xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">About Balaji Events</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6 leading-tight">
              We Don't Just Plan Events, <br/>
              <span className="text-gold italic">We Craft Memories.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of experience in the luxury event industry, Balaji Events & Entertainment has established itself as a premier name in creating spectacular celebrations. We blend traditional Indian grandeur with modern sophistication to deliver events that leave a lasting impression.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "10+ Years of Experience",
                "500+ Successful Events",
                "Premium Vendor Network",
                "Personalized Theme Design"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Check size={14} />
                  </div>
                  <span className="font-serif text-lg text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-gold pl-6 py-2 bg-gold/5 italic text-foreground/80 font-serif text-lg">
              "Our mission is to bring your vision to life with flawless execution and unparalleled elegance."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}