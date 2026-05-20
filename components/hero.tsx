import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2 } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-foreground">DESENVOLVEMOS</span>
                <br />
                <span className="text-accent">COMPETÊNCIAS.</span>
                <br />
                <span className="text-foreground">GERAMOS RESULTADOS.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A <span className="text-accent font-semibold">Nexus Práxis</span> é uma plataforma de formação e consultoria que ajuda pessoas e organizações a comunicarem melhor, liderarem com eficiência e alcançarem performance de excelência.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                Conheça os Nossos Serviços
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Fale Connosco
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Transformamos</p>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>PESSOAS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fortalecemos</p>
                  <p className="font-semibold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>ORGANIZAÇÕES</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/images/hero-team.jpg"
                alt="Equipa profissional em sessão de formação"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                <p className="text-sm font-medium text-foreground">
                  {"\""}Conectamos conhecimento à prática, gerando excelência.{"\""}
                </p>
                <p className="text-xs text-accent mt-1">— Nexus Práxis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
