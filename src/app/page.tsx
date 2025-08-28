"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, X } from "lucide-react"
import MusicSection from "./components/Music-Section"
import ContactSection from "./components/contact-section"
import HeroSection from "./components/Hero-section"
import OutNowSection from "./components/outnow-section"
import { useState, useEffect } from "react"
import AboutSection from "./components/About"

export default function BlacRubyPortfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle navigation and close sidebar
  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false)
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

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

  // Lighter animation variants
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

  // Sidebar animation variants
  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-900 text-white font-sans overflow-hidden relative">
      {/* Checkered Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}
        />
      </div>

      {/* Subtle geometric overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/10 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/15 rounded-lg rotate-45" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-white/10 rounded-full" />
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-slate-950/95 backdrop-blur-xl z-50 md:hidden border-r border-white/10 shadow-2xl"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-purple-900/20 to-transparent">
                  <Link
                    href="#"
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    Louie Z
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-white hover:text-blue-400 hover:bg-white/5 rounded-full"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-1 p-6">
                  {[
                    { label: "Home", id: "hero" },
                    { label: "About", id: "bio" },
                    { label: "Music", id: "music" },
                    { label: "Socials", id: "socials" },
                    { label: "Contact", id: "contact" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className="text-left text-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 py-4 px-4 rounded-xl group relative overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">{item.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Professional Glassy Navbar */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Louie Z
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "bio" },
                { label: "Music", id: "music" },
                { label: "Socials", id: "socials" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 rounded-lg group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  <span className="relative z-10 font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-6 py-2 rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                onClick={() => handleNavClick("contact")}
              >
                Let's Chat
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden text-white hover:text-blue-400 hover:bg-white/5 rounded-full p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <HeroSection />
        <AboutSection />

        {/* Enhanced Bio Section with Dark Grid Background */}
        {/* <section
          id="bio"
          className="relative py-24 px-6 md:px-12 overflow-hidden"
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

          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-slate-600/20 rounded-full" />
            <div className="absolute top-40 right-20 w-24 h-24 border border-slate-600/20 rounded-lg rotate-45" />
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-slate-800/30 rounded-full blur-xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
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
                <Star className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300 font-semibold tracking-wide">ARTIST SPOTLIGHT</span>
                <Star className="w-5 h-5 text-slate-400" />
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
                      className="italic font-light bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-slate-900/20 via-transparent to-slate-800/20" />

                  <div className="relative z-10">
                    <motion.div className="mb-8" variants={fadeInUp}>
                      <h3 className="text-2xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full" />
                        Origin Story
                      </h3>
                      <p className="text-xl text-slate-200 leading-relaxed font-light">
                        Zahir Jones — Born on the southside of Chicago, raised in the Roseland community in a single
                        parent household.
                      </p>
                    </motion.div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

                    <motion.div variants={fadeInUp}>
                      <h3 className="text-2xl font-bold text-slate-300 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full" />
                        The Artist
                      </h3>
                      <p className="text-lg text-slate-300 leading-relaxed font-light">
                        Jae Kush embodies the fusion of street elegance and raw dedication. With over a decade in the
                        music scene, his journey from Chicago has been a vessel for relentless grind and a passionate
                        commitment to his craft. His unique sound and powerful presence set him apart, making him a
                        force to be reckoned with in the hip-hop world.
                      </p>
                    </motion.div>

                    <motion.div
                      className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-800/50"
                      variants={fadeInUp}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-300 mb-1">10+</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wide">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-slate-300 mb-1">∞</div>
                        <div className="text-sm text-slate-500 uppercase tracking-wide">Dedication</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-800/20 rounded-full blur-2xl scale-110" />

                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl">
                    <Image
                      src="/profile.png"
                      alt="Jae Kush Portrait"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                  </div>

                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-slate-950/90 backdrop-blur-xl rounded-full border border-slate-700/50 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <span className="text-slate-300 font-bold text-lg tracking-wide">JAE KUSH</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* Music Links Section */}
        <MusicSection />

        {/* Callout for Street Elegance */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-slate-950 to-purple-950 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              Turn your struggles into verses <br className="hidden md:block" />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Louie Z
              </span>
            </motion.h2>
          </div>
        </section>

        <OutNowSection />

        {/* Fan Quote Block */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-purple-950 to-slate-950 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative text-2xl md:text-3xl italic font-medium text-white/90 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <span className="absolute left-0 top-0 text-6xl text-blue-400 opacity-50 -translate-x-8">"</span>
              <p className="px-10">
                Supporters expect me to go hard with my grind and never let up — what makes me different is my story,
                dedication, and my drive to lead my brand to the top.
              </p>
              <span className="absolute right-0 bottom-0 text-6xl text-blue-400 opacity-50 translate-x-8">"</span>
            </motion.div>
            <motion.p
              className="mt-8 text-lg font-semibold text-blue-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              — Louie Z
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
            >
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://www.instagram.com/jaekush111?igsh=MWdmZjV2NXN6OTU2dg==", "_blank")}
              >
                Follow for updates
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://www.instagram.com/jaekush111?igsh=MWdmZjV2NXN6OTU2dg==", "_blank")}
              >
                Follow on Instagram
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-white/60 text-sm border-t border-white/10 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} Louie Z. All rights reserved.</p>
        <p className="mt-2">Designed by {"<3"}BlazeTech Solutions</p>
      </footer>
    </div>
  )
}
