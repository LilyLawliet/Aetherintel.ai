import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, LineChart, ShieldCheck } from "lucide-react";

export default function SectionTwo() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <Brain size={28} className="text-blue-500" />,
      title: "Predictive Market Intelligence",
      desc: "AETHER analyzes billions of data points to forecast market movement, liquidity shifts, and asset growth trajectories.",
    },
    {
      icon: <LineChart size={28} className="text-blue-500" />,
      title: "Portfolio Optimization Engine",
      desc: "AI-driven allocation logic that adapts to volatility and continuously aligns with high-return strategies.",
    },
    {
      icon: <ShieldCheck size={28} className="text-blue-500" />,
      title: "Institutional-Grade Security",
      desc: "Enterprise-level encryption and private data infrastructure designed for family offices and private funds.",
    },
  ];

  return (
    <section
      id="overview"
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden border-t border-blue-900/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]" />

      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          The <span className="text-blue-500">Intelligence Core</span> Behind
          Modern Wealth.
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16">
          AETHER transforms raw data into predictive wealth signals — enabling
          firms and investors to make faster, sharper, and smarter capital
          decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-8 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-900/20 hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: inView ? 0.3 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-700/20 blur-[120px] rounded-full"
      />
    </section>
  );
}
