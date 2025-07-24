"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  MessageSquare,
  Zap,
  Code,
  Lightbulb,
} from "lucide-react";

interface HeroSectionProps {
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
    animation: shine 2s ease-in-out infinite;
  }
`;

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection({ isDarkMode }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Mouse tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const mouseButtonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  };

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 overflow-hidden"
    >
      <style jsx>{shineKeyframes}</style>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10"
        style={{ scale: 0.9 }}
      >
        {/* Floating Icons */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute -top-10 -left-10 opacity-20"
        >
          <Code className="w-8 h-8 text-emerald-400" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute -top-5 -right-10 opacity-20"
          transition={{ delay: 1 }}
        >
          <Zap className="w-6 h-6 text-cyan-400" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 opacity-20"
          transition={{ delay: 2 }}
        >
          <Lightbulb className="w-7 h-7 text-green-400" />
        </motion.div>

        {/* Main Title */}
        <motion.div variants={itemVariants} className=" mb-16">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span
              className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent font-black"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              CODE SYNTHESIS
            </motion.span>
            <motion.span
              className="block md:inline md:ml-8 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent font-black"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              2025
            </motion.span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center space-x-6 mb-10"
            variants={itemVariants}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <motion.h2
              className={`text-xl md:text-2xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } font-light tracking-[0.4em] uppercase`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              9-HOUR HACKATHON
            </motion.h2>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-32"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } text-xl md:text-2xl mb-16 max-w-5xl mx-auto leading-relaxed font-light`}
        >
          Join us for an extraordinary journey of{" "}
          <span className="text-emerald-400 font-medium">coding</span>,{" "}
          <span className="text-cyan-400 font-medium">innovation</span>, and{" "}
          <span className="text-green-400 font-medium">creativity</span>
        </motion.p>

        {/* Event Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 mb-16"
        >
          {[
            { icon: Calendar, text: "Sep 27, 2025", color: "emerald" },
            { icon: Clock, text: "9 Hours", color: "cyan" },
            { icon: MapPin, text: "Delhi, India", color: "green" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-xl ${
                isDarkMode
                  ? "bg-white/10 border border-white/20"
                  : "bg-black/10 border border-black/20"
              } shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <item.icon className={`w-5 h-5 text-${item.color}-400`} />
              <span className="font-semibold text-lg">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Modern Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto"
        >
          {[
            {
              icon: Users,
              value: "5000+",
              label: "PARTICIPANTS",
              subtitle: "From across India",
              gradient: "from-emerald-500 to-teal-500",
              bgGradient: "from-emerald-500/10 to-teal-500/10",
            },
            {
              icon: Trophy,
              value: "₹3,00,000+",
              label: "PRIZEPOOL",
              subtitle: "+ Mentorship & Funding",
              gradient: "from-yellow-500 to-orange-500",
              bgGradient: "from-yellow-500/10 to-orange-500/10",
            },
            {
              icon: MessageSquare,
              value: "JOIN",
              label: "DISCORD",
              subtitle: "Connect with Teams",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-500/10 to-pink-500/10",
              clickable: true,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={
                card.clickable
                  ? () =>
                      window.open(
                        "https://discord.com/invite/NjESyTCdav",
                        "_blank"
                      )
                  : undefined
              }
              className={`relative px-8 py-6 rounded-3xl backdrop-blur-xl ${
                isDarkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-black/5 border border-black/10"
              } shadow-2xl hover:shadow-3xl transition-all duration-500 group ${
                card.clickable ? "cursor-pointer" : ""
              } overflow-hidden`}
            >
              {/* Continuous Shine Effect that stops on hover */}
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-shine" />
              </div>
              {/* Background color that shows on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              {/* Rest of the card content remains the same */}
              <div className="relative z-10 flex  items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <div className="text-left">
                    <div className="text-2xl font-black mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {card.value}
                    </div>
                    <div
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } text-xs uppercase tracking-wider font-bold`}
                    >
                      {card.label}
                    </div>
                    <div className="text-emerald-400 mt-2 text-sm font-medium text-right">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Transparent Mouse Button */}
      <motion.button
        variants={mouseButtonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        onClick={() => scrollToSection("about")}
        className={`hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group cursor-pointer`}
        style={{ transform: "translateX(-50%) scale(0.85)" }}
      >
        <div className={`relative flex flex-col items-center space-y-2`}>
          {/* Mouse Shape */}
          <div
            className={`
            w-8 h-12 rounded-full border-2 
            ${
              isDarkMode
                ? "border-emerald-400/60 bg-emerald-400/10"
                : "border-emerald-500/60 bg-emerald-500/10"
            } 
            backdrop-blur-sm shadow-lg
            group-hover:border-emerald-400 group-hover:bg-emerald-400/20
            transition-all duration-300
            flex items-start justify-center pt-2
          `}
          >
            {/* Scroll Wheel */}
            <motion.div
              variants={scrollIndicatorVariants}
              animate="animate"
              className={`
                w-1 h-2 rounded-full 
                ${isDarkMode ? "bg-emerald-400" : "bg-emerald-500"}
                group-hover:bg-emerald-300
                transition-colors duration-300
              `}
            />
          </div>

          {/* Scroll Text */}
          <motion.span
            className={`
              text-xs font-medium tracking-wider uppercase
              ${isDarkMode ? "text-emerald-400/80" : "text-emerald-600/80"}
              group-hover:text-emerald-400
              transition-colors duration-300
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Scroll
          </motion.span>
        </div>
      </motion.button>
    </section>
  );
}
