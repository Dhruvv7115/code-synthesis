"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Users } from "lucide-react";

interface BroughtToYouSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function BroughtToYouSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: BroughtToYouSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
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
    <section
      className={`relative py-16 px-6 md:px-12 ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"
      }`}
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            BROUGHT TO YOU <span className={accentColor}>BY</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } text-lg max-w-2xl mx-auto`}
          >
            Meet the team behind Code Synthesis
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-12 items-center justify-center">
          {/* Hosted By */}
          {/* <motion.div
            variants={itemVariants}
            className="text-center lg:text-right"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-wider">
                HOSTED <span className={accentColor}>BY</span>
              </h3>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${cardClasses} border rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Building className="w-8 h-8 text-black" />
                  </div>

                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg">
                    <img
                      src="/images/college-building.png"
                      alt="College Building"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h4 className="text-xl font-black mb-3 tracking-wide">
                    GURU TEGH BAHADUR 4TH CENTENARY
                    <br />
                    <span className={accentColor}>ENGINEERING COLLEGE</span>
                  </h4>

                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } text-sm leading-relaxed`}
                  >
                    A premier institution fostering innovation and excellence in
                    engineering education, committed to nurturing the next
                    generation of tech leaders.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div> */}

          {/* Organized By */}
          <motion.div
            variants={itemVariants}
            className="text-center flex-1 lg:flex-[0.6] lg:text-left"
          >
            <div className="mb-8">
              {/* <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-wider">
                ORGANIZED <span className={accentColor}>BY</span>
              </h3> */}

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${cardClasses}  border rounded-3xl p-8 shadow-2xl hover:shadow-green-500/10 transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="w-8 h-8 text-black" />
                  </div> */}

                  <div className="aspect-video rounded-2xl overflow-hidden mb-6 shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center flex  items-center justify-center ">
                      <img
                        src="/images/organizer.jpg"
                        alt="Code Geeks Logo"
                        className=" object-contain"
                      />
                    </div>
                  </div>

                  <h4 className="text-xl font-black mb-3 tracking-wide">
                    CODE <span className={accentColor}>GEEKS</span>
                    <br />
                    TEAM
                  </h4>

                  {/* <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } text-sm leading-relaxed`}
                  >
                    A passionate team dedicated to fostering tech innovation and
                    creating meaningful experiences for the developer community.
                  </p> */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
