"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Globe, Users, Sparkles, Target, Heart } from "lucide-react";

interface AboutSectionProps {
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
    animation: shine 3s ease-in-out infinite;
  }
  .animate-shine-delayed {
    animation: shine 3s ease-in-out infinite;
    animation-delay: 1s;
  }
  .animate-shine-delayed-2 {
    animation: shine 3s ease-in-out infinite;
    animation-delay: 2s;
  }
`;

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cards = [
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description:
        "Push the boundaries of technology to solve environmental challenges with creative, cutting-edge solutions that can change the world.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      shadowColor: "emerald-500/20",
      shineClass: "animate-shine",
    },
    {
      icon: Globe,
      title: "IMPACT",
      description:
        "Create solutions with real-world applications that contribute to sustainable development and environmental conservation.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      shadowColor: "blue-500/20",
      shineClass: "animate-shine-delayed",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description:
        "Connect with like-minded innovators, sustainability experts, and industry leaders in our thriving ecosystem.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      shadowColor: "purple-500/20",
      shineClass: "animate-shine-delayed-2",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      ref={ref}
    >
      <style jsx>{shineKeyframes}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -left-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-24">
          <motion.div className="flex items-center justify-center mb-6">
            {/* <Sparkles className="w-8 h-8 text-emerald-400 mr-4" /> */}
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              ABOUT{" "}
              <span className="text-green-400 bg-clip-text ">
                CODE SYNTHESIS
              </span>
            </h2>
            {/* <Sparkles className="w-8 h-8 text-emerald-400 ml-4" /> */}
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
            <span className="text-emerald-400 font-medium">
              CodeSynthesis🌱
            </span>{" "}
            is the flagship hackathon by{" "}
            <span className="text-cyan-400 font-medium">CodeGeeks</span>, the
            official coding society of GTB4CEC. Focused on the theme of{" "}
            <span className="text-green-400 font-medium">Sustainability</span>,
            it challenges innovators and developers to craft tech-driven
            solutions for a greener, smarter world.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -15 }}
              className={`relative px-6 py-7 rounded-3xl backdrop-blur-xl ${
                isDarkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-black/5 border border-black/10"
              } shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden`}
            >
              {/* Continuous Shine Effect */}
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent transform -skew-x-12 ${card.shineClass}`}
                />
              </div>

              {/* Background color on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative z-10 text-center">
                <motion.div
                  className="flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {card.title}
                </h3>

                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed text-sm font-light`}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className={`relative text-center px-8 py-12 rounded-3xl backdrop-blur-xl ${
            isDarkMode
              ? "bg-white/5 border border-white/10"
              : "bg-black/5 border border-black/10"
          } shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden`}
        >
          {/* Continuous Shine Effect for Mission Card */}
          <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine" />
          </div>

          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              {/* <Target className="w-6 h-6 text-emerald-400 mr-4" /> */}
              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r text-white bg-clip-text text-transparent">
                OUR MISSION
              </h3>
              {/* <Heart className="w-6 h-6 text-pink-400 ml-4" /> */}
            </div>

            <p
              className={`${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } text-base md:text-lg leading-relaxed max-w-5xl mx-auto font-light`}
            >
              "To empower the next generation of{" "}
              <span className="text-emerald-400 font-medium">developers</span>{" "}
              and <span className="text-cyan-400 font-medium">innovators</span>{" "}
              to create technology solutions that combat climate change and
              promote sustainability. We believe that{" "}
              <span className="text-green-400 font-medium">
                code can be a catalyst
              </span>{" "}
              for positive environmental change, and through CodeSynthesis,
              we're building a community where ambitious ideas spark real-world
              impact for a greener, smarter world."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
