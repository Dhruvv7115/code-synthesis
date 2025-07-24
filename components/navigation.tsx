"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

interface NavigationProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
  isDarkMode,
  scrollToSection,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "TRACKS", id: "tracks" },
    { label: "TIMELINE", id: "timeline" },
    { label: "PRIZES", id: "prizes" },
    { label: "SPONSORS", id: "sponsors" },
    { label: "TEAM", id: "team" },
    { label: "FAQ", id: "faq" },
  ];

  const handleRegisterClick = () => {
    window.open(
      "https://unstop.com/hackathons/codesynthesis-merging-innovation-with-sustainable-impact-guru-tegh-bahadur-4th-centenary-engineering-college--1521757?lb=OJNob72h",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md border-b " : "bg-transparent"
      }`}
    >
      <div className="flex items-center  p-6 max-w-8xl mx-auto relative">
        {/* <div className="hidden lg:flex"></div> */}
        {/* Desktop Navigation - Centered */}
        <div
          className="hidden lg:flex flex-1 ml-28
 justify-end items-center space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`${
                isScrolled
                  ? "hover:text-green-300"
                  : isDarkMode
                  ? "hover:text-green-400"
                  : "hover:text-green-600"
              } ${
                isDarkMode ? "text-white" : "text-black"
              } transition-all duration-300 font-[Tropical] font-normal tracking-wider text-base relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 scale-x-0 bg-green-400 group-hover:scale-x-100 transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Register Now Button - Desktop */}
        <div className="hidden lg:flex flex-[0.4] mx-2 justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={"ghost"}
              onClick={handleRegisterClick}
              className="relative overflow-hidden bg-gray-100 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-2xl border-2 border-gray-400 hover:border-gray-500 cursor-pointer group"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <div className="relative flex items-center space-x-2">
                {/* <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" /> */}
                <span className="text-sm font-black tracking-wide">
                  REGISTER NOW
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden absolute right-6 w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled
                    ? "text-white"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled
                    ? "text-white"
                    : isDarkMode
                    ? "text-white"
                    : "text-black"
                }`}
              />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden ${
          isScrolled
            ? "bg-transparent backdrop-blur-md border-t border-transparent"
            : isDarkMode
            ? "bg-black/95 backdrop-blur-md border-t border-gray-800/50"
            : "bg-white/95 backdrop-blur-md border-t border-gray-200/50"
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`${
                isScrolled
                  ? "text-white hover:text-green-300"
                  : isDarkMode
                  ? "text-gray-300 hover:text-green-400"
                  : "text-gray-700 hover:text-green-600"
              } transition-colors font-bold tracking-wide text-left transform hover:translate-x-2 duration-300`}
            >
              {item.label}
            </motion.button>
          ))}

          {/* Mobile Register Button */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
            className="pt-4"
          >
            <Button
              onClick={handleRegisterClick}
              className="relative overflow-hidden w-full bg-gray-100 text-black   font-bold py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/30 border-2 border-gray-400 hover:border-gray-500 group"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <div className="relative flex items-center justify-center space-x-2">
                {/* <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" /> */}
                <span className="text-base font-black tracking-wide">
                  REGISTER NOW
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
