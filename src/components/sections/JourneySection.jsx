import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { experiences } from "../../utils/data";

const JourneySection = () => {
  const { isDarkmode } = useTheme();

  return (
    <section
      id="journey"
      className={`relative py-12 px-6 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          My{" "}
          <span
            className={`${
              isDarkmode ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Developer Journey
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div
            className={`absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 ${
              isDarkmode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>

          {/* Experiences */}
          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <span
                  className={`absolute left-1/2 w-5 h-5 -translate-x-1/2 rounded-full border-4 z-10 ${
                    isDarkmode
                      ? "bg-emerald-500 border-gray-950"
                      : "bg-emerald-500 border-gray-50"
                  }`}
                ></span>

                {/* Connector Line */}
                <span
                  className={`absolute top-1/2 h-1 ${
                    index % 2 === 0
                      ? "right-[calc(50%-10px)] md:right-[calc(50%-20px)]"
                      : "left-[calc(50%-10px)] md:left-[calc(50%-20px)]"
                  } w-[40px] md:w-[60px] ${
                    isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
                  } -translate-y-1/2`}
                ></span>

                {/* Card */}
                <div
                  className={`relative z-20 w-full md:w-1/2 p-6 rounded-xl shadow-md backdrop-blur-md transition
                    ${
                      isDarkmode
                        ? "bg-gray-900/70 border border-gray-800"
                        : "bg-white/70 border border-gray-200"
                    }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      isDarkmode ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className={`text-sm italic ${
                      isDarkmode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.place}
                  </p>
                  <p
                    className={`text-sm ${
                      isDarkmode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {exp.duration}
                  </p>
                  <p className="mt-3 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
