"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  MessageSquare,
} from "lucide-react";
import "../styles/globals.css";

interface HeroSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
}

export default function HeroSection({
  isDarkMode,
  cardClasses,
}: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-8xl  font-medium mb-6 tracking-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r font-[Tropical] from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
              CODE SYNTHESIS
            </span>
            <span className="block md:inline md:ml-6 bg-gradient-to-r text-transparent bg-clip-text from-green-400 via-emerald-400 to-lime-400">
              2025
            </span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            variants={itemVariants}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-20"></div>
            <h2
              className={`text-lg md:text-xl ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } font-light tracking-[0.3em] uppercase`}
            >
              12-HOUR HACKATHON
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-20"></div>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className={`${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed`}
        >
          Join us for an extraordinary journey of coding, innovation, and
          creativity
        </motion.p>

        {/* Event Details */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-3 ${cardClasses} px-4 py-2 rounded-full border shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
          >
            <Calendar className="w-4 h-4 text-green-400" />
            <span className="font-bold text-sm">Sep 27, 2025</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-3 ${cardClasses} px-4 py-2 rounded-full border shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
          >
            <Clock className="w-4 h-4 text-green-400" />
            <span className="font-bold text-sm">12 Hours</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`flex items-center space-x-3 ${cardClasses} px-4 py-2 rounded-full border shadow-lg hover:shadow-green-500/10 transition-all duration-300`}
          >
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="font-bold text-sm">Delhi, India</span>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className={`${cardClasses} border rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="text-xl font-black mb-1">5000+</div>
              <div
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-xs uppercase tracking-wider font-bold`}
              >
                PARTICIPANTS
              </div>
              <div className="text-green-400 text-xs mt-1 font-medium">
                From across India
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className={`${cardClasses} border rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Trophy className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="text-xl font-black mb-1">₹3,00,000+</div>
              <div
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-xs uppercase tracking-wider font-bold`}
              >
                IN PRIZES
              </div>
              <div className="text-green-400 text-xs mt-1 font-medium">
                + Mentorship & Funding
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            onClick={() =>
              window.open("https://discord.com/invite/NjESyTCdav", "_blank")
            }
            className={`${cardClasses} border rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden cursor-pointer`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MessageSquare className="w-5 h-5 text-black" />
                </div>
              </div>
              <div className="text-xl font-black mb-1">JOIN</div>
              <div
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } text-xs uppercase tracking-wider font-bold`}
              >
                DISCORD
              </div>
              <div className="text-green-400 text-xs mt-1 font-medium">
                Connect with Teams
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() =>
                window.open("https://discord.com/invite/NjESyTCdav", "_blank")
              }
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-black px-16 py-6 text-xl rounded-full transition-all duration-300 shadow-2xl hover:shadow-green-500/25 border-0"
            >
              DIVE IN
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
