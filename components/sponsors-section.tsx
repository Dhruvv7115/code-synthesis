"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Crown,
  Award,
  Medal,
  Coffee,
  BadgeIcon as Certificate,
  Globe,
  Gift,
  Zap,
} from "lucide-react";

interface SponsorsSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function SponsorsSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: SponsorsSectionProps) {
  // Sponsors section is "To be revealed soon!" for now
  const ref = useRef(null);

  // Early return for placeholder

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sponsorTiers = [
    {
      tier: "Gold Sponsors",
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      sponsors: [
        {
          name: "TechCorp",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "InnovateLabs",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Silver Sponsors",
      icon: <Award className="w-6 h-6" />,
      color: "from-gray-300 to-gray-500",
      bgColor: "from-gray-400/20 to-gray-600/20",
      sponsors: [
        {
          name: "DevTools Inc",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "CloudTech",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "DataFlow",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Bronze Sponsors",
      icon: <Medal className="w-6 h-6" />,
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      sponsors: [
        {
          name: "StartupHub",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "CodeBase",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "TechFlow",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "DevSpace",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Beverage Partners",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-amber-400 to-yellow-500",
      bgColor: "from-amber-500/20 to-yellow-500/20",
      sponsors: [
        {
          name: "CafeCorp",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "EnergyDrinks Co",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Certificate Partners",
      icon: <Certificate className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      sponsors: [
        {
          name: "CertifyPro",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "SkillBadge",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Ecosystem Partners",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      sponsors: [
        {
          name: "TechEcosystem",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "InnovateNetwork",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "DevCommunity",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "In-Kind Sponsors",
      icon: <Gift className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      sponsors: [
        {
          name: "SwagStore",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "TechGear",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
    {
      tier: "Track Sponsors",
      icon: <Zap className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      sponsors: [
        {
          name: "AI Solutions",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "GreenTech",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
        {
          name: "BlockchainCorp",
          logo: "/placeholder.svg?height=80&width=200",
          website: "#",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

  return (
    <section
      id="sponsors"
      className="relative py-24 px-6 md:px-12 flex flex-col items-center justify-center min-h-[200px]"
      ref={ref}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
          OUR <span className={accentColor}>SPONSORS</span>
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
        <div
          className={`text-xl md:text-2xl font-semibold ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold text-gray-400 animate-pulse">
            To be revealed soon!
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section
      id="sponsors"
      className={`relative py-24 px-6 md:px-12 ${
        isDarkMode ? "bg-gray-900/20" : "bg-gray-50/50"
      }`}
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            OUR <span className={accentColor}>SPONSORS</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            Powered by industry leaders and innovative companies who believe in
            fostering the next generation of tech talent.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tierIndex}
              variants={itemVariants}
              className="text-center"
            >
              {/* Tier Header */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                >
                  <div className="text-black">{tier.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-wide">
                  {tier.tier}
                </h3>
              </div>

              {/* Sponsors Grid */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(
                  tier.sponsors.length,
                  4
                )} gap-6`}
              >
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsorIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${cardClasses} border rounded-2xl p-8 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden cursor-pointer`}
                    onClick={() => window.open(sponsor.website, "_blank")}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tier.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-32">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="max-h-16 max-w-full object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h4 className="text-lg font-bold text-center">
                        {sponsor.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
