"use client"

import { Smartphone, Download } from "lucide-react"

export function AppDownloadSection() {
  const handleAppStoreClick = () => {
    window.open("https://apps.apple.com/br/app/romanos-barbearia/id6740209929", "_blank")
  }

  const handleGooglePlayClick = () => {
    window.open("https://play.google.com/store/apps/details?id=romanosbarbearia.bestbarbers.app", "_blank")
  }

  return (
    <section id="app-download" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4">
              <Smartphone className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Baixe nosso <span className="text-amber-500">App</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-8">
              Baixe nosso aplicativo e tenha acesso a agendamentos, histórico de serviços, promoções exclusivas e muito
              mais na palma da sua mão.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={handleGooglePlayClick}
              className="transition-all duration-300 transform hover:scale-105"
              aria-label="Baixar na Google Play Store"
            >
              <img src="/images/ICONECERTOGOOGLEPLAY.jpeg" alt="Disponível no Google Play" className="h-18 w-auto sm:h-20" />
            </button>

            <button
              onClick={handleAppStoreClick}
              className="transition-all duration-300 transform hover:scale-105"
              aria-label="Baixar na App Store"
            >
              <img src="/images/ICONECERTOAPPSTORE.jpeg" alt="Download na App Store" className="h-18 w-auto sm:h-20" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Agendamento Fácil</h3>
              <p className="text-zinc-400 text-sm">Agende seus horários com poucos toques</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-500 text-xl">🎁</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Plano de assinatura</h3>
              <p className="text-zinc-400 text-sm">Tenha acesso completo a todos os nossos planos de assinatura</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-500 text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Histórico Completo</h3>
              <p className="text-zinc-400 text-sm">Acompanhe todos os seus agendamentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
