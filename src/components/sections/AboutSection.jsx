import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaComments,
  FaPuzzlePiece,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.04, boxShadow: "0px 6px 18px rgba(0,0,0,0.15)" },
};

const AboutSection = () => {
  const { isDarkmode } = useTheme();

  const cardStyle = `relative p-6 rounded-xl shadow-md backdrop-blur-md transition 
    border hover:-translate-y-1
    ${
      isDarkmode
        ? "bg-gray-900/50 border-gray-800 text-gray-200"
        : "bg-white/70 border-gray-200 text-gray-800"
    }`;

  return (
    <section
      id="about"
      className={`relative py-12 px-6 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* background glowing circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className={`top-40 absolute right-40 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
          }`}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className={`bottom-40 absolute left-40 w-56 h-56 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          About{" "}
          <span
            className={`${
              isDarkmode ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Me
          </span>
        </motion.h2>

        {/* Objective Highlight */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className={`${cardStyle} mb-10`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md">
              <FaLightbulb />
            </span>
            <h3 className="text-xl font-semibold text-emerald-500">
              Objective
            </h3>
          </div>
          <p className="leading-relaxed text-base md:text-lg text-gray-600 dark:text-gray-300">
            I am a passionate and ambitious software developer with a strong
            focus on{" "}
            <span className="text-emerald-500 font-medium">
              MERN Stack Development
            </span>
            . My goal is to build scalable, efficient, and innovative digital
            solutions while growing into a{" "}
            <span className="font-medium">Full-Stack & Blockchain Developer</span>.
          </p>
        </motion.div>

        {/* Grid Layout for 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Info */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md">
                <FaUser />
              </span>
              <h3 className="text-xl font-semibold text-emerald-500">
                Personal Info
              </h3>
            </div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2">
                <FaUser className="text-gray-400" /> Muhammad Wahab Hussain
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" /> Lahore, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" /> waahaab7233@gmail.com
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md">
                <FaGraduationCap />
              </span>
              <h3 className="text-xl font-semibold text-emerald-500">
                Education
              </h3>
            </div>
            <p className="leading-relaxed text-base md:text-lg text-gray-600 dark:text-gray-300">
              Pursuing{" "}
              <span className="text-emerald-500 font-medium">
                BSCS (2021 – 2025)
              </span>{" "}
              at Lahore Garrison University, achieving a{" "}
              <span className="font-medium">3.3 CGPA</span>. Honored by the Vice
              Chancellor for making it to the{" "}
              <span className="text-emerald-500 font-medium">SGAP List</span>.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md">
                <FaCode />
              </span>
              <h3 className="text-xl font-semibold text-emerald-500">
                Technical Skills
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-base">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>REST APIs</li>
              <li>Full-Stack Development</li>
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className={cardStyle}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md">
                <FaUsers />
              </span>
              <h3 className="text-xl font-semibold text-emerald-500">
                Soft Skills
              </h3>
            </div>
            <ul className="space-y-2 text-base">
              <li className="flex items-center gap-2">
                <FaPuzzlePiece className="text-gray-400" /> Problem-Solving
              </li>
              <li className="flex items-center gap-2">
                <FaUsers className="text-gray-400" /> Teamwork & Collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaComments className="text-gray-400" /> Communication
              </li>
              <li className="flex items-center gap-2">
                <FaLightbulb className="text-gray-400" /> Adaptability
              </li>
              <li className="flex items-center gap-2">
                <FaUser className="text-gray-400" /> Creativity
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
