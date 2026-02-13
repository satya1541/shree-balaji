import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh & Priya Sharma",
    event: "Royal Wedding",
    text: "Balaji Events made our dream wedding a reality. The decor was breathtaking, and the management was flawless. Every guest was in awe of the arrangements. Truly a premium experience!",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    event: "Corporate Gala",
    text: "Exceptional professionalism. They handled our annual corporate gala with such precision. The sound, lights, and artist management were top-notch. Highly recommended for business events.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    event: "Sangeet Ceremony",
    text: "The stage fabrication and theme decoration were stunning. The team took care of every small detail. It was a magical evening thanks to Balaji Events.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 text-white">Client Love</h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-6"></div>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/1">
                <div className="p-4">
                  <Card className="bg-white/5 backdrop-blur-md border-gold/20 text-center p-8 md:p-12">
                    <CardContent className="pt-6">
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={20} className="fill-gold text-gold" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed text-white/90">"{t.text}"</p>
                      <div>
                        <h4 className="font-bold text-gold uppercase tracking-wider text-sm">{t.name}</h4>
                        <p className="text-white/50 text-xs mt-1">{t.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gold/10 hover:bg-gold text-gold hover:text-black border-gold/20" />
          <CarouselNext className="bg-gold/10 hover:bg-gold text-gold hover:text-black border-gold/20" />
        </Carousel>
      </div>
    </section>
  );
}