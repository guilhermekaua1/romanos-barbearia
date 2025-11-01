"use client"

import { MapPin, Navigation, Clock } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const address = "Rua Ver. Domingos Vital, 22 - Alto do Cruzeiro"

  const handleLocationClick = () => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
            Nossa <span className="text-amber-500">Localização</span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto px-4 sm:px-0">
            Venha nos visitar e conheça nosso espaço moderno e acolhedor
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/fachada-romanos-localizacao.png"
                alt="Fachada da Romanos Barbearia"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent" />
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Endereço</h3>
                  <p className="text-zinc-300 text-base sm:text-lg">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Horário de Funcionamento</h3>
                  <div className="text-zinc-300 space-y-1 text-sm sm:text-base">
                    <p>Segunda-feira: 11h às 21h</p>
                    <p>Terça a Sexta: 9h às 21h</p>
                    <p>Sábado: 9h às 19h</p>
                    <p className="text-zinc-500">Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Button
                  onClick={handleLocationClick}
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  Abrir no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
