import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkmode } = useTheme();

  return (
    <footer
      className={`relative pt-16 pb-8 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-gray-300" : "bg-gray-50 text-gray-700"
      }`}
    >
      {/* background glowing circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className={`absolute top-10 left-10 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
          }`}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className={`absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-violet-500" : "bg-violet-400"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {/* About / Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Wahab <span className="text-emerald-500">Hussain</span>
          </h2>
          <p
            className={`text-sm leading-relaxed ${
              isDarkmode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Crafting modern, functional, and scalable web experiences with
            passion for design and performance. Let’s build something
            extraordinary together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About", "Projects", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-emerald-500 ${
                    isDarkmode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <div className="flex space-x-5">
            {[
              { icon: FiGithub, href: "https://github.com/waahaab01" },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/wahabhussain01/",
              },
              { icon: FiTwitter, href: "https://twitter.com/" },
              { icon: Mail, href: "mailto:waahaab7233@gmail.com" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  isDarkmode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider + Bottom Note */}
      <div
        className={`relative max-w-7xl mx-auto mt-12 pt-6 border-t text-center text-sm ${
          isDarkmode ? "border-gray-800 text-gray-500" : "border-gray-200 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()} Wahab Hussain. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
