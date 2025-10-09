"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Smartphone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAppSection = () => {
    const appSection = document.getElementById("app-download")
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <Image
              src="/images/logo-romanos-hd.jpeg"
              alt="Romanos Barbearia Logo"
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-2xl shadow-amber-500/20 sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]"
              priority
            />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">ROMANOS</span>
            <br />
            <span className="text-zinc-300">BARBEARIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-3 sm:mb-4 font-light">Conceito & Elegância</p>

          <p className="text-base sm:text-lg text-zinc-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Serviço Personalizado com a tradição dos grandes mestres barbeiros. Transformamos seu visual com técnicas
            clássicas e modernas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0 relative mb-8 sm:mb-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-5 text-xl font-bold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 relative z-20 border-2 border-amber-400"
              onClick={scrollToAppSection}
            >
              <Smartphone className="mr-3 h-6 w-6" />
              Agendar pelo App
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white hover:border-green-600 px-6 py-4 text-base font-medium rounded-full transition-all duration-300 bg-transparent relative z-20"
              onClick={() =>
                window.open(
                  "https://wa.me/5582996335151?text=Olá! Gostaria de agendar um horário na Romanos Barbearia.",
                  "_blank",
                )
              }
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
