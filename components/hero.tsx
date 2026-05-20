"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Formacao e Consultoria de Excelencia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-foreground">DESENVOLVEMOS</span>
                <br />
                <span className="text-accent">COMPETENCIAS.</span>
                <br />
                <span className="text-foreground">GERAMOS RESULTADOS.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A <span className="text-accent font-semibold">Nexus Praxis</span> e uma plataforma de formacao e consultoria que ajuda pessoas e organizacoes a comunicarem melhor, liderarem com eficiencia e alcancarem performance de excelencia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
                asChild
              >
                <a href="#servicos">
                  Conheca os Nossos Servicos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2"
                asChild
              >
                <a href="#contacto">
                  <Play className="h-4 w-4" />
                  Fale Connosco
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Transformamos</p>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>PESSOAS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fortalecemos</p>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>ORGANIZACOES</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/hero-team.jpg"
                alt="Equipa profissional em sessao de formacao"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border shadow-lg">
                <p className="text-sm font-medium text-foreground">
                  {`"`}Conectamos conhecimento a pratica, gerando excelencia.{`"`}
                </p>
                <p className="text-xs text-accent mt-1 font-semibold">— Nexus Praxis</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
              +500 Formados
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
