import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

import ProfileImage from "../../assets/images/profile-image.png";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { isDarkmode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* background glowing circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`top-20 absolute right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`bottom-20 absolute left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkmode ? "bg-violet-500" : "bg-violet-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto z-10 w-full mt-20">
          {/* mobile view */}
          <div className="block lg:hidden text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
            >
              {/* profile image */}
              <motion.div variants={imageVariant} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 ${
                      isDarkmode ? "border-gray-800" : "border-gray-300"
                    }`}
                  >
                    <img
                      src={ProfileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* decorative ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-emerald-500/20"
                  />
                </div>
              </motion.div>

              {/* subtitle */}
              <motion.div
                variants={textVariant}
                className={`text-sm uppercase tracking-widest ${
                  isDarkmode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Mern Stack Developer
              </motion.div>

              {/* headline */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span>{`Building digital`}</span>
                <span className="text-emerald-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span>{`that matter`}</span>
              </motion.h1>

              {/* description */}
              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkmode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkmode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-700 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Wahab-CV.pdf" // yaha apna CV ka path dena (public folder me rakho)
                  download
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* social links */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/waahaab01" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/wahabhussain01/",
                  },
                  { icon: Mail, href: "mailto:waahaab7233@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkmode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* desktop view */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* left */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariant}
                className={`text-sm uppercase tracking-widest ${
                  isDarkmode ? "text-gray-500 " : "text-gray-600"
                } mb-6`}
              >
                Mern Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span>{`Building digital`}</span>
                <br />
                <span className="text-emerald-500 font-medium">
                  experiences
                </span>
                <br />
                <span>{`that matter`}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${
                  isDarkmode ? "text-gray-400" : "text-gray-600"
                } mb-12 max-w-lg font-light leading-relaxed`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="flex mb-8 gap-6">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkmode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Wahab-CV.pdf" // yaha apna CV ka path dena (public folder me rakho)
                  download
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* social links */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/waahaab01" },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/wahabhussain01/",
                  },
                  { icon: Mail, href: "mailto:waahaab7233@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      isDarkmode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* right */}
            <motion.div
              variants={imageVariant}
              animate="visible"
              initial="hidden"
              className="flex justify-center lg:justify-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-110 h-130 mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 ${
                    isDarkmode ? "border-gray-800" : "border-gray-300"
                  }`}
                >
                  <img
                    src={ProfileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
