import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState, useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your event"),
});

// Floating gold particles component
function GoldParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

const contactInfoVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1, x: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 12 }
  }
};

export function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true);
    toast({
      title: "Request Sent",
      description: "We will get back to you shortly to plan your grand event.",
      className: "bg-gold text-black border-none",
    });
    console.log(values);

    // Reset after showing success animation
    setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 2000);
  }

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Gold Particles Background */}
      <GoldParticles />

      {/* Decorative blurred elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">

          {/* Info Side with staggered animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold block">
              Get In Touch
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-serif text-foreground mt-4 mb-6 md:mb-8">
              Start Planning Your Royal Event
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-12 text-lg">
              Reach out to us for a consultation. Let's create something spectacular together.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-8">
              {[
                { icon: MapPin, title: "Visit Us", content: <>Ketuka Complex-2, Plot No.- 531, 2nd Floor,<br />Jagamara Road, Khandagiri,<br />Bhubaneswar, India 751030</> },
                { icon: Phone, title: "Call Us", content: "+91 89172 90824" },
                { icon: Mail, title: "Email Us", content: "info@balajievents.com" },
              ].map((item, i) => (
                <motion.div key={i} variants={contactInfoVariants} className="flex items-start gap-4 group">
                  <div className="p-3 bg-gold/10 rounded-full text-gold mt-1 group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-12">
              <a href="https://www.instagram.com/shree_balajievents?igsh=cGVlMzV3Z3dpNmNl" target="_blank" rel="noopener noreferrer" className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Form Side with glowing card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" as const, stiffness: 80 }}
          >
            {/* Glowing border wrapper */}
            <div className="relative group">
              {/* Animated glow behind card */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 rounded-xl animate-pulse opacity-50" />

              <Card className="relative p-6 md:p-10 border-t-4 border-t-gold shadow-xl bg-white rounded-xl overflow-hidden">
                {/* Shimmer overlay on card */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />

                {submitted ? (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 200, delay: 0.1 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-gold mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <motion.form
                      onSubmit={form.handleSubmit(onSubmit)}
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="uppercase text-xs tracking-wider">Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Name" {...field} className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors duration-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="uppercase text-xs tracking-wider">Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="your@email.com" {...field} className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors duration-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="uppercase text-xs tracking-wider">Phone</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 ..." {...field} className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors duration-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="uppercase text-xs tracking-wider">Event Date</FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors duration-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="uppercase text-xs tracking-wider">Message</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Tell us about your event details..." {...field} className="border-0 border-b-2 border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent min-h-[100px] resize-none transition-colors duration-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Button
                          type="submit"
                          className="group/btn w-full relative overflow-hidden bg-black text-white hover:text-black py-6 text-lg tracking-widest uppercase font-serif transition-all duration-500"
                        >
                          {/* Gold shimmer sweep */}
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-gold via-gold-light to-gold group-hover/btn:w-full transition-all duration-500 ease-out" />
                          <span className="relative flex items-center justify-center gap-3">
                            Send Inquiry
                            <Send size={18} className="group-hover/btn:-rotate-12 transition-transform duration-300" />
                          </span>
                        </Button>
                      </motion.div>
                    </motion.form>
                  </Form>
                )}
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}