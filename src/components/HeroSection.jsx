import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          <span className="text-blue-500">AI-Driven</span> Intelligence  
          for Private Wealth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Empower your investment strategy with predictive AI insights,  
          real-time risk modeling, and portfolio intelligence designed for  
          <span className="text-blue-400"> ultra high net worth precision.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-500/30 transition-all duration-300">
            Request Access
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:border-blue-500 text-white/80 hover:text-blue-400 font-semibold text-sm tracking-wide transition-all duration-300">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Floating gradient accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.2, duration: 3 }}
        className="absolute bottom-20 w-[400px] h-[400px] bg-blue-700/20 blur-[120px] rounded-full"
      />
    </section>
  );
}
