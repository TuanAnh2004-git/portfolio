import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_37mvmai", "template_8p8bm7l", form, "U1D0Ob8CFQneXWi5C")
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", address: "", phone: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#2d2f36] text-white min-h-screen px-10 md:px-20 py-20"
    >
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400 tracking-widest uppercase">
          Ask me question
        </p>
        <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-4"
      >
        {["name", "email", "address", "phone"].map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={`Your ${
              field.charAt(0).toUpperCase() + field.slice(1)
            }`}
            value={form[field]}
            onChange={handleChange}
            required={field === "name" || field === "email"}
            className="bg-[#1f0127] px-4 py-3 rounded text-white focus:outline-none 
                       focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                       transition duration-300"
          />
        ))}

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
          className="bg-[#1f0127] px-4 py-3 rounded text-white focus:outline-none 
                     focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
                     transition duration-300"
        ></textarea>

        <button
          type="submit"
          className="bg-cyan-400 text-black font-semibold px-6 py-3 mt-4 rounded 
                     hover:brightness-110 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
