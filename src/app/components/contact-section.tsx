"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, MapPin, Clock, Sparkles, Crown, Diamond, Mic } from "lucide-react"
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

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <>
      <section
        id="contact"
        className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-black via-slate-950 to-gray-900 overflow-hidden"
      >
        {/* Luxury Background Effects */}
        <div className="absolute inset-0 z-0">
          {/* Premium Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/6 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/15 via-yellow-600/10 to-orange-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 60, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-gradient-to-r from-red-900/20 via-crimson-800/15 to-red-700/20 rounded-full blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-slate-700/10 via-gray-600/15 to-slate-800/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Luxury Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 text-amber-400/40"
            variants={floatingVariants}
            animate="animate"
          >
            <Crown className="w-10 h-10" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-20 text-yellow-500/40"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          >
            <Diamond className="w-8 h-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 text-red-400/40"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 4 }}
          >
            <Mic className="w-12 h-12" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/3 text-amber-300/30"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          {/* Premium Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* Luxury Mesh Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-red-900/10" />
        </div>

        <div className="max-w-8xl mx-auto relative z-10">
          {/* Premium Header Section */}
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-600/5 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 mb-10 shadow-2xl shadow-amber-500/10"
              variants={itemVariants}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                variants={pulseVariants}
                animate="animate"
              />
              <Crown className="w-6 h-6 text-amber-400" />
              <span className="text-sm font-bold text-amber-100 tracking-wider uppercase">Elite Collaboration</span>
              <Diamond className="w-5 h-5 text-yellow-400" />
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                variants={pulseVariants}
                animate="animate"
                transition={{ delay: 1 }}
              />
            </motion.div>

            <motion.h2
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 tracking-tight leading-none"
              variants={itemVariants}
            >
              <span className="text-white drop-shadow-2xl">Let's</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 drop-shadow-2xl animate-pulse">
                Connect
              </span>
            </motion.h2>

            <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-medium mb-6">
                Ready to create something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 font-bold">
                  legendary
                </span>
                ?
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether it's booking shows, collaborations, or business ventures – let's build something extraordinary
                together.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Premium Contact Info - Left Side */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Main Luxury Contact Card */}
              <motion.div
                className="group relative bg-gradient-to-br from-slate-900/80 via-gray-900/60 to-black/80 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-10 hover:border-amber-400/40 transition-all duration-700 shadow-2xl shadow-black/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-yellow-600/3 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-500">
                      <Mail className="w-10 h-10 text-black font-bold" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2">Elite Contact</h3>
                      <p className="text-amber-200 font-semibold text-lg">Professional Inquiries Only</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 border border-amber-500/10 backdrop-blur-xl hover:border-amber-400/30 transition-all duration-500 group/item">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover/item:shadow-amber-500/40 transition-all duration-300">
                        <Mail className="w-7 h-7 text-black font-bold" />
                      </div>
                      <div>
                        <p className="text-amber-200/70 text-sm font-bold uppercase tracking-widest mb-1">
                          Direct Email
                        </p>
                        <p className="text-white font-bold text-xl">Bookingjaekush@gmailcom</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 border border-red-500/10 backdrop-blur-xl hover:border-red-400/30 transition-all duration-500 group/item">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25 group-hover/item:shadow-red-500/40 transition-all duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-red-200/70 text-sm font-bold uppercase tracking-widest mb-1">Based In</p>
                        <p className="text-white font-bold text-xl">Chicago</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 border border-green-500/10 backdrop-blur-xl hover:border-green-400/30 transition-all duration-500 group/item">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover/item:shadow-green-500/40 transition-all duration-300">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-green-200/70 text-sm font-bold uppercase tracking-widest mb-1">
                          Response Time
                        </p>
                        <p className="text-white font-bold text-xl">Within 12 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Premium Services Card */}
              <motion.div
                className="bg-gradient-to-br from-amber-500/10 via-yellow-600/5 to-orange-500/10 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-10 shadow-2xl shadow-amber-500/10"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-8">
                  <Crown className="w-8 h-8 text-amber-400" />
                  <h4 className="text-2xl font-black text-white">Premium Services</h4>
                </div>
                <ul className="space-y-5">
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
                      className={`flex items-center gap-6 p-5 rounded-2xl bg-gradient-to-r from-slate-800/40 to-gray-800/40 border ${item.accent} backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 group`}
                      whileHover={{ x: 5 }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-white font-semibold text-lg group-hover:text-amber-200 transition-colors duration-300">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Premium Contact Form - Right Side */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <div className="relative bg-gradient-to-br from-slate-900/90 via-gray-900/80 to-black/90 backdrop-blur-2xl border border-amber-500/20 rounded-3xl p-10 md:p-16 shadow-2xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/3 via-yellow-600/2 to-orange-500/3 rounded-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_70%)] rounded-3xl" />

                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 mb-6">
                      <Diamond className="w-5 h-5 text-amber-400" />
                      <span className="text-amber-200 font-bold text-sm uppercase tracking-wider">Premium Contact</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                      Send Your{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                        Message
                      </span>
                    </h3>
                    <p className="text-gray-300 text-xl leading-relaxed">
                      Ready to discuss your next big project? Let's make it happen.
                    </p>
                  </div>

                  <form id="contact-form" action={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <label
                          htmlFor="name"
                          className="text-amber-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="h-16 bg-slate-800/60 border-amber-500/20 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400/20 rounded-2xl text-lg backdrop-blur-xl font-medium hover:border-amber-400/40 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-4">
                        <label
                          htmlFor="email"
                          className="text-amber-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="h-16 bg-slate-800/60 border-yellow-500/20 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 rounded-2xl text-lg backdrop-blur-xl font-medium hover:border-yellow-400/40 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label
                        htmlFor="subject"
                        className="text-amber-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="h-16 bg-slate-800/60 border-orange-500/20 text-white placeholder:text-gray-400 focus:border-orange-400 focus:ring-orange-400/20 rounded-2xl text-lg backdrop-blur-xl font-medium hover:border-orange-400/40 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-4">
                      <label
                        htmlFor="message"
                        className="text-amber-200 text-sm font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={7}
                        className="bg-slate-800/60 border-red-500/20 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400/20 rounded-2xl text-lg resize-none backdrop-blur-xl font-medium hover:border-red-400/40 transition-all duration-300"
                        placeholder="Tell me about your project, booking request, collaboration idea, or business opportunity. Be specific about your vision and timeline..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-20 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 text-black font-black text-xl rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group border-0 shadow-xl shadow-amber-500/20"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-4">
                          <div className="w-7 h-7 border-3 border-black/30 border-t-black rounded-full animate-spin"></div>
                          <span>Sending Your Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <Crown className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                          <span>Send Elite Message</span>
                          <Send className="w-7 h-7 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
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
          borderRadius: "20px",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,215,0,0.2)",
          background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.9) 100%)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
        }}
      />
    </>
  )
}
