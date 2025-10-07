import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Overview", "Platform", "Insights", "Clients", "Contact"];

  // Smooth scroll handler
  const handleScrollToHero = () => {
    const hero = document.querySelector("#hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-blue-900/40"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={handleScrollToHero}
          className="text-white font-semibold text-2xl tracking-tight select-none cursor-pointer"
        >
          AETHER<span className="text-blue-500 font-light">INTEL</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm text-white/70 font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "#3b82f6" }}
              transition={{ duration: 0.2 }}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col bg-black/95 text-white/80 px-6 py-4 space-y-4 border-t border-blue-900/40"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
