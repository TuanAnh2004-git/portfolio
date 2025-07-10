import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "User Experience Research and Design",
    date: "July 10, 2025",
    university: "University of Michigan - Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/K0LIKJRVICY5",
  },
  {
    title: "Software Development Lifecycle",
    date: "February 8, 2025",
    university: "University of Minnesota - Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ICCJRW2ZP9PB",
  },
  {
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    date: "September 25, 2024",
    university: "University of Michigan - Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/PC1Y9OXLAQML",
  },
  {
    title: "Academic Skills for University Success",
    date: "May 2, 2024",
    university: "University of Sydney - Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/K5MT4L4R7VRV",
  },
];

function Certificates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d2f36] text-white px-10 md:px-20 py-20 min-h-screen"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          My Achievements
        </p>
        <h2 className="text-3xl font-bold text-cyan-400">Certificates</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
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
              {cert.title}
            </h3>
            <p className="text-sm text-gray-300 mb-1">{cert.university}</p>
            <p className="text-sm text-gray-400 mb-3">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-400 text-black font-medium px-4 py-2 rounded hover:brightness-110 transition no-underline"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Certificates;
