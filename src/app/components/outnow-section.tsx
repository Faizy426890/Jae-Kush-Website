"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink, Music, Clock, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Song {
  id: string
  title: string
  description: string
  youtubeUrl: string
  thumbnail: string
  duration: string
  releaseDate: string
  genre: string
  plays: string
}

const songs: Song[] = [
  {
    id: "1",
    title: "Before The Deal ",
    description:
      "A cosmic journey through raw emotions and stellar beats. This track showcases Jae Kush ability to blend street narratives with otherworldly production, creating an atmosphere that's both grounded and transcendent.",
    youtubeUrl: "https://youtu.be/eOE_-O6Z2Zo?si=mkvY-uFJ-RU5XonW",
    thumbnail: "/mars.jpg",
    duration: "3:42",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "15.2K",
  },
  {
    id: "2",
    title: "Even Wit Yo Gun",
    description:
      "Unapologetic and fierce, this track embodies the raw energy that defines Jae Kush's sound. With hard-hitting lyrics and an infectious beat, it's a statement piece that demands attention and respect.",
    youtubeUrl: "https://youtu.be/-QRAIaMsqJk?si=XSZvXMjxDiyBuQhZ",
    thumbnail: "/wtf.jpg",
    duration: "2:58",
    releaseDate: "2024",
    genre: "Trap",
    plays: "22.8K",
  },
  {
    id: "3",
    title: "Go Remix",
    description:
      "A declaration of serious intent and unwavering dedication. This track perfectly captures the essence of Jae Kush grind mentality, delivering powerful verses over a commanding instrumental that leaves no doubt about His commitment to excellence.",
    youtubeUrl: "https://youtu.be/2wQame1ZgPQ?si=bPjgjkimdi3j1zma",
    thumbnail: "/aint-come.jpg",
    duration: "4:15",
    releaseDate: "2024",
    genre: "Hip-Hop",
    plays: "31.5K",
  },
]

export default function OutNowSection() {
  const [hoveredSong, setHoveredSong] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-950 via-slate-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-r from-pink-600/15 via-purple-600/15 to-indigo-600/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">Latest Releases</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 tracking-tight"
            variants={itemVariants}
          >
            <span className="text-white">OUT</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
              NOW
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-medium px-4"
            variants={itemVariants}
          >
            Experience the latest from Blac Ruby's musical journey.
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              Each track tells a story of dedication, passion, and street elegance.
            </span>
          </motion.p>
        </motion.div>

        {/* Songs Grid - Fully Responsive */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredSong(song.id)}
              onHoverEnd={() => setHoveredSong(null)}
            >
              <div className="relative bg-gradient-to-br from-white/8 via-white/[0.03] to-transparent backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 hover:border-white/25 hover:from-white/10 transition-all duration-700 overflow-hidden shadow-2xl shadow-black/20">
                {/* Premium Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-blue-500/8 to-cyan-500/8 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl sm:rounded-3xl" />

                <div className="relative z-10">
                  {/* Mobile Layout (< sm) */}
                  <div className="block sm:hidden space-y-4">
                    {/* Mobile Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{song.title}</h3>
                        <div className="flex items-center gap-3 text-white/60 text-sm">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {song.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {song.plays}
                          </span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs font-medium">{song.genre}</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Thumbnail - Clickable */}
                    <Link href={song.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <motion.div
                        className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/15 shadow-xl shadow-black/30"
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={song.thumbnail || "/placeholder.svg"}
                          alt={`${song.title} cover art`}
                          className="w-full h-full object-cover"
                        />

                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <motion.div
                            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-6 h-6 text-white ml-1" />
                          </motion.div>
                        </div>
                      </motion.div>
                    </Link>

                    {/* Mobile Description */}
                    <p className="text-white/80 text-sm leading-relaxed">{song.description}</p>

                    {/* Mobile Button */}
                    <Link href={song.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform active:scale-98">
                        <Play className="w-4 h-4 mr-2" />
                        Watch on YouTube
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Desktop/Tablet Layout (>= sm) */}
                  <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
                    {/* Song Info */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                              <span className="text-white font-bold text-sm sm:text-lg">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                                {song.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/60 text-sm sm:text-base">
                                <span className="flex items-center gap-1 sm:gap-2">
                                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {song.duration}
                                </span>
                                <span className="flex items-center gap-1 sm:gap-2">
                                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {song.plays} plays
                                </span>
                                <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium">
                                  {song.genre}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-2xl">
                            {song.description}
                          </p>

                          <Link href={song.youtubeUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25 group/btn">
                              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover/btn:scale-110 transition-transform" />
                              Watch on YouTube
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Song Artwork - Clickable */}
                    <div className="relative sm:order-first lg:order-last">
                      <Link href={song.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/15 shadow-2xl shadow-black/40 cursor-pointer"
                          whileHover={{ scale: 1.03, rotate: 1 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <img
                            src={song.thumbnail || "/placeholder.svg"}
                            alt={`${song.title} cover art`}
                            className="w-full h-full object-cover"
                          />

                          {/* Premium Play Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.div
                              className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </Link>

                      {/* Floating Music Icon */}
                      <motion.div
                        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25"
                        animate={{
                          y: hoveredSong === song.id ? [-3, 3, -3] : 0,
                          rotate: hoveredSong === song.id ? [0, 180, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredSong === song.id ? Number.POSITIVE_INFINITY : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <Music className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Responsive */}
        <motion.div
          className="text-center mt-12 sm:mt-16 md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-black/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              More Music Coming Soon
            </h3>
            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay tuned for more releases from Jae Kush. Follow on social media to be the first to know when new
              tracks drop.
            </p>
            <div  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
             <a
  href="https://youtube.com/@tharealjaekush?si=W_FnsBvPdhhQQNyh" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base inline-block"
>
  Subscribe on YouTube
</a>

             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
