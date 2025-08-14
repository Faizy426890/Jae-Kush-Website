"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Clock, Crown, Diamond, Mic, Phone } from "lucide-react"
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
            background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
            color: "#000",
            fontWeight: "700",
            border: "1px solid rgba(255, 215, 0, 0.3)",
          },
        })
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
            background: "linear-gradient(135deg, #DC143C 0%, #8B0000 100%)",
            color: "white",
            fontWeight: "600",
            border: "1px solid rgba(220, 20, 60, 0.3)",
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <section
        id="contact"
        className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
      >
        {/* Optimized Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Simplified Gradient Orbs */}
          <div className="absolute top-1/4 right-1/6 w-64 sm:w-80 md:w-96 lg:w-[400px] h-64 sm:h-80 md:h-96 lg:h-[400px] bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-1/4 left-1/6 w-48 sm:w-64 md:w-80 lg:w-[300px] h-48 sm:h-64 md:h-80 lg:h-[300px] bg-gradient-to-r from-red-900/15 to-red-700/15 rounded-full blur-3xl opacity-40" />

          {/* Floating Elements - Reduced for performance */}
          <motion.div
            className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-20 text-amber-400/30"
            variants={floatingVariants}
            animate="animate"
          >
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-4 sm:right-8 md:right-20 text-yellow-500/30"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <Diamond className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-1/4 text-red-400/30"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <Mic className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </motion.div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Responsive Header Section */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-xl border border-amber-500/20 mb-6 sm:mb-8 md:mb-10 shadow-xl shadow-amber-500/5"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse" />
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-400" />
              <span className="text-xs sm:text-sm font-bold text-amber-100 tracking-wider uppercase">
                Elite Collaboration
              </span>
              <Diamond className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" />
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 tracking-tight leading-none"
              variants={itemVariants}
            >
              <span className="text-white drop-shadow-2xl">Let's</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 drop-shadow-2xl">
                Connect
              </span>
            </motion.h2>

            <motion.div className="max-w-4xl mx-auto px-4" variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium mb-4 sm:mb-6">
                Ready to create something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 font-bold">
                  legendary
                </span>
                ?
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Whether it's booking shows, collaborations, or business ventures – let's build something extraordinary
                together.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Responsive Contact Info - Left Side */}
            <motion.div
              className="lg:col-span-2 space-y-6 sm:space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Optimized Contact Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-slate-900/70 via-gray-900/50 to-black/70 backdrop-blur-xl border border-amber-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:border-amber-400/40 transition-all duration-500 shadow-xl shadow-black/30"
                variants={itemVariants}
                whileHover={{ scale: 1.01, y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 to-orange-500/3 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-all duration-500">
                      <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black font-bold" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 sm:mb-2">
                        Elite Contact
                      </h3>
                      <p className="text-amber-200 font-semibold text-sm sm:text-base md:text-lg">
                        Professional Inquiries Only
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/50 to-gray-800/50 border border-amber-500/10 backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 group/item">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover/item:shadow-amber-500/30 transition-all duration-300">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black font-bold" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-amber-200/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                          Direct Email
                        </p>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl break-all">
                          Bookingjaekush@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/50 to-gray-800/50 border border-blue-500/10 backdrop-blur-xl hover:border-blue-400/30 transition-all duration-300 group/item">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/item:shadow-blue-500/30 transition-all duration-300">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                          Direct Line
                        </p>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                          +1 312 818 8320
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/50 to-gray-800/50 border border-red-500/10 backdrop-blur-xl hover:border-red-400/30 transition-all duration-300 group/item">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20 group-hover/item:shadow-red-500/30 transition-all duration-300">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-red-200/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                          Based In
                        </p>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">Chicago</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/50 to-gray-800/50 border border-green-500/10 backdrop-blur-xl hover:border-green-400/30 transition-all duration-300 group/item">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover/item:shadow-green-500/30 transition-all duration-300">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-green-200/70 text-xs sm:text-sm font-bold uppercase tracking-widest mb-1">
                          Response Time
                        </p>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                          Within 12 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Responsive Services Card */}
              <motion.div
                className="bg-gradient-to-br from-amber-500/8 via-yellow-600/4 to-orange-500/8 backdrop-blur-xl border border-amber-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-amber-500/5"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Crown className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-amber-400" />
                  <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white">Premium Services</h4>
                </div>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {[
                    {
                      icon: "🎤",
                      text: "Exclusive Live Performances",
                      color: "from-amber-400 to-yellow-500",
                      accent: "border-amber-500/20",
                    },
                    {
                      icon: "🎵",
                      text: "High-End Collaborations",
                      color: "from-red-500 to-red-600",
                      accent: "border-red-500/20",
                    },
                    {
                      icon: "📺",
                      text: "Media & Press Interviews",
                      color: "from-blue-500 to-blue-600",
                      accent: "border-blue-500/20",
                    },
                    {
                      icon: "💼",
                      text: "Strategic Partnerships",
                      color: "from-purple-500 to-purple-600",
                      accent: "border-purple-500/20",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className={`flex items-center gap-4 sm:gap-6 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-slate-800/30 to-gray-800/30 border ${item.accent} backdrop-blur-xl hover:scale-[1.01] transition-all duration-300 group`}
                      whileHover={{ x: 3 }}
                    >
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-base md:text-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-white font-semibold text-sm sm:text-base md:text-lg group-hover:text-amber-200 transition-colors duration-300">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Responsive Contact Form - Right Side */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-black/80 backdrop-blur-xl border border-amber-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/2 to-orange-500/2 rounded-2xl sm:rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.03),transparent_70%)] rounded-2xl sm:rounded-3xl" />

                <div className="relative z-10">
                  <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-amber-500/15 to-yellow-500/15 border border-amber-500/30 mb-4 sm:mb-6">
                      <Diamond className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                      <span className="text-amber-200 font-bold text-xs sm:text-sm uppercase tracking-wider">
                        Premium Contact
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                      Send Your{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                        Message
                      </span>
                    </h3>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                      Ready to discuss your next big project? Let's make it happen.
                    </p>
                  </div>

                  <form id="contact-form" action={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-3 sm:space-y-4">
                        <label
                          htmlFor="name"
                          className="text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full"></div>
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="h-12 sm:h-14 md:h-16 bg-slate-800/50 border-amber-500/20 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg backdrop-blur-xl font-medium hover:border-amber-400/40 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <label
                          htmlFor="email"
                          className="text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full"></div>
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="h-12 sm:h-14 md:h-16 bg-slate-800/50 border-yellow-500/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg backdrop-blur-xl font-medium hover:border-yellow-400/40 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <label
                        htmlFor="subject"
                        className="text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="h-12 sm:h-14 md:h-16 bg-slate-800/50 border-orange-500/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg backdrop-blur-xl font-medium hover:border-orange-400/40 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <label
                        htmlFor="message"
                        className="text-amber-200 text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full"></div>
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="bg-slate-800/50 border-red-500/20 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400/20 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg resize-none backdrop-blur-xl font-medium hover:border-red-400/40 transition-all duration-300 min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                        placeholder="Tell me about your project, booking request, collaboration idea, or business opportunity. Be specific about your vision and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 sm:h-16 md:h-18 lg:h-20 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 text-black font-black text-base sm:text-lg md:text-xl rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group border-0 shadow-lg shadow-amber-500/15"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 border-2 sm:border-3 border-black/30 border-t-black rounded-full animate-spin"></div>
                          <span>Sending Your Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 sm:gap-4">
                          <Crown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:rotate-6 transition-transform duration-300" />
                          <span>Send Elite Message</span>
                          <Send className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
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
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,215,0,0.2)",
          background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.9) 100%)",
          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.7)",
        }}
      />
    </>
  )
}
