"use client"

import { Crown, Sword, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const plans = [
    {
      icon: Crown,
      title: "Legado",
      subtitle: "Corte & Barba",
      description: "Corte e Barba ilimitados",
      benefits: ["10% em Serviços Auxiliares avulsos", "10% em Produtos de Barbearia"],
      price: "R$134,90",
      popular: true,
    },
    {
      icon: Sword,
      title: "Centurião",
      subtitle: "Corte",
      description: "Cortes ilimitados",
      benefits: ["10% em Serviços Auxiliares avulsos", "10% em Produtos de Barbearia"],
      price: "R$84,90",
      popular: false,
    },
    {
      icon: Shield,
      title: "Legionário",
      subtitle: "Barba",
      description: "Barbas ilimitadas",
      benefits: ["10% em Serviços Auxiliares avulsos", "10% em Produtos de Barbearia"],
      price: "R$99,90",
      popular: false,
    },
  ]

  const scrollToAppSection = () => {
    const appSection = document.getElementById("app-download")
    if (appSection) {
      appSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Clube <span className="text-amber-400">Romanos</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            O Clube Romanos nasceu para quem valoriza estar sempre bem cuidado e sem preocupações. Ao fazer parte do
            clube, você garante acesso ilimitado aos serviços da barbearia, com atendimento de excelência, vantagens
            exclusivas e a conveniência de pagar um valor fixo por mês.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? "bg-amber-500/10 border-amber-500 shadow-lg shadow-amber-500/20"
                  : "bg-zinc-800/50 border-zinc-700 hover:border-amber-500/50"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-amber-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
                  MAIS POPULAR
                </div>
              )}

              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4">
                <plan.icon className="h-8 w-8 text-amber-400" />
              </div>

              <h3 className="text-2xl font-bold text-amber-400 mb-2">{plan.title}</h3>
              <h4 className="text-xl font-semibold text-white mb-4">{plan.subtitle}</h4>

              <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>

              <p className="text-zinc-300 mb-6 font-medium">{plan.description}</p>

              <div className="space-y-2">
                {plan.benefits.map((benefit, benefitIndex) => (
                  <p key={benefitIndex} className="text-zinc-400 text-sm">
                    • {benefit}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-10 py-6 text-lg font-bold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            onClick={scrollToAppSection}
          >
            <Smartphone className="mr-3 h-5 w-5" />
            Assine o plano pelo app
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
            onClick={() => (window.location.href = "/cluberomanos")}
          >
            Saiba mais sobre o Clube Romanos
          </Button>
        </div>
      </div>
    </section>
  )
}