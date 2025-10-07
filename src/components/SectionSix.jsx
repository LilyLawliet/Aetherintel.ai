import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionSix() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-black text-white py-40 overflow-hidden border-t border-blue-900/20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_80%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-black" />

      <motion.div
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 80 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
          Request <span className="text-blue-500">Private Access</span>
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          AETHER is reserved for institutional investors, family offices, and high-net-worth partners.
          Submit a request below to receive a secure invitation and onboarding access.
        </p>

        {/* Form */}
        <motion.form
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left"
        >
          <div>
            <label className="block text-white/70 text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John A. Carter"
              className="w-full bg-transparent border border-blue-900/40 focus:border-blue-500/60 text-white rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder-white/40"
            />
          </div>

          <div>
            <label className="block text-white/70 text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="john@firm.com"
              className="w-full bg-transparent border border-blue-900/40 focus:border-blue-500/60 text-white rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder-white/40"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-white/70 text-sm mb-2">
              Message or Investment Focus
            </label>
            <textarea
              rows="5"
              placeholder="Briefly describe your interest or firm focus..."
              className="w-full bg-transparent border border-blue-900/40 focus:border-blue-500/60 text-white rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder-white/40 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="px-10 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.3)]"
            >
              Request Invitation
            </motion.button>
          </div>
        </motion.form>

        {/* Subtext */}
        <motion.p
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/50 text-sm mt-12"
        >
          All requests are reviewed confidentially. Approved applicants will receive onboarding credentials via secure channels.
        </motion.p>
      </motion.div>

      {/* Ambient luxury glow */}
      <motion.div
        animate={{ opacity: inView ? 0.25 : 0, scale: inView ? 1 : 0.9 }}
        transition={{ duration: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-700/20 blur-[200px] rounded-full"
      />
    </section>
  );
}
