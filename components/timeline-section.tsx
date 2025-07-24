"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  Clock,
  Trophy,
  Users,
  Zap,
  Coffee,
  Award,
} from "lucide-react";

interface TimelineSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function TimelineSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: TimelineSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineEvents = [
    {
      date: "September 25, 2025",
      time: "6:00 PM",
      title: "Registration Opens",
      description: "Team registration and project submission portal goes live",
      icon: <Users className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-500",
      last: false,
    },
    {
      date: "September 26, 2025",
      time: "11:59 PM",
      title: "Registration Closes",
      description: "Last chance to register your team and secure your spot",
      icon: <Clock className="w-5 h-5" />,
      color: "from-orange-400 to-red-500",
      last: false,
    },
    {
      date: "September 27, 2025",
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address, rules briefing, and team introductions",
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-400 to-emerald-500",
      last: false,
    },

    {
      date: "September 27, 2025",
      time: "10:00 AM",
      title: "Hacking Begins",
      description:
        "9 hours of intense coding, innovation, and collaboration starts",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-purple-400 to-pink-500",
      last: false,
    },
    {
      date: "September 27, 2025",
      time: "1:00 PM",
      title: "Lunch & Networking",
      description: "Fuel up and connect with fellow participants and mentors",
      icon: <Coffee className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-500",
      last: false,
    },
    {
      date: "September 27, 2025",
      time: "7:00 PM",
      title: "Mentor Sessions",
      description: "One-on-one guidance from industry experts and tech leaders",
      icon: <Users className="w-5 h-5" />,
      color: "from-teal-400 to-green-500",
      last: false,
    },
    {
      date: "September 28, 2025",
      time: "12:00 AM",
      title: "Midnight Snacks",
      description: "Late night fuel to keep the coding momentum going strong",
      icon: <Coffee className="w-5 h-5" />,
      color: "from-indigo-400 to-purple-500",
      last: false,
    },
    {
      date: "September 28, 2025",
      time: "8:00 AM",
      title: "Breakfast & Check-in",
      description: "Morning refreshments and progress check with teams",
      icon: <Coffee className="w-5 h-5" />,
      color: "from-lime-400 to-green-500",
      last: false,
    },
    {
      date: "September 28, 2025",
      time: "6:00 PM",
      title: "Project Submission",
      description: "Final submission deadline for all hackathon projects",
      icon: <Clock className="w-5 h-5" />,
      color: "from-red-400 to-pink-500",
      last: false,
    },
    {
      date: "September 29, 2025",
      time: "10:00 AM",
      title: "Project Presentations",
      description: "Teams present their solutions to judges and audience",
      icon: <Award className="w-5 h-5" />,
      color: "from-cyan-400 to-blue-500",
      last: false,
    },
    {
      date: "September 29, 2025",
      time: "2:00 PM",
      title: "Judging & Deliberation",
      description: "Expert panel evaluates projects and selects winners",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-emerald-400 to-teal-500",
      last: false,
    },
    {
      date: "September 29, 2025",
      time: "4:00 PM",
      title: "Closing Ceremony",
      description: "Winner announcements, prize distribution, and celebration",
      icon: <Award className="w-5 h-5" />,
      color: "from-yellow-400 to-orange-500",
      last: false,
    },
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return true ? (
    <>
      <section
        id="timeline"
        className="relative py-24 px-6 md:px-12 flex flex-col items-center justify-center min-h-[200px]"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            EVENT <span className={accentColor}>TIMELINE</span>
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 mx-auto mb-12 rounded-full" />
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-xl md:text-2xl font-semibold`}
          >
            <div className="text-2xl md:text-3xl font-bold text-gray-400 animate-pulse">
              To be revealed soon!
            </div>
          </p>
        </div>
      </section>
    </>
  ) : (
    <section id="timeline" className="relative py-24 px-6 md:px-12" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            EVENT <span className={accentColor}>TIMELINE</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`}
          >
            Your complete guide to the 48-hour journey of innovation,
            collaboration, and competition.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-14 w-0.5 bg-gradient-to-b from-green-400 via-emerald-500 to-green-400"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${
                      event.color
                    } rounded-full flex items-center justify-center shadow-lg border-4 ${
                      isDarkMode ? "border-black" : "border-white"
                    }`}
                  >
                    <div className="text-black">{event.icon}</div>
                  </div>
                </div>

                {/* Event Card */}
                <div className="flex-1">
                  <motion.div
                    className={`${cardClasses} border rounded-2xl p-6 shadow-lg hover:shadow-green-500/10 transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-lg font-black mb-2 sm:mb-0">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <div
                            className={`flex items-center space-x-1 ${
                              isDarkMode ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-green-400 font-bold">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        } text-sm leading-relaxed`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
