"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, Mail, TwitterIcon as TikTok, MessageCircle, Users, Heart } from "lucide-react"

export default function SocialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
    },
  }

  const socialPlatforms = [
    {
      name: "Instagram",
      handle: "@rarelymade_ruby",
      icon: Instagram,
      link: "https://www.instagram.com/rarelymade_ruby",
      description: "Behind the scenes & daily life",
      stats: "25K followers",
      color: "from-pink-500 to-purple-600",
      position: "top-left",
    },
    {
      name: "YouTube",
      handle: "@blacruby9509",
      icon: Youtube,
      link: "https://www.youtube.com/@blacruby9509",
      description: "Music videos & vlogs",
      stats: "100K subscribers",
      color: "from-red-500 to-red-600",
      position: "top-right",
    },
    {
      name: "TikTok",
      handle: "@blac.ruby",
      icon: TikTok,
      link: "https://www.tiktok.com/@blac.ruby",
      description: "Short clips & trends",
      stats: "50K followers",
      color: "from-gray-800 to-gray-900",
      position: "bottom-left",
    },
    {
      name: "Email",
      handle: "blacruby271@gmail.com",
      icon: Mail,
      link: "mailto:blacruby271@gmail.com",
      description: "Business inquiries & bookings",
      stats: "Direct contact",
      color: "from-blue-500 to-blue-600",
      position: "bottom-right",
    },
  ]

  return (
    <section
      id="socials"
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-blac-ruby-dark-blue/30 via-blac-ruby-black to-blac-ruby-deep-purple/30 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blac-ruby-neon/3 via-transparent to-transparent" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Connect with Blac Ruby.
            <br />
            <span className="text-white/80">Join the movement.</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Follow my journey, get exclusive content, and be part of the Street Elegance community. From
            behind-the-scenes moments to business collaborations, let's stay connected across all platforms.
          </p>
        </motion.div>

        {/* Social Network Layout */}
        <div className="relative">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <motion.path
              d="M 200 150 Q 400 100 600 150"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M 200 350 Q 400 400 600 350"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M 200 150 Q 300 250 200 350"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />
            <motion.path
              d="M 600 150 Q 700 250 600 350"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              variants={lineVariants}
            />

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BF00FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF0080" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4A006F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#BF00FF" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#BF00FF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8B0000" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF0080" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4A006F" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Social Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {socialPlatforms.map((platform, index) => (
              <motion.div key={platform.name} variants={cardVariants} custom={index} className="group">
                <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 p-6 md:p-8">
                    {/* Platform Icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <platform.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white group-hover:text-blac-ruby-neon transition-colors duration-300">
                          {platform.name}
                        </h3>
                        <p className="text-blac-ruby-neon text-sm font-medium">{platform.handle}</p>
                      </div>
                    </div>

                    {/* Platform Info */}
                    <div className="space-y-3">
                      <p className="text-white/80 text-base leading-relaxed">{platform.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Users className="h-4 w-4" />
                          <span>{platform.stats}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blac-ruby-neon hover:text-white hover:bg-blac-ruby-neon/20 transition-all duration-300"
                        >
                          {platform.name === "Email" ? "Contact" : "Follow"}
                        </Button>
                      </div>
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <motion.div className="mt-20 text-center" variants={cardVariants}>
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-blac-ruby-neon" />
              <div>
                <p className="text-2xl font-bold text-white">200K+</p>
                <p className="text-sm text-white/60">Total Followers</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-blac-ruby-neon" />
              <div>
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-sm text-white/60">Monthly Engagement</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-12 text-center" variants={cardVariants}>
          <p className="text-white/70 text-lg mb-6">
            Be the first to know about new releases, shows, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-blac-ruby-neon hover:bg-blac-ruby-neon/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="https://www.instagram.com/rarelymade_ruby" target="_blank">
                Follow on Instagram
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blac-ruby-neon text-blac-ruby-neon hover:bg-blac-ruby-neon hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
            >
              <Link href="mailto:blacruby271@gmail.com">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
