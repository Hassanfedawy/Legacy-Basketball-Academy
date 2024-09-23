"use client"
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false }); // 'once: false' allows the animation to trigger multiple times

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div id='AboutUs' className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial="hidden"
        animate={"visible"}
        variants={fadeIn}
        transition={{ duration:0.5 }}
        ref={ref}
      >
        About Us
      </motion.h1>

      {/* Mission Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        animate={"visible"}
        variants={fadeIn}
        transition={{ duration:0.5}}
        ref={ref}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <motion.p
          className="text-gray-700"
          initial="hidden"
          animate={"visible" }
          variants={scaleUp}
          transition={{ duration:0.5 }}
        >
          At our academy, we are dedicated to fostering a love for fitness and basketball in individuals of all ages. Our mission is to empower athletes through comprehensive training programs, instill teamwork values, and promote a healthy lifestyle. We believe that everyone has the potential to excel, and we are here to guide them on their journey.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-700"
          initial="hidden"
          animate={ "visible" }
          variants={scaleUp}
          transition={{ duration:0.5 }}
        >
          Whether you're looking to improve your skills, build strength, or just have fun, our supportive environment is designed to help you thrive. We strive to create a community where every member feels valued and motivated to reach their goals.
        </motion.p>
      </motion.section>

      {/* Founders' Story Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        animate={ inView ? "visible" : "hidden" }
        variants={fadeIn}
        transition={{ duration:0.5 }}
        ref={ref}
      >
        <h2 className="text-2xl font-semibold mb-4">Founders' Story</h2>
        <motion.p
          className="text-gray-700"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ duration:0.5 }}
        >
          Founded by Hamza and Atef, our academy combines years of expertise in fitness and basketball coaching. Both founders have a passion for sports and have dedicated their lives to helping individuals achieve their athletic potential. With their vision, the academy aims to create an inclusive environment where everyone can thrive.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-700"
          initial="hidden"
          animate={ inView ? "visible" : "hidden" }
          variants={scaleUp}
          transition={{ duration:0.5 }}
        >
          Atef's background in competitive basketball and Hamza's experience in personal training come together to provide a unique approach to athlete development. Their journey began with a shared dream to inspire the next generation of athletes and foster a love for sports in the community.
        </motion.p>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration:0.5 }}
        ref={ref}
      >
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <motion.ul
          className="list-disc list-inside text-gray-700 mb-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration:0.5}}
        >
          <motion.li variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration:0.5}}>🏅 Certified and experienced trainers committed to your success</motion.li>
          <motion.li variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration:0.5 }}>🏀 Comprehensive training programs tailored to all skill levels</motion.li>
          <motion.li variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration:0.5}}>🤝 A supportive community focused on teamwork and personal growth</motion.li>
          <motion.li variants={fadeIn} initial="hidden" animate={inView ? "visible" : "hidden"} transition={{ duration:0.5 }}>🎉 Regular events and competitions to showcase skills and celebrate achievements</motion.li>
        </motion.ul>
        <motion.p
          className="text-gray-700"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={scaleUp}
          transition={{ duration:0.5 }}
        >
          We believe that the journey to excellence is as important as the destination. Join us at our academy and become part of a family that celebrates every milestone along the way.
        </motion.p>
      </motion.section>
    </div>
  );
};

export default AboutPage;
