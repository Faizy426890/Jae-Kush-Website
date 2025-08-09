"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Music, Star, MapPin, Calendar, Award, Play, Users, TrendingUp } from "lucide-react"
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Large Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] bg-gradient-to-r from-pink-600/15 via-purple-600/15 to-indigo-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 text-purple-400/40"
          variants={floatingVariants}
          animate="animate"
        >
          <Music className="w-10 h-10 sm:w-12 sm:h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-16 text-cyan-400/40"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Star className="w-8 h-8 sm:w-10 sm:h-10" />
        </motion.div>
        <motion.div className="absolute top-1/3 right-16 text-pink-400/40" variants={sparkleVariants} animate="animate">
          <Sparkles className="w-12 h-12 sm:w-14 sm:h-14" />
        </motion.div>

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:80px_80px]" />
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
            {/* Artist Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/15 shadow-lg shadow-purple-500/10"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
              <span className="text-sm sm:text-base font-semibold text-white/90 tracking-wide">
                Chicago's Rising Star
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            </motion.div>

            {/* Main Heading */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                <span className="text-white drop-shadow-2xl">JAE</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 animate-pulse">
                  KUSH
                </span>
              </h1>

              <div className="flex items-center gap-4 text-lg sm:text-xl text-white/80">
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                <span className="font-medium tracking-wide">Jovan Jones</span>
              </div>
            </motion.div>

            {/* Tagline & Description */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 leading-tight">
                Street Elegance.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Raw Dedication.
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
                From the streets of Atlanta to stages worldwide, I've been crafting my sound for over a decade. My music
                isn't just hip-hop – it's a movement that blends raw street narratives with refined artistry, creating
                the future of <span className="text-purple-400 font-semibold">Street Elegance</span>.
              </p>

           
            </motion.div>

            {/* Dynamic Stats */}
            <motion.div
              className="bg-gradient-to-r from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/20"
              variants={itemVariants}
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
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          currentStat === index ? "text-purple-400" : "text-white/60"
                        } transition-colors duration-500`}
                      />
                    </div>
                    <div
                      className={`text-2xl sm:text-3xl font-bold ${
                        currentStat === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
                          : "text-white"
                      } transition-all duration-500`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6" variants={itemVariants}>
              <Link href="#contact">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600 text-white font-bold px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 border-0"
                >
                  Let's Collaborate
                  <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#music">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 bg-transparent group"
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
              {/* Main Visual Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/30"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Artist Image Placeholder */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-white/20 mb-8">
                  <img
                    src="/hero.png"
                    alt="Jae Kush - Artist Portrait"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Quote Section */}
                <div className="space-y-4">
                  <blockquote className="text-lg sm:text-xl text-white/90 italic leading-relaxed">
                    "My supporters expect me to go hard with my grind and never let up. What makes me different is my
                    story, my dedication, and my drive to lead my brand to the top."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
                    <span className="text-purple-400 font-semibold">Jae Kush</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Achievement Cards */}
   
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
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
          <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
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
