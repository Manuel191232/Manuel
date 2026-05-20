import { MessageSquare, Users, Building, ClipboardCheck, HeadphonesIcon, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    icon: MessageSquare,
    title: "Comunicação e Oratória",
    description: "Desenvolvemos a sua capacidade de falar com clareza, confiança e impacto em qualquer situação.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Liderança Comunicativa",
    description: "Formamos líderes que comunicam com propósito, inspiram equipas e alcançam resultados consistentes.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building,
    title: "Comportamento Organizacional",
    description: "Promovemos atitudes profissionais, relações saudáveis e uma cultura organizacional forte e produtiva.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria para Melhoria dos Serviços",
    description: "Diagnóstico, estratégias e soluções práticas para elevar a qualidade dos serviços na sua organização.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento ao Público e Excelência",
    description: "Capacitamos equipas para oferecerem atendimento de excelência e superarem as expectativas dos clientes.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento Profissional",
    description: "Potenciamos o crescimento pessoal e profissional com foco em competências práticas e aplicáveis ao dia a dia.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nossos Serviços Principais
            </span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance" style={{ fontFamily: 'var(--font-heading)' }}>
            Soluções Completas para o Seu Crescimento
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de formação e consultoria para transformar pessoas e organizações.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 bg-card"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <CardTitle className={`text-lg ${service.color}`} style={{ fontFamily: 'var(--font-heading)' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Feature images */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/training-session.jpg"
              alt="Sessão de formação profissional"
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6 text-primary-foreground">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Formação que Inspira</h3>
                <p className="text-sm opacity-90">Metodologias práticas para resultados reais</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/images/consulting-meeting.jpg"
              alt="Reunião de consultoria"
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end">
              <div className="p-6 text-accent-foreground">
                <h3 className="text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Consultoria que Gera Impacto</h3>
                <p className="text-sm opacity-90">Soluções estratégicas para a sua organização</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
