import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ContactModal = ({ isOpen, onClose, message }) => {
  const { isDarkmode } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full max-w-md rounded-xl p-6 sm:p-8 text-center shadow-2xl relative border ${
          isDarkmode
            ? "bg-gray-900 border-gray-800 text-white"
            : "bg-white border-gray-200 text-gray-900"
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-4 ${
            isDarkmode ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          {message.includes("Oops") ? "⚠️ Error" : "✅ Message Sent"}
        </h2>
        <p
          className={`text-sm sm:text-base ${
            isDarkmode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-emerald-500 text-white rounded-lg font-semibold shadow-md hover:bg-emerald-600 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ContactModal;
