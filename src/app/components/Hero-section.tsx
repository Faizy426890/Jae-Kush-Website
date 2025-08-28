"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Music, Star, MapPin, Calendar, Award, Play, Users, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { number: "10+", label: "Years Experience", icon: Calendar },
    { number: "200K+", label: "Total Streams", icon: TrendingUp },
    { number: "25+", label: "Countries Reached", icon: Users },
    { number: "15+", label: "Editorial Playlists", icon: Award },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.4, 1, 0.4],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const neonPulseVariants = {
    animate: {
      boxShadow: [
        "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
        "0 0 30px #00ffff, 0 0 60px #00ffff, 0 0 90px #00ffff",
        "0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Neon Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:100px_100px]" />

        {/* Large Neon Orbs with Enhanced Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,255,0.4) 0%, rgba(0,255,255,0.3) 40%, rgba(255,0,128,0.2) 70%)",
            boxShadow: "0 0 100px rgba(255,0,255,0.3), 0 0 200px rgba(0,255,255,0.2)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(255,0,255,0.3) 50%, rgba(0,255,128,0.2) 100%)",
            boxShadow: "0 0 90px rgba(0,255,255,0.3), 0 0 180px rgba(255,0,255,0.2)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.9, 0.5],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional Neon Accent Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(0,255,0,0.6) 0%, transparent 70%)",
            boxShadow: "0 0 50px rgba(0,255,0,0.4)",
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Neon Elements */}
        <motion.div className="absolute top-20 right-20 text-cyan-400" variants={floatingVariants} animate="animate">
          <Music className="w-12 h-12 sm:w-16 sm:h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-16 text-pink-400"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Star className="w-10 h-10 sm:w-14 sm:h-14" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-16 text-lime-400" variants={sparkleVariants} animate="animate">
          <Sparkles className="w-14 h-14 sm:w-18 sm:h-18" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-10 text-yellow-400"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Zap className="w-12 h-12 sm:w-16 sm:h-16" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Main Content */}
          <motion.div className="space-y-8 sm:space-y-10" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-xl border-2"
              style={{
                background: "linear-gradient(135deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1))",
                borderColor: "rgba(255,0,255,0.5)",
                boxShadow: "0 0 15px rgba(255,0,255,0.2)",
              }}
              variants={itemVariants}
              animate={{
                borderColor: ["rgba(255,0,255,0.5)", "rgba(0,255,255,0.5)", "rgba(255,0,255,0.5)"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-pulse" />
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              <span className="text-sm sm:text-base font-bold text-white tracking-wide">Rapper's voice</span>
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse" />
            </motion.div>

            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                <div className="flex gap-2">
                  <span className="text-white">Louie</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-lime-400 animate-pulse">
                    Z
                  </span>
                </div>
              </h1>

              <div className="flex items-center gap-4 text-lg sm:text-xl text-white/90">
                <div
                  className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400"
                  style={{
                    boxShadow: "0 0 10px rgba(255,0,255,0.3)",
                  }}
                ></div>
                <span className="font-bold tracking-wide">Zach Garsson</span>
              </div>
            </motion.div>

            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Street Knowledge.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-lime-400">
                  Raw Dedication.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
                As a hybrid music from Connecticut, Louie Z aims to change the entertainment industry with music, dance
                and inclusivity. His blend of Hip-Hop, R&B and Pop sounds creates a unique style that blends those of
                the early 2000s with a modern element. His signature style respects the past and embraces the future. As
                a hybrid artist Louie Z aims to inspire his listeners with this signature sound and make the
                entertainment industry less competitive.
                <span className="text-cyan-400 font-bold"> Within his art there is something for everyone.</span>
              </p>
            </motion.div>

            <motion.div
              className="backdrop-blur-xl border-2 rounded-3xl p-6 sm:p-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,0,255,0.05), rgba(0,255,255,0.05), rgba(0,255,0,0.05))",
                borderColor: "rgba(0,255,255,0.3)",
                boxShadow: "0 0 20px rgba(0,255,255,0.15)",
              }}
              variants={itemVariants}
              animate={{
                borderColor: ["rgba(0,255,255,0.3)", "rgba(255,0,255,0.3)", "rgba(0,255,0,0.3)", "rgba(0,255,255,0.3)"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center transition-all duration-500 ${
                      currentStat === index ? "scale-110" : "scale-100 opacity-70"
                    }`}
                    animate={{
                      scale: currentStat === index ? 1.1 : 1,
                      opacity: currentStat === index ? 1 : 0.7,
                    }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon
                        className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-500 ${
                          currentStat === index ? "text-cyan-400" : "text-white/60"
                        }`}
                      />
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl font-bold transition-all duration-500 ${
                        currentStat === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400"
                          : "text-white"
                      }`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/70 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6" variants={itemVariants}>
              <Link href="#contact">
                <Button
                  size="lg"
                  className="group font-bold px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 border-0 text-black"
                  style={{
                    background: "linear-gradient(135deg, #ff00ff, #00ffff, #ff00ff)",
                    boxShadow: "0 0 15px rgba(255,0,255,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(255,0,255,0.5)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(255,0,255,0.3)"
                  }}
                >
                  Let's Collaborate
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#music">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 text-white hover:bg-white/10 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 bg-transparent group"
                  style={{
                    borderColor: "rgba(0,255,255,0.6)",
                    boxShadow: "0 0 10px rgba(0,255,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,0,255,0.8)"
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(255,0,255,0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,255,255,0.6)"
                    e.currentTarget.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)"
                  }}
                >
                  <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                  Listen Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Content */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="relative backdrop-blur-2xl border-2 rounded-3xl p-8 sm:p-12"
                style={{
                  background: "linear-gradient(135deg, rgba(255,0,255,0.08), rgba(0,255,255,0.08), rgba(0,255,0,0.05))",
                  borderColor: "rgba(255,0,255,0.4)",
                  boxShadow: "0 0 30px rgba(255,0,255,0.2)",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 0 40px rgba(255,0,255,0.3)",
                }}
                transition={{ duration: 0.3 }}
                animate={{
                  borderColor: [
                    "rgba(255,0,255,0.4)",
                    "rgba(0,255,255,0.4)",
                    "rgba(0,255,0,0.4)",
                    "rgba(255,0,255,0.4)",
                  ],
                }}
              >
                {/* Artist Image Placeholder */}
                <div
                  className="relative aspect-square rounded-2xl overflow-hidden border-2 mb-8"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2), rgba(0,255,0,0.1))",
                    borderColor: "rgba(0,255,255,0.5)",
                    boxShadow: "0 0 20px rgba(0,255,255,0.15)",
                  }}
                >
                  <img src="/hero.jpg" alt="Jae Kush - Artist Portrait" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "linear-gradient(45deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1))",
                    }}
                  />
                </div>

                {/* Quote Section */}
                <div className="space-y-4">
                  <blockquote className="text-lg sm:text-xl text-white/95 italic leading-relaxed">
                    "I'm Louie Z, born and raised in Connecticut, bringing a mix of hip-hop, R&B, and pop that's all my
                    own. My style flips the old school vibe into something fresh for today, mixing raw energy with
                    smooth melodies. I don't just make tracks—I move with dance, culture, and a vision to open doors for
                    everybody. This ain't about competition, it's about creating a lane where we all shine"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-1 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400"
                      style={{
                        boxShadow: "0 0 8px rgba(255,0,255,0.3)",
                      }}
                    ></div>
                    <span className="text-cyan-400 font-bold">Louie Z</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          variants={itemVariants}
        >
          <div
            className="w-6 h-12 border-2 rounded-full flex justify-center backdrop-blur-sm"
            style={{
              borderColor: "rgba(0,255,255,0.6)",
              boxShadow: "0 0 10px rgba(0,255,255,0.2)",
            }}
          >
            <motion.div
              className="w-2 h-4 rounded-full mt-2"
              style={{
                background: "linear-gradient(to bottom, #ff00ff, #00ffff)",
                boxShadow: "0 0 8px rgba(255,0,255,0.4)",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                height: [16, 8, 16],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
