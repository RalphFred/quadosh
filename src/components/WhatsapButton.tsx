"use client"
import { useState } from "react"
import whatsappLogo from "../assets/images/whatsap-logo.svg"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  showTooltip?: boolean
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hello! I'm interested in your services.",
  showTooltip = true,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Format phone number (remove any non-digits and ensure it starts with country code)
  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    return cleaned
  }

  const whatsappUrl = `https://wa.me/${formatPhoneNumber(phoneNumber)}?text=${encodeURIComponent(message)}`

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contact us on WhatsApp"
        >
          {/* <MessageCircle className="w-7 h-7" /> */}
          <img src={whatsappLogo} alt="Whatsapp Logo" width={28} height={28} className='size-7'/>


          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

          {/* Tooltip */}
          {showTooltip && (
            <div
              className={`absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-200 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          )}
        </a>
      </div>
    </>
  )
}