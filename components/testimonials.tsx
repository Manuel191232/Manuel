"use client"

import { useState, useEffect } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Directora de Recursos Humanos",
    company: "Banco Nacional de Angola",
    content: "A formação em liderança comunicativa transformou completamente a forma como a nossa equipa de gestão interage. Resultados visíveis em apenas 3 meses.",
    rating: 5,
  },
  {
    name: "João Fernandes",
    role: "CEO",
    company: "Tech Solutions Lda",
    content: "A consultoria da Nexus Práxis ajudou-nos a restructurar todo o nosso atendimento ao cliente. A satisfação dos clientes aumentou 40%.",
    rating: 5,
  },
  {
    name: "Ana Luísa Pereira",
    role: "Coordenadora de Formação",
    company: "Ministério da Educação",
    content: "Profissionalismo excepcional. A equipa demonstrou conhecimento profundo e metodologias práticas que fizeram toda a diferença.",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Testemunhos
            </span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
            O Que Dizem os Nossos Clientes
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-8 text-accent/20">
            <Quote className="h-24 w-24" />
          </div>
          
          <div className="relative bg-card rounded-3xl shadow-xl p-8 md:p-12 border border-border">
            <div className="flex flex-col items-center text-center">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                {`"${testimonials[current].content}"`}
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold mb-4">
                  {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="font-bold text-foreground text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                  {testimonials[current].name}
                </p>
                <p className="text-accent font-medium">{testimonials[current].role}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-card shadow-lg border-border hover:bg-accent hover:text-accent-foreground"
                onClick={prev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-card shadow-lg border-border hover:bg-accent hover:text-accent-foreground"
                onClick={next}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrent(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
