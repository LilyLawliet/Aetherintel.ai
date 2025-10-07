import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Database, Cpu, BarChart3 } from "lucide-react";

export default function SectionThree() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const steps = [
    {
      icon: <Database size={28} className="text-blue-500" />,
      title: "Data Ingestion",
      desc: "AETHER aggregates real-time financial, economic, and behavioral data across global markets.",
    },
    {
      icon: <Cpu size={28} className="text-blue-500" />,
      title: "AI Modeling Engine",
      desc: "Proprietary neural architectures interpret trends, correlations, and emerging risk clusters in milliseconds.",
    },
    {
      icon: <BarChart3 size={28} className="text-blue-500" />,
      title: "Actionable Intelligence",
      desc: "Output refined insights directly into your dashboards — from asset forecasts to risk alerts.",
    },
  ];

  return (
    <section
      id="platform"
      ref={ref}
      className="relative bg-black text-white py-32 border-t border-blue-900/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]" />

      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          The <span className="text-blue-500">Platform</span> That Powers
          Precision.
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-20">
          Built to deliver financial foresight — from raw data to high-value
          insights — within a seamless, enterprise-grade AI ecosystem.
        </p>

        {/* Process Flow */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="p-10 rounded-2xl bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-900/20 hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Flow Line Glow */}
      <motion.div
        animate={{ opacity: inView ? 0.2 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
      />
    </section>
  );
}
