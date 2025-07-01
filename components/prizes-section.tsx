"use client"

import { Trophy, Award, Star, CheckCircle, GraduationCap, Users2, Briefcase } from "lucide-react"

interface PrizesSectionProps {
  isDarkMode: boolean
  cardClasses: string
  accentColor: string
}

export default function PrizesSection({ isDarkMode, cardClasses, accentColor }: PrizesSectionProps) {
  return (
    <section id="prizes" className={`relative py-24 px-6 md:px-12 ${isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            PRIZES & <span className={accentColor}>REWARDS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            Compete for exciting prizes, recognition, and life-changing opportunities. All winners receive certificates,
            mentorship, and industry connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* First Place - Featured */}
          <div
            className={`md:col-span-2 lg:col-span-1 ${isDarkMode ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50" : "bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400"} rounded-2xl p-6 relative overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
          >
            <div className="absolute top-4 right-4">
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-black">🏆 WINNER</div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <Trophy className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-black mb-2">1ST PLACE</h3>
            <div className="text-3xl font-black text-yellow-400 mb-3">₹1,50,000</div>
            <div className={`space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Cash Prize + Certificate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>6-month Mentorship Program</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Funding Opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>Industry Recognition</span>
              </div>
            </div>
          </div>

          {/* Second Place */}
          <div className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-2 border-gray-400/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-black mb-2">2ND PLACE</h3>
              <div className="text-3xl font-black text-gray-300 mb-3">₹75,000</div>
              <div className={`space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Cash Prize + Certificate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Industry Connections</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Mentorship Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Place */}
          <div className="bg-gradient-to-br from-orange-400/20 to-red-500/20 border-2 border-orange-400/50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-300 to-red-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-black mb-2">3RD PLACE</h3>
              <div className="text-3xl font-black text-orange-300 mb-3">₹50,000</div>
              <div className={`space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Cash Prize + Certificate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Certificate of Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Alumni Network Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Awards */}
          <div
            className={`${cardClasses} border rounded-2xl p-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10`}
          >
            <h3 className="text-sm font-black mb-1">Best Innovation</h3>
            <div className="text-xl font-black text-green-400 mb-1">₹25,000</div>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs mb-1`}>
              Most innovative sustainable solution
            </p>
            <div className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Certificate + Recognition</span>
            </div>
          </div>

          <div
            className={`${cardClasses} border rounded-2xl p-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10`}
          >
            <h3 className="text-sm font-black mb-1">People's Choice</h3>
            <div className="text-xl font-black text-green-400 mb-1">₹15,000</div>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs mb-1`}>Community voted favorite</p>
            <div className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Certificate + Recognition</span>
            </div>
          </div>

          <div
            className={`${cardClasses} border rounded-2xl p-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10`}
          >
            <h3 className="text-sm font-black mb-1">Best Beginner</h3>
            <div className="text-xl font-black text-green-400 mb-1">₹10,000</div>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs mb-1`}>
              Best project by first-time participants
            </p>
            <div className={`flex items-center space-x-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span>Certificate + Mentorship</span>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className={`${cardClasses} border rounded-3xl p-6 text-center shadow-2xl`}>
          <h3 className="text-xl font-black mb-4">ALL PARTICIPANTS RECEIVE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                <GraduationCap className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-sm font-bold mb-1">Digital Certificate</h4>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
                Official participation certificate
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-2">
                <Users2 className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-sm font-bold mb-1">Alumni Network</h4>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
                Lifetime access to our community
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-2">
                <Briefcase className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-sm font-bold mb-1">Job Opportunities</h4>
              <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} text-xs`}>
                Direct connections with sponsors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
