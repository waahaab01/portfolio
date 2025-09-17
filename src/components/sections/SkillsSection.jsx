import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { skills } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkmode } = useTheme();

  return (
    <section
      id="skills"
      className={`relative min-h-screen py-12 px-6 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Subtle background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className={`top-32 absolute right-32 w-56 h-56 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
          }`}
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], rotate: [360, 180, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className={`bottom-32 absolute left-32 w-44 h-44 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-violet-500" : "bg-violet-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          My{" "}
          <span
            className={`${
              isDarkmode ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Skills
          </span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow: isDarkmode
                  ? "0px 0px 25px rgba(16,185,129,0.3)"
                  : "0px 0px 20px rgba(16,185,129,0.25)",
              }}
              className={`flex flex-col items-center justify-center rounded-xl p-5 transition 
                backdrop-blur-md border shadow-md
                ${
                  isDarkmode
                    ? "bg-gray-900/50 border-gray-700"
                    : "bg-white/60 border-gray-200"
                }`}
            >
              <div className="w-14 h-14 mb-3 flex items-center justify-center">
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-12 h-12 object-contain transition ${
                    isDarkmode ? "filter brightness-125" : ""
                  }`}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                />
              </div>
              <p
                className={`text-sm font-medium ${
                  isDarkmode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
