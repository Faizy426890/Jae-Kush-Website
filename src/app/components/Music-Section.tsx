"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, AirplayIcon as Spotify, Apple, Headphones, ExternalLink, Play, Users, Music } from "lucide-react"

export default function MusicSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const platforms = [
    {
      name: "Spotify",
      icon: Spotify,
      link: "https://open.spotify.com/artist/blacruby",
      description: "Stream my complete discography",
      stats: "50K+ monthly listeners",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-500/60",
    },
    {
      name: "YouTube Music",
      icon: Youtube,
      link: "https://www.youtube.com/@blacruby9509",
      description: "Official music videos & performances",
      stats: "100K+ views",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      hoverColor: "hover:border-red-500/60",
    },
    {
      name: "Apple Music",
      icon: Apple,
      link: "https://music.apple.com/artist/blacruby",
      description: "High-quality streaming experience",
      stats: "Featured artist",
      color: "from-gray-400 to-gray-500",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      hoverColor: "hover:border-gray-500/60",
    },
    {
      name: "Pandora",
      icon: Headphones,
      link: "https://www.pandora.com/artist/blacruby",
      description: "Discover similar artists & stations",
      stats: "Radio ready",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-500/60",
    },
  ]

  return (
    <section
      id="music"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-blac-ruby-deep-purple/20 via-blac-ruby-black to-blac-ruby-dark-blue/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blac-ruby-neon/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blac-ruby-neon/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blac-ruby-purple/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blac-ruby-neon to-white bg-clip-text text-transparent mb-4">
            Listen to My Music
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Stream my latest tracks across all major platforms and discover the sound of Street Elegance
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="space-y-6">
          {platforms.map((platform, index) => (
            <motion.div key={platform.name} variants={cardVariants} custom={index}>
              <Link href={platform.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border ${platform.borderColor} ${platform.hoverColor} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20`}
                >
                  {/* Card Content */}
                  <div className="flex items-center p-6 md:p-8">
                    {/* Platform Icon */}
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <platform.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </div>

                    {/* Platform Info */}
                    <div className="flex-1 ml-6 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blac-ruby-neon transition-colors duration-300">
                          {platform.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-white/60">
                          <Music className="h-4 w-4" />
                          <span>{platform.stats}</span>
                        </div>
                      </div>
                      <p className="text-white/70 text-base md:text-lg mb-3">{platform.description}</p>
                      <div className="flex items-center gap-2 text-sm text-blac-ruby-neon">
                        <Play className="h-4 w-4" />
                        <span className="font-medium">Listen Now</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0 ml-4">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-blac-ruby-neon/20 border border-white/20 hover:border-blac-ruby-neon/50 transition-all duration-300 group-hover:scale-110"
                      >
                        <ExternalLink className="h-5 w-5 text-white group-hover:text-blac-ruby-neon transition-colors" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Bottom Border Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div className="text-center mt-16" variants={cardVariants}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blac-ruby-neon/20 to-blac-ruby-purple/20 border border-blac-ruby-neon/30">
            <Users className="h-5 w-5 text-blac-ruby-neon" />
            <span className="text-white font-medium">Join 200K+ fans worldwide</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
