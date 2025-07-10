import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Ticket Booking System",
    description:
      "This system allows users to view movie schedules, book tickets, log in, and leave comments on movies.",
    roles: [
      "Designed and developed user login and registration functionality.",
      "Managed movie schedules and implemented movie comment section.",
    ],
  },
  {
    title: "Online Bookstore System",
    description:
      "An e-commerce platform where customers can view books, receive notifications, apply promotions, and place orders.",
    roles: [
      "Developed and maintained user notification and promotion features.",
      "Optimized user interface (UI) for an improved user experience.",
    ],
  },
  {
    title: "Bookstore Management Website",
    description:
      "An administration system that enables managers to handle books, orders, and reports.",
    roles: [
      "Designed and built the user-friendly book list interface.",
      "Implemented search functionality allowing keyword-based book lookup.",
    ],
  },
];

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d2f36] text-white px-10 md:px-20 py-20 min-h-screen"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          Experiences
        </p>
        <h2 className="text-3xl font-bold text-cyan-400">Portfolio</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1f1f27] p-6 rounded-xl shadow-md cursor-pointer transform-gpu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              rotate: 0.3,
              boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
              {project.roles.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
