"use server"

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "weathersportifyteam@gmail.com",
    pass: "stnyiaraqnatomgs",
  },
})

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "All fields are required",
      }
    }

    const mailOptions = {
      from: '"Jae Kush Team" <weathersportifyteam@gmail.com>',
      to: "Bookingjaekush@gmailcom",
      subject: `🎵 New Contact: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #00d4ff 0%, #ff0080 50%, #7928ca 100%); padding: 40px 30px; text-align: center; position: relative;">
            <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; display: inline-block;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: white; text-shadow: 0 2px 10px rgba(0,0,0,0.3); letter-spacing: -0.5px;">✨ New Message</h1>
              <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 16px; font-weight: 500;">From Blac Ruby Portfolio</p>
            </div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            
            <!-- Sender Info Card -->
            <div style="background: linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(255,0,128,0.1) 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 25px; margin-bottom: 25px; backdrop-filter: blur(10px);">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #00d4ff 0%, #ff0080 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px;">
                  <span style="color: white; font-size: 20px; font-weight: bold;">👤</span>
                </div>
                <div>
                  <h2 style="margin: 0; color: #00d4ff; font-size: 24px; font-weight: 700;">${name}</h2>
                  <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.7); font-size: 16px;">${email}</p>
                </div>
              </div>
            </div>
            
            <!-- Subject Card -->
            <div style="background: linear-gradient(135deg, rgba(255,0,128,0.1) 0%, rgba(121,40,202,0.1) 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 25px; margin-bottom: 25px; backdrop-filter: blur(10px);">
              <div style="display: flex; align-items: center; margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #ff0080 0%, #7928ca 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 16px;">📋</span>
                </div>
                <h3 style="margin: 0; color: #ff0080; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Subject</h3>
              </div>
              <p style="margin: 0; color: white; font-size: 20px; font-weight: 600; line-height: 1.4;">${subject}</p>
            </div>
            
            <!-- Message Card -->
            <div style="background: linear-gradient(135deg, rgba(121,40,202,0.1) 0%, rgba(0,212,255,0.1) 100%); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 25px; margin-bottom: 30px; backdrop-filter: blur(10px);">
              <div style="display: flex; align-items: center; margin-bottom: 20px;">
                <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #7928ca 0%, #00d4ff 100%); border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
                  <span style="color: white; font-size: 16px;">💬</span>
                </div>
                <h3 style="margin: 0; color: #7928ca; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
              </div>
              <div style="background: rgba(0,0,0,0.2); border-radius: 12px; padding: 20px; border-left: 4px solid #00d4ff;">
                <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #ff0080 50%, #7928ca 100%); color: white; text-decoration: none; padding: 15px 30px; border-radius: 50px; font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 10px 30px rgba(0,212,255,0.3); transition: all 0.3s ease;">
                Reply to ${name} ↗
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: rgba(0,0,0,0.3); padding: 25px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: rgba(255,255,255,0.6); font-size: 14px; line-height: 1.5;">
              This email was sent from the <strong style="color: #00d4ff;">Blac Ruby</strong> portfolio contact form.<br>
              <span style="color: rgba(255,255,255,0.4);">Sent with ❤️ by Blacc Ruby Team</span>
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "🎉 Message sent successfully! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      message: "❌ Failed to send message. Please try again later.",
    }
  }
}
