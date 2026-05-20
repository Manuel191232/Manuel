import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/leadership.jpg"
          alt="Liderança profissional"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <p className="text-primary-foreground/80 text-lg mb-4">
          INVISTA NO QUE TRANSFORMA.
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          INVISTA NA SUA EQUIPA.
          <br />
          <span className="text-accent">INVISTA NA NEXUS PRAXIS.</span>
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-10">
          Formação que inspira. Consultoria que gera impacto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-base px-8"
          >
            Solicitar Proposta
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-8"
          >
            Conhecer os Serviços
          </Button>
        </div>
      </div>
    </section>
  )
}
