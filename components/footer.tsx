"use client"

import { Leaf, MessageSquare, Twitter, MapPin, Users } from "lucide-react"
import Link from "next/link"

interface FooterProps {
  isDarkMode: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ isDarkMode, scrollToSection }: FooterProps) {
  return (
    <footer
      className={`relative ${isDarkMode ? "bg-black" : "bg-white"} border-t ${isDarkMode ? "border-gray-800/50" : "border-gray-200"} py-12 px-6 md:px-12`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-black tracking-wider">CODE SYNTHESIS</span>
            </div>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-6 leading-relaxed`}>
              Building a sustainable future through innovative technology solutions. Join us in creating code that
              matters for our planet and future generations.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://www.instagram.com/codesynthesis_codegeeks/"
                className={`w-10 h-10 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/Code_Synthesis?t=ogutEvFBwA6EtduQcT6uuQ&s=09"
                className={`w-10 h-10 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className={`block ${isDarkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"} transition-colors font-medium text-left`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tracks")}
                className={`block ${isDarkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"} transition-colors font-medium text-left`}
              >
                Tracks
              </button>
              <button
                onClick={() => scrollToSection("mentors")}
                className={`block ${isDarkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"} transition-colors font-medium text-left`}
              >
                Mentors
              </button>
              <button
                onClick={() => scrollToSection("prizes")}
                className={`block ${isDarkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"} transition-colors font-medium text-left`}
              >
                Prizes
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`block ${isDarkMode ? "text-gray-400 hover:text-green-400" : "text-gray-600 hover:text-green-600"} transition-colors font-medium text-left`}
              >
                Team
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">hello@codesynthesis.dev</span>
              </div>
              <div className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className={`flex items-center space-x-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t ${isDarkMode ? "border-gray-800/50" : "border-gray-200"} pt-6 text-center`}>
          <p className={`${isDarkMode ? "text-gray-500" : "text-gray-500"} text-sm`}>
            © 2025 Code Synthesis by CodeGeeks. All rights reserved. Built with 💚 for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  )
}
