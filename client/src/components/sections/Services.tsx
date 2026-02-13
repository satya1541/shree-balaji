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
  CalendarCheck,
  type LucideIcon
} from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  num: string;
  highlight?: boolean;
  image: string;
  video?: string;
};

const heroService = {
  icon: HeartHandshake,
  title: "Wedding Planning",
  desc: "Bespoke wedding experiences tailored to your vision, from concept to flawless execution, ensuring an unforgettable celebration.",
  num: "01",
  image: "/assets/wedding_couple_photo.png",
};

const gridServices: ServiceItem[] = [
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Elevate your brand with professional, impactful corporate gatherings, conferences, and product launches.",
    num: "02",
    image: "/assets/corporate_conference_1770965767562.png"
  },
  {
    icon: Mic2,
    title: "Stage Shows",
    desc: "Curating spectacular entertainment and performances with world-class artists and seamless production.",
    num: "03",
    image: "/assets/couple_event.png"
  },
  {
    icon: Theater,
    title: "Stage Fabrication",
    desc: "Custom stage designs and construction using premium materials and cutting-edge technology for immersive environments.",
    num: "04",
    image: "/assets/Wedding_Stage_1770965767568.png"
  },
  {
    icon: Lightbulb,
    title: "Sound & Light",
    desc: "State-of-the-art audio and visual solutions to create the perfect ambiance and captivate your audience.",
    num: "05",
    image: "/assets/wedding_hall_decor_3.png"
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    desc: "Exquisite culinary experiences with gourmet menus, presented with impeccable service and style.",
    num: "06",
    image: "/assets/wedding_hall_decoration.png"
  },
  {
    icon: Palette,
    title: "Theme Decoration",
    desc: "Unique themes, stunning floral arrangements, and bespoke set designing for every occasion.",
    num: "07",
    image: "/assets/wedding_hall_decor_2.png"
  },
];

const bottomServices: ServiceItem[] = [
  {
    icon: GraduationCap,
    title: "School Functions",
    desc: "Annual days, sports meets, and college festivals executed to perfection.",
    num: "08",
    image: "/assets/official_meeting_conference.png"
  },
  {
    icon: Users,
    title: "Artist Management",
    desc: "Anchors, singers, dancers, and international acts for your event.",
    num: "09",
    image: "/assets/bride_image_1770965767561.png"
  },
  {
    icon: Camera,
    title: "Photo & Video",
    desc: "Cinematic videography, candid photography, and drone shoots.",
    num: "10",
    image: "/assets/bride_image_2.png",
    video: "/assets/wedding_hall_video.mp4"
  },
  {
    icon: CalendarCheck,
    title: "Event Coordination",
    desc: "End-to-end logistics, planning, and on-ground management.",
    num: "11",
    image: "/assets/Wedding_Mandap_1770965767567.png"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 12 } }
};

function SmallCard({ service }: { service: ServiceItem }) {
  const isHighlight = service.highlight;

  return (
    <motion.div
      variants={fadeUp}
      onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
      className={`group relative rounded-xl overflow-hidden cursor-pointer duration-500 hover:-translate-y-1 ${isHighlight ? "shadow-[0_0_30px_rgba(212,175,55,0.15)]" : "hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        }`}
    >
      {/* Background Media (Video or Image) */}
      <div className="absolute inset-0 overflow-hidden">
        {service.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
          >
            <source src={service.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
          />
        )}
      </div>

      {/* Bottom Gradient Overlay for Text Readability: Always dark at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 opacity-100" />

      {/* Cinematic Border with Glow */}
      <div className={`absolute inset-0 rounded-xl border transition-all duration-500 ${isHighlight
        ? "border-gold/60 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]"
        : "border-white/10 group-hover:border-gold/40 group-hover:shadow-[inset_0_0_15px_rgba(212,175,55,0.1)]"
        }`} />

      {/* Shine Effect */}
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:animate-shine" />

      <div className="relative z-10 p-6 flex flex-col h-full bg-transparent">
        {/* Top: Icon + Number */}
        <div className="flex items-start justify-between mb-4">
          {/* Icon Container */}
          <div className={`p-3 rounded-lg border transition-all duration-500 ${isHighlight
            ? "bg-gradient-to-br from-gold/20 to-black border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            : "bg-black/40 border-white/10 group-hover:bg-gold/[0.1] group-hover:border-gold/30 backdrop-blur-sm"
            }`}>
            <service.icon
              size={24}
              strokeWidth={1}
              className={`${isHighlight ? "text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" : "text-gold/90 group-hover:text-gold group-hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]"} transition-all duration-500`}
            />
          </div>
          <span className={`font-serif text-3xl font-light select-none transition-colors duration-500 ${isHighlight ? "text-gold drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]" : "text-white/40 group-hover:text-gold/60"
            }`}>
            {service.num}
          </span>
        </div>

        {/* Title */}
        <div className="mt-auto">
          <h3 className="text-sm font-sans font-bold text-white uppercase tracking-[0.1em] mb-2 group-hover:text-gold transition-colors duration-300 drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {service.title}
          </h3>

          {/* Golden Line Separator */}
          <div className={`h-[1px] w-12 mb-3 transition-all duration-500 ${isHighlight ? "bg-gold shadow-[0_0_5px_rgba(212,175,55,0.8)]" : "bg-white/40 group-hover:bg-gold/80 group-hover:w-full"
            }`} />

          {/* Description - Hidden by default, revealed on hover */}
          <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
            <p className="text-xs text-stone-200 leading-relaxed group-hover:text-white transition-opacity duration-500 opacity-0 group-hover:opacity-100 line-clamp-3 drop-shadow-sm font-medium pb-2">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-16 md:py-28 relative overflow-hidden bg-[#050505]">
      {/* === CINEMATIC BACKGROUND === */}

      {/* Main Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0a00] to-black opacity-80" />

      {/* Decorative Golden Curves / Smoke */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-950/[0.05] rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.2) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* === HEADER === */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold font-sans uppercase tracking-[0.3em] text-xs font-bold drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">
              Our Expertise
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#F9E5B0] via-[#D4AF37] to-[#B38B26] mb-6 md:mb-8 tracking-wide drop-shadow-md"
          >
            WORLD-CLASS EVENT SERVICES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/60 font-sans text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            We transform ordinary occasions into extraordinary celebrations with our <span className="text-gold">meticulous planning</span> and <span className="text-gold">premium execution</span>.
          </motion.p>
        </div>

        {/* === MAIN BENTO GRID === */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[220px_220px_220px] gap-4 md:gap-5 mb-4 md:mb-5"
        >
          {/* === HERO CARD (Left) === */}
          <motion.div
            variants={fadeUp}
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative rounded-2xl overflow-hidden lg:row-span-3 min-h-[400px] sm:min-h-[500px] lg:min-h-0 cursor-pointer shadow-[0_0_35px_rgba(212,175,55,0.2)] border border-gold/40 hover:border-gold/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-700"
          >
            {/* Background Image with slight zoom effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={heroService.image}
                alt={heroService.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>

            {/* Multi-layer Lux Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

            {/* Cinematic Golden Vignette Border */}
            <div className="absolute inset-0 rounded-2xl border border-gold/10 group-hover:border-gold/40 transition-colors duration-700 pointer-events-none" />
            <div className="absolute inset-4 rounded-xl border border-white/10 opacity-50 group-hover:opacity-100 group-hover:border-gold/30 transition-all duration-700" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">

              {/* Top Row */}
              <div className="flex justify-between items-start">
                {/* Decorative Icon */}
                <div className="text-gold/80 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                  <HeartHandshake size={40} strokeWidth={1} />
                </div>
                {/* Number */}
                <span className="font-serif text-5xl text-gold/30 group-hover:text-gold/60 transition-colors duration-500 drop-shadow-lg">
                  {heroService.num}
                </span>
              </div>

              {/* Bottom Row */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-white mb-4 leading-tight">
                  <span className="block text-gold drop-shadow-md">WEDDING</span>
                  <span className="tracking-wide">PLANNING</span>
                </h3>

                <div className="h-[1px] w-20 bg-gold mb-4 group-hover:w-40 transition-all duration-700 shadow-[0_0_5px_gold]" />

                <p className="text-sm text-stone-300 leading-relaxed opacity-90 max-w-xs group-hover:text-white transition-colors">
                  {heroService.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* === RIGHT GRID (2 cols x 3 rows) === */}
          {gridServices.map((service) => (
            <SmallCard key={service.num} service={service} />
          ))}
        </motion.div>

        {/* === BOTTOM ROW (1 x 4) === */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[240px]"
        >
          {bottomServices.map((service) => (
            <SmallCard key={service.num} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}