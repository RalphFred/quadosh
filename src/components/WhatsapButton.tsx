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
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(9,42,55,0.24)] transition hover:-translate-y-1 hover:bg-[#20bd5a]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Contact us on WhatsApp"
        >
          <img src={whatsappLogo} alt="" width={28} height={28} className='size-7'/>


          {/* Pulse animation */}
          {/* Tooltip */}
          {showTooltip && (
            <div
              className={`absolute right-full mr-3 whitespace-nowrap rounded-lg bg-night px-3 py-2 text-sm text-white shadow-lg transition-all duration-200 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 size-2 -translate-y-1/2 translate-x-1 rotate-45 bg-night"></div>
            </div>
          )}
        </a>
      </div>
    </>
  )
}
