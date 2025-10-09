"use client"

import { Smartphone, Download } from "lucide-react"

export function AppDownloadSection() {
  const handleAppStoreClick = () => {
    // Substitua pela URL real da App Store
    window.open("https://apps.apple.com/br/app/romanos-barbearia/id6740209929", "_blank")
  }

  const handleGooglePlayClick = () => {
    // Substitua pela URL real do Google Play
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
              onClick={handleAppStoreClick}
              className="bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 hover:border-amber-500 text-white rounded-xl px-6 py-4 flex items-center gap-3 transition-all duration-300 transform hover:scale-105 min-w-[200px] shadow-lg"
            >
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.81.87.78 0 2.26-1.07 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-zinc-400">Download na</div>
                <div className="text-lg font-semibold text-white">App Store</div>
              </div>
            </button>

            <button
              onClick={handleGooglePlayClick}
              className="bg-zinc-800 hover:bg-zinc-900 border border-zinc-700 hover:border-amber-500 text-white rounded-xl px-6 py-4 flex items-center gap-3 transition-all duration-300 transform hover:scale-105 min-w-[200px] shadow-lg"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,11.15L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                  fill="url(#googlePlayGradient)"
                />
                <defs>
                  <linearGradient id="googlePlayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="25%" stopColor="#00A8FF" />
                    <stop offset="50%" stopColor="#0078FF" />
                    <stop offset="75%" stopColor="#7B68EE" />
                    <stop offset="100%" stopColor="#FF6B6B" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-left">
                <div className="text-xs text-zinc-400">Disponível no</div>
                <div className="text-lg font-semibold text-white">Google Play</div>
              </div>
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
