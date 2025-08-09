"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MenuIcon, X, Sparkles, Star } from "lucide-react"
import MusicSection from "./components/Music-Section"
import SocialSection from "./components/Social"
import ContactSection from "./components/contact-section"
import HeroSection from "./components/Hero-section"
import OutNowSection from "./components/outnow-section"
import { useState } from "react"

export default function BlacRubyPortfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Function to handle navigation and close sidebar
  const handleNavClick = (sectionId: string) => {
    setIsSidebarOpen(false)
    // Small delay to allow sidebar to start closing before scrolling
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  // Variants for animations
  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const subheadingVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  }

  const textLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  const sectionRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const cardItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  }

  // Enhanced about section variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  // Updated card styling for a cleaner, professional look
  const cardBaseClasses = "bg-blac-ruby-card-bg border border-white/10 rounded-xl shadow-lg shadow-black/20"
  const cardHoverClasses = "hover:scale-[1.02] transition-transform duration-300 ease-in-out"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blac-ruby-dark-blue to-blac-ruby-deep-purple text-white font-sans overflow-hidden">
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-blac-ruby-black/95 backdrop-blur-md z-50 md:hidden border-r border-white/10"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <Link href="#" className="text-2xl font-bold text-blac-ruby-neon">
                    Jae Kush
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-white hover:text-blac-ruby-neon"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-2 p-6">
                  <button
                    onClick={() => handleNavClick("hero")}
                    className="text-left text-lg text-white hover:text-blac-ruby-neon transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => handleNavClick("bio")}
                    className="text-left text-lg text-white hover:text-blac-ruby-neon transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleNavClick("music")}
                    className="text-left text-lg text-white hover:text-blac-ruby-neon transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    Music
                  </button>
                  <button
                    onClick={() => handleNavClick("socials")}
                    className="text-left text-lg text-white hover:text-blac-ruby-neon transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    Socials
                  </button>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="text-left text-lg text-white hover:text-blac-ruby-neon transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    Contact
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full bg-blac-ruby-black/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
        <Link href="#" className="text-2xl font-bold text-blac-ruby-neon">
          Jae Kush
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="hover:text-blac-ruby-neon transition-colors text-lg">
            Home
          </Link>
          <Link href="#bio" className="hover:text-blac-ruby-neon transition-colors text-lg">
            About
          </Link>
          <Link href="#music" className="hover:text-blac-ruby-neon transition-colors text-lg">
            Music
          </Link>
          <Link href="#socials" className="hover:text-blac-ruby-neon transition-colors text-lg">
            Socials
          </Link>
          <Link href="#contact" className="hover:text-blac-ruby-neon transition-colors text-lg">
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden text-white hover:text-blac-ruby-neon"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>

      <main>
        {/* Hero Section - Now a separate component */}
        <HeroSection />

        {/* Enhanced Bio Section */}
        <section
          id="bio"
          className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 border border-blac-ruby-neon/20 rounded-full"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 border border-blac-ruby-crimson/20 rounded-lg rotate-45"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-blac-ruby-neon/10 to-blac-ruby-crimson/10 rounded-full blur-xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
            />

            {/* Sparkle effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 12}%`,
                }}
                variants={sparkleVariants}
                animate="animate"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <Sparkles className="w-4 h-4 text-blac-ruby-neon/40" />
              </motion.div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blac-ruby-deep-purple/30 via-transparent to-blac-ruby-dark-blue/30" />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionRevealVariants}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blac-ruby-neon/10 to-blac-ruby-crimson/10 border border-blac-ruby-neon/20 mb-6"
                variants={headingVariants}
              >
                <Star className="w-5 h-5 text-blac-ruby-neon" />
                <span className="text-blac-ruby-neon font-semibold tracking-wide">ARTIST SPOTLIGHT</span>
                <Star className="w-5 h-5 text-blac-ruby-neon" />
              </motion.div>

              <motion.h2
                className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-blac-ruby-neon to-blac-ruby-crimson bg-clip-text text-transparent leading-tight"
                variants={headingVariants}
              >
                About
                <br />
                <span className="italic font-light">Jae Kush</span>
              </motion.h2>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <motion.div
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={sectionRevealVariants}
              >
                {/* Premium Card Container */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-purple-900/20 to-slate-800/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blac-ruby-neon/10">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blac-ruby-neon/20 via-transparent to-blac-ruby-crimson/20 p-[1px]">
                    <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-800/90" />
                  </div>

                  <div className="relative z-10">
                    {/* Origin Story */}
                    <motion.div className="mb-8" variants={subheadingVariants}>
                      <h3 className="text-2xl font-bold text-blac-ruby-neon mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blac-ruby-neon rounded-full animate-pulse" />
                        Origin Story
                      </h3>
                      <div className="text-xl text-white/90 leading-relaxed font-light">
                        {"Jovan Jones — Born on the southside of Chicago, raised in the Roseland community in a single parent household."
                          .split(" ")
                          .map((word, i) => (
                            <motion.span
                              key={i}
                              custom={i}
                              variants={textLineVariants}
                              className="inline-block mr-1 hover:text-blac-ruby-neon transition-colors duration-300"
                            >
                              {word}
                            </motion.span>
                          ))}
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blac-ruby-neon/50 to-transparent mb-8" />

                    {/* Artist Statement */}
                    <motion.div variants={subheadingVariants}>
                      <h3 className="text-2xl font-bold text-blac-ruby-crimson mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blac-ruby-crimson rounded-full animate-pulse" />
                        The Artist
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed font-light">
                        Jae Kush embodies the fusion of street elegance and raw dedication. With over a decade in the
                        music scene, his journey from Chicago has been a vessel for relentless grind and a passionate
                        commitment to his craft. His unique sound and powerful presence set him apart, making him a
                        force to be reckoned with in the hip-hop world.
                      </p>
                    </motion.div>

                    {/* Stats/Highlights */}
                    <motion.div
                      className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10"
                      variants={subheadingVariants}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blac-ruby-neon mb-1">10+</div>
                        <div className="text-sm text-white/60 uppercase tracking-wide">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blac-ruby-crimson mb-1">∞</div>
                        <div className="text-sm text-white/60 uppercase tracking-wide">Dedication</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Image Section */}
              <motion.div
                className="relative flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Floating elements around image */}
                <motion.div
                  className="absolute -top-8 -left-8 w-16 h-16 border-2 border-blac-ruby-neon/30 rounded-full"
                  variants={floatingVariants}
                  animate="animate"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-blac-ruby-crimson/20 to-blac-ruby-neon/20 rounded-lg rotate-45"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "1.5s" }}
                />

                {/* Main image container with premium styling */}
                <div className="relative">
                  {/* Glowing backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blac-ruby-neon/20 to-blac-ruby-crimson/20 rounded-full blur-3xl scale-110" />

                  {/* Image frame */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-blac-ruby-neon/20">
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blac-ruby-neon/10 via-transparent to-blac-ruby-crimson/10 z-10" />

                    <Image
                      src="/profile.png"
                      alt="Jae Kush Portrait"
                      fill
                      className="object-cover z-0 hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                  </div>

                  {/* Floating name tag */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-blac-ruby-black/90 to-slate-900/90 backdrop-blur-xl rounded-full border border-blac-ruby-neon/30 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <span className="text-blac-ruby-neon font-bold text-lg tracking-wide">JAE KUSH</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Music Links Section - Now a separate component */}
        <MusicSection />

        {/* Callout for Street Elegance */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blac-ruby-dark-blue to-blac-ruby-deep-purple relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg leading-tight"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionRevealVariants}
            >
              Turn your struggles into verses <br className="hidden md:block" />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blac-ruby-crimson to-blac-ruby-neon">
                Jae Kush
              </span>
            </motion.h2>
          </div>
        </section>

        {/* Social Handles Section */}
        {/* <SocialSection /> */}

        <OutNowSection />

        {/* Fan Quote Block */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blac-ruby-dark-blue to-blac-ruby-deep-purple relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative text-2xl md:text-3xl italic font-medium text-white/90 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionRevealVariants}
            >
              <span className="absolute left-0 top-0 text-6xl text-blac-ruby-neon opacity-50 -translate-x-8">"</span>
              <p className="px-10">
                Supporters expect me to go hard with my grind and never let up — what makes me different is my story,
                dedication, and my drive to lead my brand to the top.
              </p>
              <span className="absolute right-0 bottom-0 text-6xl text-blac-ruby-neon opacity-50 translate-x-8">"</span>
            </motion.div>
            <motion.p
              className="mt-8 text-lg font-semibold text-blac-ruby-neon"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={subheadingVariants}
            >
              — Jae Kush
            </motion.p>
          </div>
        </section>

        {/* Contact CTA Section */}
        {/* <section
          id="contact"
          className="py-20 px-6 md:px-12 bg-gradient-to-br from-blac-ruby-deep-purple to-blac-ruby-dark-blue relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-blac-ruby-neon"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={headingVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-lg text-white/80 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={subheadingVariants}
            >
              For bookings, collaborations, or inquiries, feel free to reach out.
            </motion.p>
            <motion.div
              className={`${cardBaseClasses} inline-flex items-center p-4 space-x-4`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionRevealVariants}
            >
              <Mail className="h-8 w-8 text-blac-ruby-neon" />
              <Link
                href="mailto:blacruby271@gmail.com"
                className="text-xl md:text-2xl font-semibold text-white hover:text-blac-ruby-neon transition-colors"
              >
                blacruby271@gmail.com
              </Link>
            </motion.div>
          </div>
        </section> */}
      </main>

      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-white/60 text-sm border-t border-white/10 bg-blac-ruby-black">
        <p>&copy; {new Date().getFullYear()} Jae Kush. All rights reserved.</p>
        <p className="mt-2">Designed by {"<3"}BlazeTech Solutions</p>
      </footer>
    </div>
  )
}
