"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

const reviewImages = [
  { id: 1, image: "/images/review-adeilson-full.png", alt: "Avaliação de Adeilson Tenorio" },
  { id: 2, image: "/images/review-bruno-full.png", alt: "Avaliação de Bruno Cardoso" },
  { id: 3, image: "/images/review-elielson-full.png", alt: "Avaliação de Elielson Júnior" },
  { id: 4, image: "/images/review-otamis-full.png", alt: "Avaliação de Ótamis Alves" },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewImages.length)
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewImages.length) % reviewImages.length)
    }
  }

  const handleGoogleReviewsClick = () => {
    window.open(
      "https://www.google.com/maps/place/Romanos+Barbearia+-+Arapiraca/@-9.7493306,-36.6597231,17z/data=!4m8!3m7!1s0x705d537d85c202d:0xd342a14f7fb509d5!8m2!3d-9.7493306!4d-36.6571482!9m1!1b1!16s%2Fg%2F11s0t3zsmh?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
    )
  }

  return (
    <section className="py-12 md:py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-amber-500">clientes</span> dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
              G
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white text-lg font-semibold ml-2">5.0</span>
              <span className="text-zinc-400 ml-1">(167 avaliações)</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviewImages.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0">
                    <div className="relative w-full aspect-[3/4] md:aspect-[16/9]">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {reviewImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-500" : "bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleGoogleReviewsClick}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Ver todas as avaliações no Google
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
