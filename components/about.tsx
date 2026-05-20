import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Metodologias práticas e orientadas a resultados",
  "Equipa de formadores com experiência comprovada",
  "Soluções adaptadas às necessidades específicas",
  "Acompanhamento contínuo e personalizado",
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-team.jpg"
                alt="Equipa Nexus Práxis"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>+500</p>
              <p className="text-sm opacity-90">Profissionais Formados</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Sobre Nós
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Conectamos Conhecimento à Prática,{" "}
                <span className="text-accent">Gerando Excelência</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Nexus Práxis é uma plataforma de formação e consultoria dedicada ao desenvolvimento de competências em comunicação, liderança e comportamento organizacional. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Trabalhamos com empresas, instituições públicas e organizações em geral, oferecendo soluções que transformam pessoas e fortalecem equipas.
              </p>
            </div>
            
            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Mission statement */}
            <div className="p-6 bg-muted rounded-2xl border-l-4 border-accent">
              <p className="text-foreground font-medium italic">
                {"\""}A nossa missão é ajudar pessoas e organizações a comunicarem melhor, liderarem com eficiência e alcançarem performance de excelência.{"\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
