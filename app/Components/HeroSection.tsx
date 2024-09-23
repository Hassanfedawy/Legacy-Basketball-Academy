"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function HeroSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="Home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Videos/IMG_5052.MOV"
        autoPlay
        loop
        muted
      />

      {/* Dark overlay to make text stand out */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Train Like a Champion
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-secondary-text"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Achieve your fitness goals and dominate the court!
        </motion.p>

        <motion.div
          className="mt-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#Home"
            className="bg-button-bg text-black py-3 px-6 rounded-md shadow-md hover:bg-button-hover transition duration-300"
          >
            Join Now
          </Link>
          <Link
            href="#Programs"
            className="ml-4 bg-transparent border border-white py-3 px-6 rounded-md hover:bg-white hover:text-black transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
