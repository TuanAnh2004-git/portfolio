import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const Skills = () => {
  const programmingLanguage = [
    { name: "HTML", value: 75 },
    { name: "Java Web", value: 85 },
    { name: "JavaScript", value: 60 },
    { name: "CSS", value: 70 },
  ];

  const tools = [
    { name: "GitHub", value: 90 },
    { name: "Visual Studio Code", value: 80 },
    { name: "NetBeans", value: 85 },
    { name: "MySQL", value: 70 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d2f36] text-white px-10 md:px-20 py-20 min-h-screen"
    >
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          Programming language and Tools
        </p>
        <h2 className="text-3xl font-bold text-cyan-400">My Skills</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Programming language */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <h3 className="text-xl font-bold mb-6">Programming language</h3>
          <div className="space-y-5">
            {programmingLanguage.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 rounded-full"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <h3 className="text-xl font-bold mb-6">Tools</h3>
          <div className="grid grid-cols-2 gap-6">
            {tools.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={skill.value}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      pathColor: "#06b6d4", // cyan-400
                      textColor: "#ffffff",
                      trailColor: "#1f1f1f",
                      textSize: "18px",
                    })}
                  />
                </div>
                <p className="text-sm mt-2 text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
