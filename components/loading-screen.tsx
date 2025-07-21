"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 300)
          return 100
        }
        return prev + 2
      })
    }, 20)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,127,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,127,0.08)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      {/* Floating lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
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
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-40 right-20 w-64 h-64 bg-gradient-radial from-emerald-300/24 via-emerald-300/12 to-transparent rounded-full"
        ></motion.div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main title with animation */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-black mb-8 tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
            CODE SYNTHESIS
          </span>
          <span className="block md:inline md:ml-6 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent">2025</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mb-8 tracking-[0.3em] uppercase"
        >
          12-HOUR HACKATHON
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mx-auto bg-gray-800 rounded-full h-1 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-green-400 text-sm mt-4 font-medium"
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  )
}
