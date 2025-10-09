"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappNumber = "5582996335151" // Número correto da Romanos Barbearia
  const message = "Olá! Gostaria de agendar um horário na Romanos Barbearia."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="text-lg">AGENDE POR WHATSAPP</span>
    </button>
  )
}
