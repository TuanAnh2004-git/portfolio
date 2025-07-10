import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d2f36] text-white min-h-screen flex items-center justify-center px-4 md:px-0"
    >
      <div className="max-w-2xl w-full">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-2">
          Let me introduce myself
        </p>
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">About Me</h2>
        <h3 className="text-lg font-semibold mb-4">A story of good</h3>
        <p className="text-gray-300 leading-relaxed">
          Hello, my full name is Nguyen Tuan Anh, currently a 3rd year student
          majoring in Software Engineering at FPT University. I am studying a
          narrow major in Frontend with the main technology being React, and
          have a solid foundation in HTML, CSS and JavaScript.
        </p>

        {/* Hiệu ứng mở rộng */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                Career Objective
              </h4>
              <p className="text-gray-300 leading-relaxed">
                At present, I aim to build a strong foundation in Frontend
                development, especially improving my skills in ReactJS,
                optimizing user interfaces (UI/UX), and working efficiently with
                APIs. In the long term, I intend to become a Full-stack
                Developer by actively learning Backend technologies such as
                Node.js, as well as gaining knowledge of databases like MySQL to
                complete my overall programming skill set.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-5 py-2 border border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-black transition"
        >
          {showMore ? "Show Less" : "Read More!"}
        </button>
      </div>
    </motion.div>
  );
};

export default About;
