import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center gap-x-8 px-10 md:px-16 py-10"
    >
      {/* LEFT */}
      <div className="max-w-xl space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          Hi! I'm <span className="text-white">Nguyen Tuan Anh</span>
        </h2>
        <h3 className="text-2xl text-cyan-400 font-semibold">
          And I'm Frontend Developer
        </h3>
        <p className="text-gray-300">
          Software Engineering student majoring in React-based Frontend
          Development. I enjoy building modern web interfaces and delivering
          great user experiences.
        </p>
        <div className="space-y-1 text-sm">
          <p>
            <strong>Email:</strong> tuananh.dev2004@gmail.com
          </p>
          <p>
            <strong>Github:</strong>{" "}
            <a
              href="https://github.com/TuanAnh2004-git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://github.com/TuanAnh2004-git
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="px-5 py-2 border border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-black">
            Download CV
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-5 py-2 border border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-black"
          >
            Hire Me Now!
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
        <div
          className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden 
          bg-cyan-500 flex items-center justify-center shadow-xl 
          transform transition-transform duration-500 ease-in-out 
          hover:scale-105 hover:shadow-cyan-400/50"
        >
          <img
            src="images/avatar.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
