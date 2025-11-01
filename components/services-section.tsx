"use client"

import { useState, useRef } from "react"
import { Scissors, Sparkles, Crown, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [showAllServices, setShowAllServices] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const mainServices = [
    {
      icon: Scissors,
      title: "Corte",
      price: "R$ 50",
    },
    {
      icon: Scissors,
      title: "Barba",
      price: "R$ 40",
    },
    {
      icon: Sparkles,
      title: "Botox",
      price: "R$ 90",
    },
    {
      icon: Gem,
      title: "Corte + Barba",
      price: "R$ 80",
    },
  ]

  const additionalServices = [
    {
      icon: Scissors,
      title: "Pezinho",
      price: "R$ 25",
    },
    {
      icon: Crown,
      title: "Sobrancelha",
      price: "R$ 20",
    },
    {
      icon: Sparkles,
      title: "Hidratação",
      price: "R$ 25",
    },
    {
      icon: Crown,
      title: "Limpeza de pele",
      price: "R$ 35",
    },
    {
      icon: Sparkles,
      title: "Selagem",
      price: "R$ 90",
    },
    {
      icon: Sparkles,
      title: "Banho de Brilho",
      price: "R$ 35",
    },
    {
      icon: Sparkles,
      title: "Pigmentação",
      price: "R$ 25",
    },
    {
      icon: Gem,
      title: "Escova - Penteado",
      price: "R$ 25",
    },
    {
      icon: Gem,
      title: "Corte - Barba - Botox",
      price: "R$ 155",
    },
    {
      icon: Gem,
      title: "Corte - Barba - Hidratação",
      price: "R$ 100",
    },
    {
      icon: Gem,
      title: "Corte - Barba - Sobrancelha",
      price: "R$ 95",
    },
    {
      icon: Gem,
      title: "Corte - Botox",
      price: "R$ 120",
    },
    {
      icon: Gem,
      title: "Corte - Sobrancelha",
      price: "R$ 65",
    },
    {
      icon: Gem,
      title: "Corte - Hidratação",
      price: "R$ 65",
    },
    {
      icon: Gem,
      title: "Barba - Pigmentação",
      price: "R$ 65",
    },
  ]

  const handleToggleServices = () => {
    if (showAllServices) {
      // Se está fechando, primeiro faz scroll suave para a seção
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
      // Aguarda um pouco antes de fechar para o usuário ver o scroll
      setTimeout(() => {
        setShowAllServices(false)
      }, 300)
    } else {
      // Se está abrindo, apenas abre
      setShowAllServices(true)
    }
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
            Nossos <span className="text-amber-400">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto px-4 sm:px-0">
            Serviços especializados para o homem moderno que valoriza qualidade e estilo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-xl p-4 sm:p-6 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/10 rounded-lg mb-3 sm:mb-4">
                <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-amber-400 font-semibold text-base sm:text-lg mt-auto">{service.price}</p>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showAllServices ? "max-h-none opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-950 rounded-xl p-4 sm:p-6 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-amber-500/10 rounded-lg mb-3 sm:mb-4">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-amber-400 font-semibold text-base sm:text-lg mt-auto">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-4 sm:px-0">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            onClick={handleToggleServices}
          >
            {showAllServices ? "Ver Menos Serviços" : "Ver Todos os Serviços"}
          </Button>
        </div>
      </div>
    </section>
  )
}
