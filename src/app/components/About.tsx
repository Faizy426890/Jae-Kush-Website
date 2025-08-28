"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function AboutSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const nextTextTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Text content for typing animation
  const textContent = [
    "Zach Garsson — Born on the southside of Connecticut, aims to change the entertainment industry with music.",
    "Louie Z embodies the fusion of street elegance and raw dedication. With over a decade in the music scene, his journey from Connecticut has been a vessel for relentless grind and a passionate commitment to his craft. His unique sound and powerful presence set him apart, making him a force to be reckoned with in the hip-hop world.",
  ]

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin to prevent premature triggering
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Clear intervals when component unmounts or becomes invisible
  useEffect(() => {
    if (!isVisible) {
      // Clear any running intervals/timeouts when not visible
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      if (nextTextTimeoutRef.current) {
        clearTimeout(nextTextTimeoutRef.current)
        nextTextTimeoutRef.current = null
      }
      setIsTyping(false)
    }
  }, [isVisible])

  // Letter-by-letter typing effect - only when visible
  useEffect(() => {
    if (!isVisible || currentTextIndex >= textContent.length) return

    setIsTyping(true)
    const text = textContent[currentTextIndex]

    // Start from current character index or reset if starting new text
    const startIndex = charIndex === 0 ? 0 : charIndex
    setDisplayedText(text.slice(0, startIndex))

    typingIntervalRef.current = setInterval(() => {
      setCharIndex((prevIndex) => {
        const newIndex = prevIndex + 1
        if (newIndex <= text.length) {
          setDisplayedText(text.slice(0, newIndex))

          if (newIndex === text.length) {
            // Finished typing current text
            setIsTyping(false)

            // Set timeout for next text
            nextTextTimeoutRef.current = setTimeout(() => {
              setCurrentTextIndex((prev) => (prev + 1) % textContent.length)
              setCharIndex(0) // Reset character index for next text
            }, 2000)

            // Clear the typing interval
            if (typingIntervalRef.current) {
              clearInterval(typingIntervalRef.current)
              typingIntervalRef.current = null
            }
          }

          return newIndex
        }
        return prevIndex
      })
    }, 10) // Fast typing speed (10ms per character)

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
        typingIntervalRef.current = null
      }
      if (nextTextTimeoutRef.current) {
        clearTimeout(nextTextTimeoutRef.current)
        nextTextTimeoutRef.current = null
      }
    }
  }, [currentTextIndex, isVisible])

  // Reset animation when becoming visible again
  useEffect(() => {
    if (isVisible && displayedText === "" && charIndex === 0) {
      // Reset to start animation from beginning when section becomes visible
      setCurrentTextIndex(0)
    }
  }, [isVisible])

  // Word-by-word animation for "Jae Kush"
  const nameWords = ["Louie", "Z"]
  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="bio"
      className="relative py-24 px-6 md:px-12 overflow-hidden min-h-screen"
      style={{
        background: `
          linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%),
          linear-gradient(90deg, rgba(30, 41, 59, 0.3) 1px, transparent 1px),
          linear-gradient(rgba(30, 41, 59, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: `100% 100%, 40px 40px, 40px 40px`,
        backgroundPosition: `0 0, 0 0, 0 0`,
      }}
    >
      {/* Enhanced Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-slate-600/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-slate-600/20 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-slate-800/30 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with Word Animation */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-700/50 mb-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 font-semibold tracking-wide">ARTIST SPOTLIGHT</span>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </motion.div>

          <div className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <motion.div variants={fadeInUp} className="text-white mb-2">
              About
            </motion.div>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {nameWords.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="italic font-light bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with Typing Animation */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
          >
            <motion.div
              className="relative p-8 rounded-3xl bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 shadow-2xl"
              variants={fadeInUp}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />

              <div className="relative z-10">
                {/* Origin Story */}
                <motion.div className="mb-8" variants={fadeInUp}>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    {currentTextIndex === 0 ? "Origin Story" : "The Artist"}
                  </h3>
                  <div className="text-xl text-slate-200 leading-relaxed font-light min-h-[120px]">
                    {displayedText}
                    {isTyping && isVisible && (
                      <motion.span
                        className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      />
                    )}
                  </div>
                </motion.div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

                {/* Stats */}
                <motion.div className="grid grid-cols-2 gap-6" variants={fadeInUp}>
                  <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/30">
                    <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800/30">
                    <div className="text-3xl font-bold text-purple-400 mb-1">∞</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wide">Dedication</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Professional Eye-Catching Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[500px] h-[500px] rounded-full border-2 border-blue-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[400px] h-[400px] rounded-full border border-purple-400/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            {/* Main Professional Image Container */}
            <div className="relative z-10">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl scale-110 animate-pulse" />

              {/* Professional Border Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-950" />
              </div>

              {/* Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/profile.jpg"
                  alt="Jae Kush - Professional Artist Portrait"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                {/* Sparkle Effects */}
                <motion.div
                  className="absolute top-4 right-4 text-blue-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 text-purple-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Star className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Professional Name Badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-8 py-4 bg-gradient-to-r from-slate-950/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <span className="text-white font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                   Louie Z
                  </span>
                </div>
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                className="absolute -top-4 -left-4 px-3 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                10+ YEARS
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 px-3 py-2 bg-purple-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              >
                Connecticut
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
