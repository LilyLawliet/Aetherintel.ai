import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Avatar from "@radix-ui/react-avatar";

export default function SectionFive() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Alexander Holt",
      title: "Managing Partner, Holt Capital",
      quote:
        "AETHER has redefined how we perceive alpha generation. Its predictive accuracy and real-time liquidity modeling gave us a 4.2x improvement in decision speed.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Elena D’Souza",
      title: "Chief Investment Officer, D’Souza Private Fund",
      quote:
        "What stood out is not just the AI precision — it’s the elegance in data delivery. The interface feels like reading the markets through intuition itself.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Dr. Marcus Veyn",
      title: "Founder, Veyn Family Office",
      quote:
        "AETHER isn’t software; it’s a cognitive partner. It surfaces insights our analysts spend weeks uncovering — now within seconds.",
    },
  ];

  return (
    <section
      id="clients"
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden border-t border-blue-900/20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]" />

      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Trusted by <span className="text-blue-500">Visionaries</span> in Global Finance
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-20">
          From private equity partners to family offices, AETHER empowers decision-makers at the highest levels of capital strategy.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((client, index) => (
            <motion.div
              key={index}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-900/20 hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <Avatar.Root className="inline-flex h-16 w-16 select-none items-center justify-center overflow-hidden rounded-full border border-blue-500/30 shadow-lg shadow-blue-900/30">
                  <Avatar.Image
                    className="h-full w-full object-cover"
                    src={client.avatar}
                    alt={client.name}
                  />
                  <Avatar.Fallback
                    className="text-blue-500 text-xl font-semibold bg-blue-900/20 w-full h-full flex items-center justify-center"
                  >
                    {client.name.split(" ")[0][0]}
                    {client.name.split(" ")[1][0]}
                  </Avatar.Fallback>
                </Avatar.Root>
              </div>
              <p className="text-white/80 italic leading-relaxed mb-6">
                “{client.quote}”
              </p>
              <div className="text-center">
                <p className="font-semibold text-lg">{client.name}</p>
                <p className="text-white/50 text-sm">{client.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ambient glow */}
      <motion.div
        animate={{ opacity: inView ? 0.3 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-700/20 blur-[160px] rounded-full"
      />
    </section>
  );
}
