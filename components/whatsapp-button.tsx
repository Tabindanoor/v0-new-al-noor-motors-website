"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  const phoneNumbers = [
    { number: "923009665022", display: "0300-9665022" },
    { number: "923369665022", display: "0336-9665022" },
    { number: "923129665022", display: "0312-9665022" },
    { number: "923007658022", display: "0300-7658022" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-card border border-border rounded-lg shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#25D366] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">New Al-Noor Motors</p>
                  <p className="text-white/80 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm text-muted-foreground mb-4">
              Choose a number to start chat:
            </p>
            <div className="space-y-2">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.number}
                  href={`https://wa.me/${phone.number}?text=Hi, I'm interested in your cars at New Al-Noor Motors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                  <span className="font-medium">{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {isExpanded ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
        )}
      </button>
    </div>
  )
}
