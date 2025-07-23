"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sun, Recycle, Droplets, Wind, Globe, Leaf } from "lucide-react";

interface TracksSectionProps {
  isDarkMode: boolean;
}

const shineKeyframes = `
  @keyframes shine {
    0% {
      transform: translateX(-100%) skewX(-12deg);
    }
    100% {
      transform: translateX(200%) skewX(-12deg);
    }
  }
  .animate-shine {
    animation: shine 2.5s ease-in-out infinite;
  }
  .animate-shine-delayed-1 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 0.4s;
  }
  .animate-shine-delayed-2 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 0.8s;
  }
  .animate-shine-delayed-3 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 1.2s;
  }
  .animate-shine-delayed-4 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 1.6s;
  }
  .animate-shine-delayed-5 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 2s;
  }
  .animate-shine-delayed-6 {
    animation: shine 2.5s ease-in-out infinite;
    animation-delay: 2.4s;
  }
`;

export default function TracksSection({ isDarkMode }: TracksSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const tracks = [
    {
      icon: Globe,
      title: "Duality AI Space Station",
      description: "Sponsored track for space-tech sustainability solutions",
      color: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      sponsored: true,
      shineClass: "animate-shine-delayed-6",
    },
    {
      icon: Sun,
      title: "AI & ML for Sustainability",
      description:
        "Harness artificial intelligence to solve environmental challenges",
      color: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      shineClass: "animate-shine",
    },
    {
      icon: Recycle,
      title: "Web3 & Blockchain for Better World",
      description: "Build decentralized solutions for sustainable development",
      color: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      shineClass: "animate-shine-delayed-1",
    },
    {
      icon: Droplets,
      title: "Cybersecurity in Green World",
      description: "Secure sustainable technologies and green infrastructure",
      color: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      shineClass: "animate-shine-delayed-2",
    },
    {
      icon: Wind,
      title: "IoT for Environmental Monitoring",
      description: "Create smart sensors for real-time environmental data",
      color: "from-teal-400 to-green-500",
      bgGradient: "from-teal-500/10 to-green-500/10",
      shineClass: "animate-shine-delayed-3",
    },
    {
      icon: Globe,
      title: "Game Development for Awareness",
      description: "Engage users through interactive environmental games",
      color: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      shineClass: "animate-shine-delayed-4",
    },
    {
      icon: Leaf,
      title: "Open Innovation",
      description: "Creative solutions beyond traditional categories",
      color: "from-lime-400 to-green-500",
      bgGradient: "from-lime-500/10 to-green-500/10",
      shineClass: "animate-shine-delayed-5",
    },
  ];

  return (
    <section
      id="tracks"
      className={`relative py-32 px-6 md:px-12 overflow-hidden ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"
      }`}
      ref={ref}
    >
      <style jsx>{shineKeyframes}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-green-400/8 to-emerald-400/8 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content Container with Scale Applied */}
      <div className="transform scale-80 origin-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div className="flex items-center justify-center mb-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">
                CHALLENGE <span className=" text-green-400">TRACKS</span>
              </h2>
            </motion.div>
            <motion.div
              className="h-1 w-40 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 mx-auto mb-12 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <motion.p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed font-light`}
              variants={itemVariants}
            >
              Choose your{" "}
              <span className="text-emerald-400 font-medium">battlefield</span>.
              Seven exciting tracks, each focusing on different aspects of{" "}
              <span className="text-green-400 font-medium">
                sustainable development
              </span>{" "}
              and green technology.
            </motion.p>
          </motion.div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative px-6 py-5 rounded-3xl backdrop-blur-xl ${
                  isDarkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-black/5 border border-black/10"
                } shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden ${
                  track.sponsored ? "ring-2 ring-yellow-400/50" : ""
                }`}
              >
                {/* Continuous Shine Effect */}
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -skew-x-12 ${track.shineClass}`}
                  />
                </div>
                {/* Background color on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${track.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                {/* Sponsored Badge */}
                {track.sponsored && (
                  <div className="absolute bottom-3 right-3 z-20">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      SPONSORED
                    </motion.div>
                  </div>
                )}
                {/* Card Content - Horizontal Layout */}
                <div className="relative z-10 flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${track.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <track.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {track.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      } leading-relaxed text-sm font-light line-clamp-2`}
                    >
                      {track.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
