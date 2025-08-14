"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Youtube,
  AirplayIcon as Spotify,
  Apple,
  Headphones,
  ExternalLink,
  Play,
  Users,
  Music,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react"

export default function MusicSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const platforms = [
    // {
    //   name: "Spotify",
    //   icon: Spotify,
    //   link: "https://open.spotify.com/",
    //   description: "Stream my complete discography with curated playlists and exclusive content",
    //   stats: "50K+ monthly listeners",
    //   additionalInfo: "Featured in Hip-Hop Rising",
    //   color: "from-green-400 to-emerald-600",
    //   bgColor: "bg-green-500/15",
    //   borderColor: "border-green-500/25",
    //   hoverColor: "hover:border-green-400/60",
    //   shadowColor: "shadow-green-500/20",
    // },
    {
      name: "YouTube Music",
      icon: Youtube,
      link: "https://www.youtube.com/@ThaRealJaeKush",
      description: "Official music videos, behind-the-scenes content, and live performances",
      stats: "100K+ total views",
      additionalInfo: "New videos weekly",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/15",
      borderColor: "border-red-500/25",
      hoverColor: "hover:border-red-400/60",
      shadowColor: "shadow-red-500/20",
    },
    // {
    //   name: "Apple Music",
    //   icon: Apple,
    //   link: "https://music.apple.com/artist/blacruby",
    //   description: "High-fidelity streaming with spatial audio and exclusive interviews",
    //   stats: "Featured artist",
    //   additionalInfo: "Lossless quality available",
    //   color: "from-slate-400 to-slate-600",
    //   bgColor: "bg-slate-500/15",
    //   borderColor: "border-slate-500/25",
    //   hoverColor: "hover:border-slate-400/60",
    //   shadowColor: "shadow-slate-500/20",
    // },
    // {
    //   name: "Pandora",
    //   icon: Headphones,
    //   link: "https://www.pandora.com/artist/blacruby",
    //   description: "Discover similar artists and create personalized radio stations",
    //   stats: "Radio ready tracks",
    //   additionalInfo: "Algorithm approved",
    //   color: "from-blue-400 to-blue-600",
    //   bgColor: "bg-blue-500/15",
    //   borderColor: "border-blue-500/25",
    //   hoverColor: "hover:border-blue-400/60",
    //   shadowColor: "shadow-blue-500/20",
    // },
  ]

  const achievements = [
    { icon: TrendingUp, text: "200K+ streams across platforms", color: "text-cyan-400" },
    { icon: Award, text: "Featured in 15+ editorial playlists", color: "text-purple-400" },
    { icon: Heart, text: "Growing fanbase in 25+ countries", color: "text-pink-400" },
  ]

  return (
    <section
      id="music"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -35, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Enhanced Section Header */}
        <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" variants={cardVariants}>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/10 mb-6 sm:mb-8"
            variants={cardVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse" />
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">Stream Everywhere</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 tracking-tight">
            <span className="text-white">Listen to My</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
              Music
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium mb-8 sm:mb-12 px-4">
            Experience the evolution of Rapping across all major streaming platforms. From raw street narratives
            to polished productions, discover the sound that's reshaping Chicago's hip-hop scene.
          </p>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl"
                variants={cardVariants}
                custom={index}
              >
                <achievement.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${achievement.color} flex-shrink-0`} />
                <span className="text-white/80 text-sm sm:text-base font-medium text-center sm:text-left">
                  {achievement.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Platform Cards */}
        <div className="space-y-4 sm:space-y-6">
          {platforms.map((platform, index) => (
            <motion.div key={platform.name} variants={cardVariants} custom={index}>
              <Link href={platform.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div
                  className={`relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/8 via-white/[0.03] to-transparent backdrop-blur-2xl border ${platform.borderColor} ${platform.hoverColor} transition-all duration-700 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl ${platform.shadowColor} hover:from-white/10`}
                >
                  {/* Premium Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl" />

                  {/* Card Content */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                    {/* Mobile Layout */}
                    <div className="block sm:hidden space-y-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`relative flex-shrink-0 w-14 h-14 rounded-xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg ${platform.shadowColor}`}
                        >
                          <platform.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                            {platform.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-white/60 mt-1">
                            <Music className="h-3 w-3" />
                            <span>{platform.stats}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed">{platform.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-purple-400 font-medium">
                          <Play className="h-4 w-4" />
                          <span>Listen Now</span>
                        </div>
                        <div className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                          {platform.additionalInfo}
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center">
                      {/* Platform Icon */}
                      <div
                        className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl ${platform.shadowColor}`}
                      >
                        <platform.icon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>

                      {/* Platform Info */}
                      <div className="flex-1 ml-4 sm:ml-6 lg:ml-8 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                            {platform.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm sm:text-base text-white/60">
                            <Music className="h-4 w-4" />
                            <span>{platform.stats}</span>
                          </div>
                        </div>

                        <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 leading-relaxed">
                          {platform.description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-2 text-sm sm:text-base text-purple-400 font-medium">
                            <Play className="h-4 w-4" />
                            <span>Listen Now</span>
                          </div>
                          <div className="text-xs sm:text-sm text-white/50 bg-white/10 px-3 py-1 rounded-full w-fit">
                            {platform.additionalInfo}
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex-shrink-0 ml-4">
                        <Button
                          variant="ghost"
                          size="lg"
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-purple-500/20 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110 shadow-lg"
                        >
                          <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-purple-400 transition-colors" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Effects */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div className="text-center mt-12 sm:mt-16 md:mt-20" variants={cardVariants}>
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto shadow-2xl shadow-black/20">
            <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 mb-6 sm:mb-8">
              <Users className="h-4 h-4 sm:h-5 sm:w-5 text-purple-400" />
              <span className="text-white font-semibold text-sm sm:text-base">Join 200K+ fans worldwide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Be Part of the Movement
            </h3>

            <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              From Chicago to the world, Jae Kush's music is creating waves across cultures and continents. Don't just
              listen – become part of the Rapping legacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
             
            
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
