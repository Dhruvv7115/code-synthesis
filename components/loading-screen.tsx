"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  duration?: number;
  className?: string;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

export default function LoadingScreen({
  onLoadingComplete,
  duration = 3000,
  className = "",
}: LoadingScreenProps) {
  // Loading progress state
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const animationRef = useRef<number>();

  // Particle system state
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleAnimationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  // Loading steps
  const loadingSteps = [
    "Initializing Systems...",
    "Loading Assets...",
    "Preparing Interface...",
    "Optimizing Performance...",
    "Finalizing Experience...",
  ];

  const steps = [0, 20, 40, 60, 80, 100];

  // Custom easing function
  const easing = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Create particle function
  const createParticle = useCallback(
    (): Particle => ({
      id: Math.random().toString(36).substr(2, 9),
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1920),
      y:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 1080),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      life: 0,
      maxLife: 3000 + Math.random() * 2000,
      size: 1 + Math.random() * 3,
      opacity: 0.1 + Math.random() * 0.3,
    }),
    []
  );

  // Update particles function
  const updateParticles = useCallback(
    (deltaTime: number) => {
      setParticles((prevParticles) => {
        const updated = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx * deltaTime,
            y: particle.y + particle.vy * deltaTime,
            life: particle.life + deltaTime,
            opacity: particle.opacity * (1 - particle.life / particle.maxLife),
          }))
          .filter((particle) => particle.life < particle.maxLife);

        // Add new particles
        while (updated.length < 50 && !isComplete) {
          updated.push(createParticle());
        }

        return updated;
      });
    },
    [createParticle, isComplete]
  );

  // Particle animation loop
  const animateParticles = useCallback(
    (timestamp: number) => {
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (deltaTime > 0) {
        updateParticles(deltaTime);
      }

      if (!isComplete) {
        particleAnimationRef.current = requestAnimationFrame(animateParticles);
      }
    },
    [updateParticles, isComplete]
  );

  // Fixed progress animation - using simpler approach
  useEffect(() => {
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const normalizedTime = Math.min(elapsed / duration, 1);
      const easedProgress = easing(normalizedTime);
      const targetProgress = easedProgress * 100;

      setProgress(targetProgress);

      // Debug log to see if progress is updating
      console.log("Progress:", targetProgress);

      // Update current step based on progress
      const newStep = steps.findIndex((step) => targetProgress <= step);
      if (newStep !== -1) {
        setCurrentStep(newStep);
      }

      if (normalizedTime < 1) {
        animationRef.current = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => onLoadingComplete(), 300);
      }
    };

    animationRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [duration, onLoadingComplete]);

  // Initialize particle animations
  useEffect(() => {
    lastTimeRef.current = performance.now();
    particleAnimationRef.current = requestAnimationFrame(animateParticles);

    return () => {
      if (particleAnimationRef.current) {
        cancelAnimationFrame(particleAnimationRef.current);
      }
    };
  }, [animateParticles]);

  const currentText =
    loadingSteps[Math.min(currentStep, loadingSteps.length - 1)];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.1,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
        }}
        className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center overflow-hidden ${className}`}
        role="dialog"
        aria-label="Loading screen"
        aria-live="polite"
        aria-busy="true"
      >
        {/* Animated background grid */}
        <motion.div
          className="fixed inset-0 opacity-20"
          animate={{
            backgroundSize: ["40px 40px", "45px 45px", "40px 40px"],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(16, 185, 129, ${
                  0.15 - i * 0.03
                }) 0%, transparent 70%)`,
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
              }}
              animate={{
                x: [
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1920),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1920),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerWidth : 1920),
                ],
                y: [
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1080),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1080),
                  Math.random() *
                    (typeof window !== "undefined" ? window.innerHeight : 1080),
                ],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.6, 0.2, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Scanning line effect */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.1) 50%, transparent 100%)",
            width: "200px",
            height: "100%",
          }}
          animate={{
            x: [
              -200,
              (typeof window !== "undefined" ? window.innerWidth : 1920) + 200,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: 2,
          }}
        />

        {/* Particle field */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-emerald-400"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, particle.opacity, 0],
              }}
              transition={{
                duration: particle.maxLife / 1000,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
          {/* Main title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            className="mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-none">
              <motion.span
                className="block bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                CODE SYNTHESIS
              </motion.span>
              <motion.span
                className="block md:inline md:ml-8 bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                2025
              </motion.span>
            </h1>
          </motion.div>

          {/* Progress indicator - FIXED */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="w-64 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-emerald-500/20"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 relative rounded-full origin-left"
                animate={{
                  scaleX: progress / 100,
                }}
                initial={{ scaleX: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                  animate={{ x: [-100, 320] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center mt-3"
            >
              <span className="text-emerald-400/80 text-xs font-mono font-medium">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="text-center mt-8"
          >
            <motion.p
              key={currentText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-emerald-300/70 text-xs font-medium tracking-wide"
            >
              {currentText}
            </motion.p>

            <div className="flex justify-center mt-3 space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 h-0.5 bg-emerald-400/60 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
