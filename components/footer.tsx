"use client";

import {
  Leaf,
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Users,
  Phone,
} from "lucide-react";
import Link from "next/link";

interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ isDarkMode, scrollToSection }: FooterProps) {
  return (
    <footer
      className={`relative ${isDarkMode ? "bg-black" : "bg-white"} border-t ${
        isDarkMode ? "border-gray-800/50" : "border-gray-200"
      } py-12 px-6 md:px-12`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-black tracking-wider">
                CODE SYNTHESIS
              </span>
            </div>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-6 leading-relaxed`}
            >
              Building a sustainable future through innovative technology
              solutions. Join us in creating code that matters for our planet
              and future generations.
            </p>
            <div className="flex space-x-3">
              <Link
                href="mailto:business.codegeeks@gmail.com"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/Code_Synthesis?t=ogutEvFBwA6EtduQcT6uuQ&s=09"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/codesynthesis_codegeeks/"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/showcase/codesynthesis/posts/?feedView=all"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://discord.com/invite/NjESyTCdav"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </Link>
              <Link
                href="https://chat.whatsapp.com/G028i6VGhcyEiy0OAii6lX"
                className={`w-10 h-10 ${
                  isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                } rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-110`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className={`block ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors font-medium text-left`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("tracks")}
                className={`block ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors font-medium text-left`}
              >
                Tracks
              </button>
              <button
                onClick={() => scrollToSection("mentors")}
                className={`block ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors font-medium text-left`}
              >
                Mentors
              </button>
              <button
                onClick={() => scrollToSection("prizes")}
                className={`block ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors font-medium text-left`}
              >
                Prizes
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`block ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400"
                    : "text-gray-600 hover:text-green-600"
                } transition-colors font-medium text-left`}
              >
                Team
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <div
                className={`flex items-center space-x-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Link
                    href="mailto:business.codegeeks@gmail.com"
                    target="_blank"
                  >
                    <Mail className="w-4 h-4 text-green-400" />
                  </Link>
                </div>
                <span className="text-sm">business.codegeeks@gmail.com</span>
              </div>
              <div
                className={`flex items-center space-x-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Link href="tel:+91 8448047279" target="_blank">
                    <Phone className="w-4 h-4 text-green-400" />
                  </Link>
                </div>
                <span className="text-sm">+91 1234567890</span>
              </div>
              <div
                className={`flex items-center space-x-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Link
                    href="https://www.google.com/maps/place/Guru+Tegh+Bahadur+Institute+of+Technology/@28.6315002,77.1139343,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0351baff6933:0x48a94e3504dadb9e!8m2!3d28.6315002!4d77.1165092!16s%2Fm%2F03c3r18?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
                    <MapPin className="w-4 h-4 text-green-400" />
                  </Link>
                </div>
                <span className="text-sm">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`border-t ${
            isDarkMode ? "border-gray-800/50" : "border-gray-200"
          } pt-6 text-center`}
        >
          <p
            className={`${
              isDarkMode ? "text-gray-500" : "text-gray-500"
            } text-sm`}
          >
            © 2025 CodeZen. All rights reserved.
          </p>
          <div className="flex flex-col items-center mt-2 text-sm">
            <span>
              Made with <span className="text-red-500">❤️</span> by Sudhanshu
              Khosla & Dhruv Sabharwal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
