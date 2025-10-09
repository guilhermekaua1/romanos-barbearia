"use client"

import { MessageCircle, Instagram, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5582996335151?text=Olá! Gostaria de agendar um horário na Romanos Barbearia.", "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://instagram.com/romanosbarbeariaoficial", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+5582996335151", "_self")
  }

  const scrollToAppSection = () => {
    const appSection = document.getElementById("app-download")
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-amber-400">Canais</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Conecte-se conosco através dos nossos canais oficiais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div
              onClick={handleInstagramClick}
              className="bg-zinc-950 rounded-xl p-6 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-pink-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-500/20 transition-colors">
                <Instagram className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
              <p className="text-zinc-400 text-sm">Siga nosso trabalho</p>
            </div>

            <div
              onClick={handlePhoneClick}
              className="bg-zinc-950 rounded-xl p-6 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                <Smartphone className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefone</h3>
              <p className="text-zinc-400 text-sm">(82) 99633-5151</p>
            </div>

            <div
              onClick={handleWhatsAppClick}
              className="bg-zinc-950 rounded-xl p-6 border border-zinc-800 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-zinc-400 text-sm">Agendamento rápido</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Pronto para o seu novo visual?</h3>
            <p className="text-black/80 mb-6 text-lg">Agende agora mesmo e experimente o melhor da barbearia moderna</p>
            <Button
              onClick={scrollToAppSection}
              size="lg"
              className="bg-black hover:bg-zinc-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Agendar pelo App
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
