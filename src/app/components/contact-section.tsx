"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Clock, Star, Sparkles, Music, Zap } from "lucide-react"
import { sendContactEmail } from "@/lib/sendMail"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          style: {
            background: "linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)",
            color: "white",
            fontWeight: "600",
          },
        })

        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          style: {
            background: "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)",
            color: "white",
            fontWeight: "600",
          },
        })
      }
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
      y: [-8, 8, -8],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <section
        id="contact"
        className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-slate-950 via-purple-950 to-black overflow-hidden"
      >
        {/* Advanced Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute top-20 left-20 text-cyan-400/30"
            variants={floatingVariants}
            animate="animate"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-pink-400/30"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <Music className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 text-purple-400/30"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          >
            <Zap className="w-6 h-6" />
          </motion.div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 mb-8"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">Let's Create Something Amazing</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight"
              variants={itemVariants}
            >
              <span className="text-white">Get In</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
                Touch
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium"
              variants={itemVariants}
            >
              Ready to collaborate, book a show, or discuss your next big project?
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                Let's make magic happen together.
              </span>
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Info - Left Side */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Main Contact Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Let's Connect</h3>
                      <p className="text-white/60 font-medium">Professional Inquiries</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm font-semibold uppercase tracking-wider">Email</p>
                        <p className="text-white font-semibold text-lg">blacruby271@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm font-semibold uppercase tracking-wider">Location</p>
                        <p className="text-white font-semibold text-lg">Atlanta, GA</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/50 text-sm font-semibold uppercase tracking-wider">Response Time</p>
                        <p className="text-white font-semibold text-lg">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Services Card */}
              <motion.div
                className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-xl font-bold text-white">What I Offer</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: "🎤", text: "Live Performances & Shows", color: "from-cyan-400 to-blue-500" },
                    { icon: "🎵", text: "Music Collaborations", color: "from-purple-400 to-pink-500" },
                    { icon: "📺", text: "Media & Interviews", color: "from-pink-400 to-red-500" },
                    { icon: "🤝", text: "Business Partnerships", color: "from-blue-400 to-purple-500" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-lg`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-white/90 font-medium">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />

                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Send Me a Message</h3>
                    <p className="text-white/70 text-lg">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form id="contact-form" action={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label htmlFor="name" className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl text-lg backdrop-blur-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl text-lg backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-pink-400 focus:ring-pink-400/20 rounded-xl text-lg backdrop-blur-sm"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl text-lg resize-none backdrop-blur-sm"
                        placeholder="Tell me about your project, booking request, collaboration idea, or anything else you'd like to discuss..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group border-0"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending Your Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <span>Send Message</span>
                          <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </div>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          borderRadius: "16px",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />
    </>
  )
}
