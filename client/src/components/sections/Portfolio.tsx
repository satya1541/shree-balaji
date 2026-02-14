import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

type PortfolioItem = {
  id: number;
  type: string;
  title: string;
  image?: string;
  video?: string;
  size: "normal" | "tall" | "wide";
  mediaType: "image" | "video";
};

const portfolioItems: PortfolioItem[] = [
  // Row 1
  {
    id: 1,
    type: "Wedding",
    title: "Royal Bridal Grandeur",
    image: "/assets/bride_image_1770965767561.png",
    size: "tall",
    mediaType: "image"
  },
  {
    id: 2,
    type: "Corporate",
    title: "Executive Conference",
    image: "/assets/corporate_conference_1770965767562.png",
    size: "normal",
    mediaType: "image"
  },
  {
    id: 3,
    type: "Wedding",
    title: "Golden Mandap Decor",
    image: "/assets/Wedding_Mandap_1770965767567.png",
    size: "normal",
    mediaType: "image"
  },
  // Row 2
  {
    id: 4,
    type: "Wedding",
    title: "Grand Wedding Hall",
    video: "https://x102zam.s3.ap-south-2.amazonaws.com/wedding_hall_video.mp4",
    image: "/assets/wedding_hall_decoration.png",
    size: "wide",
    mediaType: "video"
  },
  {
    id: 5,
    type: "Wedding",
    title: "Elegant Bridal Portrait",
    image: "/assets/bride_image_2.png",
    size: "tall",
    mediaType: "image"
  },
  // Row 3
  {
    id: 6,
    type: "Wedding",
    title: "Grand Entrance Portal",
    image: "/assets/Wedding_entrance_1770965767565.png",
    size: "normal",
    mediaType: "image"
  },
  {
    id: 7,
    type: "Event",
    title: "Valentine Special Night",
    image: "/assets/valaentine_day_special_1770965767564.png",
    size: "normal",
    mediaType: "image"
  },
  // Row 4
  {
    id: 8,
    type: "Wedding",
    title: "Floral Stage Design",
    image: "/assets/Wedding_Stage_1770965767568.png",
    size: "wide",
    mediaType: "image"
  },
  {
    id: 9,
    type: "Corporate",
    title: "Official Summit",
    image: "/assets/meeting_hall_1770965767563.png",
    size: "normal",
    mediaType: "image"
  },
  // Row 5
  {
    id: 10,
    type: "Wedding",
    title: "Romantic Couple Celebration",
    image: "/assets/couple_event.png",
    size: "tall",
    mediaType: "image"
  },
  {
    id: 11,
    type: "Wedding",
    title: "Wedding Couple Portrait",
    image: "/assets/wedding_couple_photo.png",
    size: "tall",
    mediaType: "image"
  },
  {
    id: 12,
    type: "Corporate",
    title: "Business Conference Hall",
    image: "/assets/official_meeting_conference.png",
    size: "normal",
    mediaType: "image"
  },
  // Row 6
  {
    id: 13,
    type: "Wedding",
    title: "Luxurious Hall Decor",
    image: "/assets/wedding_hall_decor_2.png",
    size: "wide",
    mediaType: "image"
  },
  // Row 7
  {
    id: 14,
    type: "Wedding",
    title: "Opulent Hall Styling",
    image: "/assets/wedding_hall_decor_3.png",
    size: "normal",
    mediaType: "image"
  },
  {
    id: 15,
    type: "Wedding",
    title: "Royal Stage Backdrop",
    image: "/assets/wedding_stage_2.png",
    size: "normal",
    mediaType: "image"
  },
  {
    id: 16,
    type: "Wedding",
    title: "Elegant Hall Arrangement",
    image: "/assets/wedding_hall_decoration.png",
    size: "normal",
    mediaType: "image"
  },
];

function VideoThumbnail({ item }: { item: PortfolioItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
    </div>
  );
}

function VideoDialog({ item }: { item: PortfolioItem }) {
  const dialogVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0 text-white">
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <video
          ref={dialogVideoRef}
          src={item.video}
          controls
          playsInline
          autoPlay
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-auto max-h-[80vh] object-contain bg-black"
        />
      </div>
      <div className="bg-black/80 backdrop-blur-md p-6 rounded-b-lg -mt-2">
        <h3 className="text-2xl font-serif text-gold">{item.title}</h3>
        <p className="text-gray-300">{item.type} • Video</p>
      </div>
    </DialogContent>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mt-4">Witness The Grandeur</h2>
          </div>
          <div className="w-full md:w-auto">
            <p className="text-muted-foreground font-sans max-w-md text-right md:text-right text-left">
              A curated showcase of our most prestigious events, from intimate gatherings to grand spectacles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {portfolioItems.map((item, i) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative group cursor-pointer overflow-hidden rounded-sm ${item.size === "tall" ? "sm:row-span-2" : item.size === "wide" ? "sm:col-span-2" : ""
                    }`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>

                  {item.mediaType === "video" ? (
                    <VideoThumbnail item={item} />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-gold text-xs uppercase tracking-widest font-bold mb-2">
                      {item.type}
                      {item.mediaType === "video" && (
                        <span className="ml-2 inline-flex items-center gap-1 bg-gold/20 text-gold px-2 py-0.5 rounded-full text-[10px]">
                          <Play className="w-3 h-3 fill-gold" /> VIDEO
                        </span>
                      )}
                    </span>
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                  </div>
                </motion.div>
              </DialogTrigger>

              {item.mediaType === "video" ? (
                <VideoDialog item={item} />
              ) : (
                <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 text-white">
                  <div className="flex flex-col max-h-[90vh]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-[80vh] object-contain rounded-t-lg shadow-2xl"
                    />
                    <div className="bg-black/80 backdrop-blur-md p-6 rounded-b-lg">
                      <h3 className="text-2xl font-serif text-gold">{item.title}</h3>
                      <p className="text-gray-300">{item.type}</p>
                    </div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}