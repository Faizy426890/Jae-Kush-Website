"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MenuIcon } from "lucide-react"
import MusicSection from "./components/Music-Section"
import SocialSection from "./components/Social" 
import ContactSection from "./components/contact-section"
import HeroSection from "./components/Hero-section" 
import OutNowSection from "./components/outnow-section"

export default function BlacRubyPortfolio() {
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

  // Updated card styling for a cleaner, professional look
  const cardBaseClasses = "bg-blac-ruby-card-bg border border-white/10 rounded-xl shadow-lg shadow-black/20"
  const cardHoverClasses = "hover:scale-[1.02] transition-transform duration-300 ease-in-out"

  return (
    <div className="min-h-screen bg-gradient-to-br from-blac-ruby-dark-blue to-blac-ruby-deep-purple text-white font-sans overflow-hidden">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 w-full bg-blac-ruby-black/80 backdrop-blur-md py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
        <Link href="#" className="text-2xl font-bold text-blac-ruby-neon">
          Blac Ruby
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
        <Button variant="ghost" className="md:hidden text-white">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>

      <main>
        {/* Hero Section - Now a separate component */}
        <HeroSection />

        {/* Bio Section - Transformed */}
        <section
          id="bio"
          className="py-20 px-6 md:px-12 bg-gradient-to-b from-blac-ruby-dark-blue to-blac-ruby-deep-purple relative z-10"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionRevealVariants}
            >
              <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-blac-ruby-neon" variants={headingVariants}>
                About Blac Ruby
              </motion.h2>
              <div className="text-lg text-white/80 leading-relaxed mb-4">
                {"Brianna Gibson — From Atlanta, been doing music since 15, over 10 years of grind."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span key={i} custom={i} variants={textLineVariants} className="inline-block mr-1">
                      {word}
                    </motion.span>
                  ))}
              </div>
              <motion.p className="text-md text-white/70 leading-relaxed" variants={subheadingVariants}>
                Blac Ruby embodies the fusion of street elegance and raw dedication. With over a decade in the music
                scene, her journey from Atlanta has been a testament to relentless grind and an unwavering commitment to
                her craft. Her unique sound and powerful presence set her apart, making her a force to be reckoned with
                in the hip-hop world.
              </motion.p>
            </motion.div>
            <motion.div
              className={`relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden flex items-center justify-center border border-blac-ruby-neon/50 shadow-lg shadow-blac-ruby-neon/20`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/profile.jpg"
                alt="Blac Ruby Portrait"
                layout="fill"
                objectFit="cover"
                className="z-10"
              />
            </motion.div>
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
              Founder of future label: <br className="hidden md:block" />{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blac-ruby-crimson to-blac-ruby-neon">
                Street Elegance
              </span>
            </motion.h2>
          </div>
        </section>

        {/* Social Handles Section */}
        <SocialSection/> 
        <OutNowSection/>

        {/* Fan Quote Block */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-blac-ruby-dark-blue to-blac-ruby-deep-purple relative z-10">
  <div className="max-w-4xl mx-auto text-center">
    <motion.blockquote
      className="relative text-2xl md:text-3xl italic font-medium text-white/90 leading-relaxed
                 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-6xl before:text-blac-ruby-neon before:opacity-50 before:-translate-x-8
                 after:content-['”'] after:absolute after:right-0 after:bottom-0 after:text-6xl after:text-blac-ruby-neon after:opacity-50 after:translate-x-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionRevealVariants}
    >
      <p className="px-10">
        Supporters expect me to go hard with my grind and never let up — what makes me different is my story,
        dedication, and my drive to lead my brand to the top.
      </p>
    </motion.blockquote>

    <motion.p
      className="mt-8 text-lg font-semibold text-blac-ruby-neon"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={subheadingVariants}
    >
      — Blac Ruby
    </motion.p>
  </div>
</section>

        {/* Contact CTA Section */}
        <section
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
        </section>
      </main> 
      <ContactSection/>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 text-center text-white/60 text-sm border-t border-white/10 bg-blac-ruby-black">
        <p>&copy; {new Date().getFullYear()} Blac Ruby. All rights reserved.</p>
        <p className="mt-2">Designed with {"<3"} by Vercel v0</p>
      </footer>
    </div>
  )
}
