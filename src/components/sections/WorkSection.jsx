import { motion } from "framer-motion";
import { projects } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const ProjectsSection = () => {
  const { isDarkmode } = useTheme();

  return (
    <section
      id="work"
      className={`relative py-20 px-6 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background glowing circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`top-20 absolute right-20 w-72 h-72 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-emerald-500" : "bg-emerald-400"
          }`}
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className={`bottom-20 absolute left-20 w-60 h-60 rounded-full blur-3xl opacity-10 ${
            isDarkmode ? "bg-violet-500" : "bg-violet-400"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base md:text-lg ${
              isDarkmode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A showcase of my latest 3 projects where I combined creativity,
            performance, and functionality into production-ready applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative rounded-2xl overflow-hidden shadow-xl group transition-all duration-500 ${
                isDarkmode
                  ? "bg-gray-900 border border-gray-800"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Project Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold">{project.name}</h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkmode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
