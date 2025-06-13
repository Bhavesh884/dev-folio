import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post("/api/contact", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto pb-12 px-4 md:px-8 lg:px-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        id="GetInTouchSection"
        data-aos="fade-up"
        className="bg-AAtertiary rounded-xl px-6 py-10 shadow-lg max-w-6xl w-full mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-AAsecondary mb-10 text-center"
        >
          Get In Touch
        </motion.h2>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg"
          >
            ✅ Thank you for your message! I’ll get back to you soon.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg"
          >
            ❌ Oops! Something went wrong. Please try again later.
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-AAprimary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-AAsecondary text-gray-200"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-AAprimary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-AAsecondary text-gray-200"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-AAprimary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-AAsecondary text-gray-200"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-AAprimary border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-AAsecondary text-gray-200"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="px-8 py-3 bg-AAsecondary text-gray-900 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden"
            >
              {isSubmitting && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="absolute bottom-0 left-0 h-1 bg-green-400"
                />
              )}
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
