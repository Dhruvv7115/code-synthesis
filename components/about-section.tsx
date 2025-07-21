"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Globe, Users } from "lucide-react";

interface AboutSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function AboutSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-12" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            ABOUT <span className={accentColor}>CODE SYNTHESIS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            CodeSynthesis🌱 is the flagship hackathon by CodeGeeks, the official
            coding society of GTB4CEC. Focused on the theme of Sustainability,
            it challenges innovators and developers to craft tech-driven
            solutions for a greener, smarter world. From combating climate
            change to designing eco-friendly systems, CodeSynthesis is where
            ambitious ideas spark real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`${cardClasses} border rounded-2xl p-6 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Lightbulb className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black mb-3">INNOVATION</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed text-sm`}
              >
                Push the boundaries of technology to solve environmental
                challenges with creative, cutting-edge solutions that can change
                the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`${cardClasses} border rounded-2xl p-6 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black mb-3">IMPACT</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed text-sm`}
              >
                Create solutions with real-world applications that contribute to
                sustainable development and environmental conservation.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            className={`${cardClasses} border rounded-2xl p-6 transition-all duration-300 group hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black mb-3">COMMUNITY</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed text-sm`}
              >
                Connect with like-minded innovators, sustainability experts, and
                industry leaders in our thriving ecosystem.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className={`text-center ${cardClasses} border rounded-3xl p-8 shadow-2xl`}
        >
          <h3 className="text-2xl font-black mb-4">OUR MISSION</h3>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-base leading-relaxed max-w-4xl mx-auto`}
          >
            "To empower the next generation of developers and innovators to
            create technology solutions that combat climate change and promote
            sustainability. We believe that code can be a catalyst for positive
            environmental change, and through CodeSynthesis, we're building a
            community where ambitious ideas spark real-world impact for a
            greener, smarter world."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
