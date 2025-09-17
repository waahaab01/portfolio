import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkmode, toggleDarkmode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 
        ${isDarkmode ? "bg-[#111827]/90" : "bg-[#F9FAFB]/90"} 
        backdrop-blur-md border-b 
        ${isDarkmode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <Code2 size={24} className={`${isDarkmode ? "text-emerald-400" : "text-emerald-500"}`} />
          <span
            className={`text-lg ml-1 font-semibold ${
              isDarkmode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Portfolio
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm tracking-wider uppercase font-medium transition-colors 
                ${
                  isDarkmode
                    ? "text-gray-300 hover:text-emerald-400"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
            >
              {item}
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleDarkmode(isDarkmode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors 
              ${
                isDarkmode
                  ? "bg-gray-800 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                  : "bg-gray-200 text-emerald-600 hover:bg-emerald-100"
              }`}
          >
            {isDarkmode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleDarkmode(isDarkmode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors 
              ${
                isDarkmode
                  ? "bg-gray-800 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                  : "bg-gray-200 text-emerald-600 hover:bg-emerald-100"
              }`}
          >
            {isDarkmode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors 
              ${
                isDarkmode
                  ? "bg-gray-800 text-gray-300 hover:bg-emerald-600 hover:text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-emerald-100"
              }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className={`md:hidden mt-4 p-4 rounded-lg shadow-lg 
              ${isDarkmode ? "bg-gray-900" : "bg-white"} 
              border ${isDarkmode ? "border-gray-700" : "border-gray-200"}`}
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors 
                  ${
                    isDarkmode
                      ? "text-gray-300 hover:text-emerald-400"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
