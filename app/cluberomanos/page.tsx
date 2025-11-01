"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowLeft, Crown, Sword, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ClubeRomanosPage() {
  const plans = [
    {
      icon: Crown,
      name: "LEGADO",
      subtitle: "Corte & Barba",
      description: "Corte e Barba ilimitados.",
      services: [{ price: "R$ 134,90" }],
      popular: true,
    },
    {
      icon: Sword,
      name: "CENTURIÃO",
      subtitle: "Corte",
      description: "Cortes ilimitados",
      services: [{ price: "R$ 84,90" }],
      popular: false,
    },
    {
      icon: Shield,
      name: "LEGIONÁRIO",
      subtitle: "Barba",
      description: "Barbas ilimitadas",
      services: [{ price: "R$ 99,90" }],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "O Clube possui taxa de adesão ou fidelidade?",
      answer: "A assinatura não tem cobranças adicionais.",
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "O pagamento da assinatura é realizado apenas por cartão de crédito e não compromete o seu limite.",
    },
    {
      question: "Meu filho pode utilizar a minha assinatura?",
      answer: "A assinatura é pessoal e intransferível, vinculada ao CPF do titular.",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-900">
  {/* Hero Section */}
  <section className="relative min-h-screen flex items-start justify-center pt-16 sm:pt-20 overflow-hidden bg-zinc-950">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.05),transparent_50%)]" />
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 sm:top-8 left-4 sm:left-8 z-20 flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold hidden sm:inline">Voltar</span>
        </Link>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-center">
            {/* Left side - Text content */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 leading-none">
                <div className="mb-2">Clube</div>
                <div className="text-amber-400">Romanos</div>
              </h1>
              <div className="space-y-2 mt-4">
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-tight">
                  Corte o cabelo e faça a barba <span className="text-amber-400 font-bold">quantas vezes quiser</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-tight">
                  <span className="underline decoration-amber-400">sem pagar a mais por isso.</span>
                </p>
              </div>

              {/* Buttons removed from left side — they are now rendered under the phone mockup for better layout */}
            </div>

            {/* Right side - Phone mockup */}
            <div className="relative flex justify-center lg:justify-end mt-0 sm:-mt-6 lg:-mt-12">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <Image
                  src="/images/design-mode/romanosapp.png"
                  alt="App Romanos"
                  width={400}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />

                {/* Download buttons placed below the phone mockup */}
                <div className="mt-6 flex flex-row gap-4 justify-center items-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=romanosbarbearia.bestbarbers.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <img src="/images/ICONECERTOGOOGLEPLAY.jpeg" alt="Baixar na Google Play" className="h-13 sm:h-17 w-auto" />
                  </a>

                  <a
                    href="https://apps.apple.com/br/app/romanos-barbearia/id6740209929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                  >
                    <img src="/images/ICONECERTOAPPSTORE.jpeg" alt="Baixar na App Store" className="h-13 sm:h-17 w-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-950 border-2 border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-3 sm:px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  TUDO QUE VOCÊ PRECISA
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
                O <span className="text-amber-400">Clube Romanos</span> foi criado para aqueles que desejam:
              </h2>

              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                <div className="flex items-start gap-3">
                  <Check className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-lg text-zinc-300">Comodidade</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-lg text-zinc-300">Preço justo</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 flex-shrink-0 mt-1" />
                  <p className="text-sm sm:text-lg text-zinc-300">Exclusividade</p>
                </div>
              </div>

              <p className="text-base sm:text-xl text-zinc-300 mt-6 sm:mt-8 text-center leading-relaxed font-semibold">
                Conheça nossos planos e escolha o que mais combina com você.
              </p>

              <p className="text-xs sm:text-base text-zinc-400 mt-4 sm:mt-6 text-center leading-relaxed">
                É muito simples se tornar membro do nosso Clube, você pode assinar através do WhatsApp, presencialmente
                em uma das nossas unidades ou em nosso aplicativo clicando no botão "Assinatura"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-12 sm:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`text-center p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "bg-amber-500/10 border-amber-500 shadow-lg shadow-amber-500/20"
                    : "bg-zinc-800/50 border-zinc-700 hover:border-amber-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-amber-500 text-black text-xs sm:text-sm font-bold px-3 py-1 rounded-full mb-4">
                    MAIS POPULAR
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-amber-500/10 rounded-full mb-4">
                  <plan.icon className="h-7 sm:h-8 w-7 sm:w-8 text-amber-400" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">{plan.name}</h3>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">{plan.subtitle}</h4>

                <div className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {plan.services[0]?.price || "R$ 0,00"}
                </div>

                <p className="text-xs sm:text-base text-zinc-300 mb-6 font-medium">{plan.description}</p>

                <div className="space-y-2 text-xs sm:text-sm">
                  {plan.services.map((service, serviceIndex) => (
                    <p key={serviceIndex} className="text-zinc-400"></p>
                  ))}
                  <p className="text-zinc-400">• 10% em Serviços Auxiliares avulsos</p>
                  <p className="text-zinc-400">• 10% em Produtos de Barbearia</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - HOW TO SUBSCRIBE */}
      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-3 sm:mb-4">
              Veja como você pode fazer para <span className="text-amber-400">assinar</span>
            </h2>
            <p className="text-center text-zinc-400 text-sm sm:text-lg mb-8 sm:mb-12">
              Confira o passo a passo simplificado para se tornar membro do Clube Romanos
            </p>

            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/67HZ2EDlKgU"
                    title="Como assinar o Clube Romanos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            PERGUNTAS FREQUENTES
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 sm:px-6 data-[state=open]:border-amber-500/50"
                >
                  <AccordionTrigger className="text-left text-white hover:text-amber-400 py-4 sm:py-6 text-sm sm:text-base">
                    <span className="text-amber-400 mr-2">{index + 1} -</span> {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-4 sm:pb-6 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">CONTATO</h2>
            <p className="text-base sm:text-xl text-zinc-300 mb-3 sm:mb-4">
              Tem alguma dúvida ou precisa de assistência? <span className="text-amber-400">Fale com a gente</span>
            </p>
            <p className="text-sm sm:text-base text-zinc-400 mb-6 sm:mb-8">
              na nossa central de{" "}
              <a
                href="https://wa.me/5582996335151?text=Olá! Gostaria de tirar uma dúvida sobre os planos do Clube"
                className="text-amber-400 hover:text-amber-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                atendimento pelo WhatsApp através do número (82) 99633-5151
              </a>{" "}
              ou clique no botão abaixo.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-bold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/5582996335151?text=Olá! Gostaria de tirar uma dúvida sobre os planos do Clube",
                  "_blank",
                )
              }
            >
              Tirar Dúvida sobre Planos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <p className="text-zinc-400 text-xs sm:text-sm">© 2025 Romanos Barbearia - Conceito & Elegância</p>
        </div>
      </footer>
    </main>
  )
}
