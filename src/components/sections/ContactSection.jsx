import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTheme } from "../../context/ThemeContext";
import Modal from "../common/ContactModal";

const ContactSection = () => {
  const { isDarkmode } = useTheme();
  const form = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loader

    emailjs
      .sendForm(
        "service_e38ty2k",
        "template_norduil",
        form.current,
        "3AkeODsLOeYx3J3J1"
      )
      .then(
        () => {
          setLoading(false); // Stop loader
          setModalMessage(
            "Thank you for reaching out! I will get back to you soon."
          );
          setModalOpen(true);
          form.current.reset();
        },
        () => {
          setLoading(false); // Stop loader
          setModalMessage("Oops! Something went wrong. Please try again.");
          setModalOpen(true);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`relative py-16 px-6 transition-colors duration-500 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact{" "}
            <span
              className={`${
                isDarkmode ? "text-emerald-400" : "text-emerald-600"
              }`}
            >
              Me
            </span>
          </h2>
          <p
            className={`max-w-2xl mx-auto text-base md:text-lg ${
              isDarkmode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I’d love to hear from you! Whether you have a project in mind,
            questions, or just want to connect — feel free to reach out.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: (
                  <FaEnvelope
                    className={`${
                      isDarkmode ? "text-emerald-400" : "text-emerald-600"
                    } text-xl`}
                  />
                ),
                title: "Email",
                detail: "waahaab7233@gmail.com",
              },
              {
                icon: (
                  <FaPhoneAlt
                    className={`${
                      isDarkmode ? "text-emerald-400" : "text-emerald-600"
                    } text-xl`}
                  />
                ),
                title: "Phone",
                detail: "+92 301 0146619",
              },
              {
                icon: (
                  <FaMapMarkerAlt
                    className={`${
                      isDarkmode ? "text-emerald-400" : "text-emerald-600"
                    } text-xl`}
                  />
                ),
                title: "Location",
                detail: "Lahore, Pakistan",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-5 rounded-xl shadow-md transition hover:shadow-lg ${
                  isDarkmode
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`p-3 rounded-full ${
                    isDarkmode ? "bg-emerald-900/40" : "bg-emerald-100"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl shadow-md space-y-5 ${
              isDarkmode
                ? "bg-gray-900 border border-gray-800"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                isDarkmode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-emerald-500"
                  : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-emerald-500"
              }`}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                isDarkmode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-emerald-500"
                  : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-emerald-500"
              }`}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 ${
                isDarkmode
                  ? "bg-gray-800 border-gray-700 text-white focus:ring-emerald-500"
                  : "bg-gray-100 border-gray-300 text-gray-900 focus:ring-emerald-500"
              }`}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-emerald-600 transition ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading && (
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                ></motion.div>
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </section>
  );
};

export default ContactSection;
