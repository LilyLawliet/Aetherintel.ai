import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Activity, BarChart } from "lucide-react";

export default function SectionFour() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const insights = [
    {
      icon: <TrendingUp size={28} className="text-blue-500" />,
      stat: "+124%",
      label: "Predicted Portfolio Growth",
      desc: "AETHER forecasts and optimizes asset classes based on market acceleration and liquidity signals.",
    },
    {
      icon: <Activity size={28} className="text-blue-500" />,
      stat: "0.03%",
      label: "Volatility Deviation",
      desc: "AI rebalances exposure dynamically to minimize drawdowns across multi-asset structures.",
    },
    {
      icon: <BarChart size={28} className="text-blue-500" />,
      stat: "93%",
      label: "Accuracy in Forecast Models",
      desc: "Precision-trained neural engines built on proprietary data layers ensure consistent predictive performance.",
    },
  ];

  return (
    <section
      id="insights"
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden border-t border-blue-900/20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_70%)]" />

      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 text-center"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          AI-Powered <span className="text-blue-500">Investment Insights</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-20">
          Real-time intelligence designed for institutional precision — turning
          vast datasets into concise, predictive, and profitable insight streams.
        </p>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {insights.map((insight, index) => (
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
              <div className="flex justify-center mb-4">{insight.icon}</div>
              <motion.div
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                }}
                transition={{ delay: index * 0.3 + 0.4, duration: 0.8 }}
              >
                <h3 className="text-5xl font-bold text-blue-500 mb-2">
                  {insight.stat}
                </h3>
                <p className="text-lg font-semibold mb-3">
                  {insight.label}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {insight.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated underline effect */}
        <motion.div
          animate={{ opacity: inView ? 0.3 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent mt-16"
        />
      </motion.div>

      {/* Floating glow */}
      <motion.div
        animate={{ opacity: inView ? 0.3 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 3 }}
        className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full"
      />
    </section>
  );
}
