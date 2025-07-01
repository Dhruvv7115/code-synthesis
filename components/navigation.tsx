"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  isDarkMode: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Navigation({ isDarkMode, scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "TRACKS", id: "tracks" },
    { label: "TIMELINE", id: "timeline" },
    { label: "PRIZES", id: "prizes" },
    { label: "SPONSORS", id: "sponsors" },
    { label: "TEAM", id: "team" },
    { label: "FAQ", id: "faq" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md border-b " : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-center px-6 py-4 max-w-7xl mx-auto relative">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`${
                isScrolled
                  ? "text-white hover:text-green-300"
                  : isDarkMode
                    ? "text-gray-300 hover:text-green-400"
                    : "text-gray-700 hover:text-green-600"
              } transition-all duration-300 font-[Tropical] font-normal tracking-wide text-base relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Devfolio Button - Desktop */}
        <div className="hidden lg:block absolute right-0">
          <Button
            onClick={() => window.open("https://devfolio.co/example", "_blank")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Devfolio
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden absolute right-6 w-8 h-8 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-white" : isDarkMode ? "text-white" : "text-black"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-white" : isDarkMode ? "text-white" : "text-black"}`} />
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
            ? "bg-blue-600/95 backdrop-blur-md border-t border-blue-500/50"
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
                scrollToSection(item.id)
                setIsMenuOpen(false)
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
          <Button
            onClick={() => window.open("https://devfolio.co/example", "_blank")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-black font-bold mt-4"
          >
            Devfolio
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
