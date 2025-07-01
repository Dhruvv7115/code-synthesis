"use client"

import { Sun, Recycle, Droplets, Wind, Globe, Leaf } from "lucide-react"

interface TracksSectionProps {
  isDarkMode: boolean
  cardClasses: string
  accentColor: string
}

export default function TracksSection({ isDarkMode, cardClasses, accentColor }: TracksSectionProps) {
  const tracks = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Renewable Energy",
      description: "Solar, wind, hydro, and other clean energy solutions",
      color: "from-yellow-400 to-orange-500",
      projects: "25+ Projects",
      difficulty: "Intermediate",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Circular Economy",
      description: "Waste reduction, recycling, and sustainable consumption",
      color: "from-green-400 to-emerald-500",
      projects: "30+ Projects",
      difficulty: "Beginner",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Conservation",
      description: "Smart water management and purification systems",
      color: "from-blue-400 to-cyan-500",
      projects: "20+ Projects",
      difficulty: "Advanced",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Climate Action",
      description: "Carbon footprint tracking and climate monitoring",
      color: "from-teal-400 to-green-500",
      projects: "35+ Projects",
      difficulty: "Intermediate",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Smart Cities",
      description: "IoT solutions for sustainable urban development",
      color: "from-purple-400 to-pink-500",
      projects: "40+ Projects",
      difficulty: "Advanced",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Agriculture Tech",
      description: "Precision farming and sustainable agriculture",
      color: "from-lime-400 to-green-500",
      projects: "28+ Projects",
      difficulty: "Intermediate",
    },
  ]

  return (
    <section id="tracks" className={`relative py-24 px-6 md:px-12 ${isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            CHALLENGE <span className={accentColor}>TRACKS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            Choose your battlefield. Six exciting tracks, each focusing on different aspects of sustainable development
            and green technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`${cardClasses} border rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${track.color} flex items-center justify-center mb-4 text-black group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {track.icon}
                </div>
                <h3 className="text-lg font-black mb-2">{track.title}</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3 leading-relaxed text-xs`}>
                  {track.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-green-400 text-xs font-bold">{track.projects}</div>
                  <div
                    className={`text-xs ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} px-2 py-1 rounded-full ${isDarkMode ? "text-gray-400" : "text-gray-600"} font-medium`}
                  >
                    {track.difficulty}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
