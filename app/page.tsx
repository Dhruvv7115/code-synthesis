"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import "../styles/globals.css";

// Import all components
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BroughtToYouSection from "@/components/brought-to-you-section";
import TracksSection from "@/components/tracks-section";
import TimelineSection from "@/components/timeline-section";
import MentorsSection from "@/components/mentors-section";
import PrizesSection from "@/components/prizes-section";
import SponsorsSection from "@/components/sponsors-section";
import TeamSection from "@/components/team-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import LazySection from "@/components/lazy-section";

export default function CodeSynthesis() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const themeClasses = isDarkMode
    ? "bg-black text-white"
    : "bg-white text-black";
  const cardClasses = isDarkMode
    ? "bg-gray-900/80 border-gray-700/50 text-white"
    : "bg-white/80 border-gray-200 text-black shadow-lg";
  const accentColor = isDarkMode ? "text-green-400" : "text-green-600";

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div
          className={`min-h-screen ${themeClasses} relative overflow-hidden transition-colors duration-300`}
        >
          {/* Professional Grid & Lightning Background */}
          {/* Enhanced animated background grid */}
          <div
            className={`fixed inset-0 ${
              isDarkMode
                ? "bg-[linear-gradient(rgba(0,255,127,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.08)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)]"
            } bg-[size:40px_40px] animate-pulse`}
          ></div>

          {/* Enhanced floating lights */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-10 w-48 h-48 bg-gradient-radial from-green-400/30 via-green-400/16 to-transparent rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-radial from-emerald-300/24 via-emerald-300/12 to-transparent rounded-full"
            ></motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-radial from-lime-400/36 via-lime-400/18 to-transparent rounded-full"
            ></motion.div>

            {/* Additional animated lights */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 right-1/4 w-56 h-56 bg-gradient-radial from-cyan-400/20 via-cyan-400/10 to-transparent rounded-full"
            ></motion.div>
          </div>
          {/* Navigation */}
          <Navigation
            isDarkMode={isDarkMode}
            scrollToSection={scrollToSection}
          />

          {/* Hero Section */}
          <HeroSection isDarkMode={isDarkMode} cardClasses={cardClasses} />

          {/* About Section with Lazy Loading */}
          <LazySection>
            <AboutSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Brought to You By Section */}
          <LazySection delay={0.1}>
            <BroughtToYouSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Tracks Section with Lazy Loading */}
          <LazySection delay={0.2}>
            <TracksSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Timeline Section with Lazy Loading */}
          <LazySection delay={0.1}>
            <TimelineSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Mentors Section with Lazy Loading */}
          <LazySection delay={0.1}>
            <MentorsSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Prizes Section with Lazy Loading */}
          <LazySection delay={0.3}>
            <PrizesSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Sponsors Section with Lazy Loading */}
          <LazySection delay={0.2}>
            <SponsorsSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Team Section with Lazy Loading */}
          <LazySection delay={0.2}>
            <TeamSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* FAQ Section with Lazy Loading */}
          <LazySection delay={0.1}>
            <FAQSection
              isDarkMode={isDarkMode}
              cardClasses={cardClasses}
              accentColor={accentColor}
            />
          </LazySection>

          {/* Footer with Lazy Loading */}
          <LazySection>
            <Footer isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
          </LazySection>

          {/* Theme Toggle Button - Bottom Right */}
          <div className="fixed bottom-8 right-8 z-50">
            <Button
              onClick={toggleTheme}
              size="icon"
              className={`w-14 h-14 rounded-full ${
                isDarkMode
                  ? "bg-gray-800/90 hover:bg-gray-700/90 text-yellow-400 border border-gray-700"
                  : "bg-white/90 hover:bg-gray-50/90 text-gray-800 border border-gray-200 shadow-lg"
              } backdrop-blur-sm transition-all duration-300 hover:scale-110`}
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
