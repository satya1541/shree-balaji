import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your event"),
});

export function Contact() {
  const { toast } = useToast();
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
    toast({
      title: "Request Sent",
      description: "We will get back to you shortly to plan your grand event.",
      className: "bg-gold text-black border-none",
    });
    console.log(values);
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <div>
            <span className="text-gold font-sans uppercase tracking-[0.2em] text-sm font-semibold">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-8">Start Planning Your Royal Event</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Reach out to us for a consultation. Let's create something spectacular together.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">Balaji Events HQ,<br/>Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full text-gold mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@balajievents.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-10 border-t-4 border-t-gold shadow-xl bg-white">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-wider">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-wider">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-wider">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 ..." {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs tracking-wider">Event Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-wider">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your event details..." {...field} className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-gold bg-transparent min-h-[100px] resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 py-6 text-lg tracking-widest uppercase font-serif">
                    Send Inquiry
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}