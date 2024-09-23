"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function QuickInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              emoji: "🏋️‍♂️",
              title: "Fitness Programs",
              description: "Tailored fitness plans for all levels, designed to build strength, endurance, and confidence.",
            },
            {
              emoji: "🏀",
              title: "Basketball Training",
              description: "Elite basketball coaching with skills training, drills, and team play for all ages.",
            },
            {
              emoji: "🏅",
              title: "Certified Trainers",
              description: "Expert coaches with years of experience in fitness and sports performance.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-500 cursor-pointer"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={index % 2 === 0 ? rotateIn : fadeIn}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default QuickInfo;
