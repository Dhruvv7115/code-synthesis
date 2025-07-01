"use client"

interface MentorsSectionProps {
  isDarkMode: boolean
  cardClasses: string
  accentColor: string
}

export default function MentorsSection({ isDarkMode, cardClasses, accentColor }: MentorsSectionProps) {
  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "AI & Sustainability Expert",
      company: "Google",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Machine Learning", "Climate Tech", "Data Science"],
      experience: "15+ years",
    },
    {
      name: "Priya Sharma",
      role: "Green Tech Entrepreneur",
      company: "EcoInnovate",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Renewable Energy", "IoT", "Startup Strategy"],
      experience: "12+ years",
    },
    {
      name: "Arjun Patel",
      role: "Full Stack Developer",
      company: "Microsoft",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Web Development", "Cloud Computing", "DevOps"],
      experience: "10+ years",
    },
    {
      name: "Dr. Sneha Gupta",
      role: "Environmental Scientist",
      company: "ISRO",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Climate Modeling", "Remote Sensing", "GIS"],
      experience: "18+ years",
    },
    {
      name: "Vikram Singh",
      role: "Blockchain Developer",
      company: "Polygon",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Blockchain", "Smart Contracts", "DeFi"],
      experience: "8+ years",
    },
    {
      name: "Anita Desai",
      role: "UX/UI Designer",
      company: "Adobe",
      image: "/placeholder.svg?height=200&width=200",
      expertise: ["Design Systems", "User Research", "Prototyping"],
      experience: "11+ years",
    },
  ]

  return (
    <section id="mentors" className="relative py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            EXPERT <span className={accentColor}>MENTORS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            Learn from industry leaders and sustainability experts who will guide you throughout your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`${cardClasses} border rounded-2xl p-8 h-80 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center h-full flex flex-col justify-between">
                <div>
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400/50 group-hover:border-green-400 transition-colors shadow-lg"
                  />
                  <h3 className="text-lg font-black mb-1">{mentor.name}</h3>
                  <p className="text-green-400 font-bold mb-1 text-sm">{mentor.role}</p>
                  <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-xs mb-3`}>{mentor.company}</p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`text-xs ${isDarkMode ? "bg-gray-800/50" : "bg-gray-100"} px-2 py-1 rounded-full ${isDarkMode ? "text-gray-300" : "text-gray-700"} font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-green-400 text-xs font-bold">{mentor.experience} Experience</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
