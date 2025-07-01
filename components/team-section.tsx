"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Twitter,
  Users,
  Code,
  Crown,
  GraduationCap,
  UserCheck,
  Megaphone,
  Wrench,
  Palette,
  Calendar,
  FolderOpen,
  Camera,
  FileText,
  Video,
} from "lucide-react"
import Link from "next/link"

interface TeamSectionProps {
  isDarkMode: boolean
  cardClasses: string
  accentColor: string
}

export default function TeamSection({ isDarkMode, cardClasses, accentColor }: TeamSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamCategories = [
    {
      name: "LEADERSHIP",
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      members: [
        {
          name: "Dr. Rajesh Kumar",
          role: "Event Director",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Leading the vision and strategic direction",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Priya Sharma",
          role: "Co-Director",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Overseeing operations and engagement",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "FACULTY",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      members: [
        {
          name: "Prof. Anita Desai",
          role: "Faculty Advisor",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Academic guidance and support",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Dr. Vikram Singh",
          role: "Technical Advisor",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Technical oversight and mentorship",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "LEAD ORGANISERS",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      members: [
        {
          name: "Rohit Sharma",
          role: "Lead Organizer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Coordinating all hackathon aspects",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Kavya Patel",
          role: "Lead Organizer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Managing logistics and experience",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "CO-ORGANISERS",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      members: [
        {
          name: "Aryan Kumar",
          role: "Co-Organizer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Supporting event coordination",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Riya Singh",
          role: "Co-Organizer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Assisting participant management",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Dev Agarwal",
          role: "Co-Organizer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Coordinating with partners",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "PR & MARKETING",
      icon: <Megaphone className="w-6 h-6" />,
      color: "from-pink-400 to-red-500",
      bgColor: "from-pink-500/20 to-red-500/20",
      members: [
        {
          name: "Nisha Verma",
          role: "Marketing Head",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Leading marketing campaigns",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Amit Gupta",
          role: "PR Manager",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Managing public relations",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "TECHNICAL LEADS",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      members: [
        {
          name: "Sanjay Mehta",
          role: "Technical Lead",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Overseeing technical infrastructure",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Pooja Jain",
          role: "Platform Manager",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Managing hackathon platform",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "DESIGN TEAM",
      icon: <Palette className="w-6 h-6" />,
      color: "from-teal-400 to-green-500",
      bgColor: "from-teal-500/20 to-green-500/20",
      members: [
        {
          name: "Sneha Reddy",
          role: "Design Lead",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Creating visual identity",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Karan Malhotra",
          role: "UI/UX Designer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Designing user experiences",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "EVENT MANAGEMENT",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-orange-400 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      members: [
        {
          name: "Rahul Chopra",
          role: "Event Manager",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Coordinating event logistics",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Meera Kapoor",
          role: "Venue Coordinator",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Managing venue arrangements",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "PROJECT LEADS",
      icon: <FolderOpen className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      members: [
        {
          name: "Aditya Sharma",
          role: "Project Lead",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Managing project timelines",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Divya Agarwal",
          role: "Project Coordinator",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Coordinating project activities",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "PHOTOGRAPHY & VIDEO",
      icon: <Camera className="w-6 h-6" />,
      color: "from-lime-400 to-green-500",
      bgColor: "from-lime-500/20 to-green-500/20",
      members: [
        {
          name: "Vishal Kumar",
          role: "Photography Lead",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Capturing visual stories",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Anjali Mishra",
          role: "Videographer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Creating video content",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "CONTENT TEAM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-rose-400 to-pink-500",
      bgColor: "from-rose-500/20 to-pink-500/20",
      members: [
        {
          name: "Priyanka Joshi",
          role: "Content Lead",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Creating engaging content",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Harsh Gupta",
          role: "Content Writer",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Writing compelling copy",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
    {
      name: "VIDEO EDITING",
      icon: <Video className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "Akash Pandey",
          role: "Video Editor",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Editing video content",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
        {
          name: "Shreya Bansal",
          role: "Motion Graphics",
          image: "/placeholder.svg?height=200&width=200",
          bio: "Creating motion graphics",
          social: { twitter: "#", linkedin: "#", github: "#" },
        },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="team" className="relative py-24 px-6 md:px-12" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            MEET OUR <span className={accentColor}>TEAM</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            The passionate individuals behind Code Synthesis, dedicated to fostering innovation and sustainability.
          </p>
        </motion.div>

        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants} className="text-center">
              {/* Category Header */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                >
                  <div className="text-black">{category.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-wide">{category.name}</h3>
              </div>

              {/* Team Members Grid */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(category.members.length, 3)} gap-8`}
              >
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`${cardClasses} border rounded-2xl p-8 h-80 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10 text-center h-full flex flex-col justify-between">
                      <div>
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400/50 group-hover:border-green-400 transition-colors shadow-lg"
                        />
                        <h4 className="text-lg font-black mb-1">{member.name}</h4>
                        <p className="text-green-400 font-bold mb-3 text-sm">{member.role}</p>
                        <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs mb-4 leading-relaxed`}>
                          {member.bio}
                        </p>
                      </div>
                      <div className="flex justify-center space-x-2">
                        <Link
                          href={member.social.twitter}
                          className={`w-8 h-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} rounded-full flex items-center justify-center ${isDarkMode ? "text-gray-400 hover:text-green-400 hover:bg-green-400/10" : "text-gray-600 hover:text-green-600 hover:bg-green-100"} transition-all duration-300`}
                        >
                          <Twitter className="w-4 h-4" />
                        </Link>
                        <Link
                          href={member.social.linkedin}
                          className={`w-8 h-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} rounded-full flex items-center justify-center ${isDarkMode ? "text-gray-400 hover:text-green-400 hover:bg-green-400/10" : "text-gray-600 hover:text-green-600 hover:bg-green-100"} transition-all duration-300`}
                        >
                          <Users className="w-4 h-4" />
                        </Link>
                        <Link
                          href={member.social.github}
                          className={`w-8 h-8 ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} rounded-full flex items-center justify-center ${isDarkMode ? "text-gray-400 hover:text-green-400 hover:bg-green-400/10" : "text-gray-600 hover:text-green-600 hover:bg-green-100"} transition-all duration-300`}
                        >
                          <Code className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
