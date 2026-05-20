"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "CONTACTOS",
    details: ["+244 932 929 128", "+244 932 461 572"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Mail,
    title: "E-MAIL",
    details: ["antoniocoxe237@gmail.com"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MapPin,
    title: "ACTUAMOS EM",
    details: ["Empresas, Instituições Públicas", "e Organizações em Geral"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Obrigado pelo seu contacto! Entraremos em contacto brevemente.")
  }

  return (
    <section id="contactos" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Entre em Contacto
            </span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
            Vamos Conversar Sobre o Seu Projecto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar a sua organização a alcançar novos patamares de excelência.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Envie-nos uma Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="O seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+244 9XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                      Organização
                    </label>
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva o seu projecto ou necessidade..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Informações de Contacto
              </h3>
              <p className="opacity-90 mb-8">
                Entre em contacto connosco através dos canais abaixo. Estamos disponíveis para esclarecer as suas dúvidas e apresentar as melhores soluções para a sua organização.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-primary-foreground/10 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-foreground/70 mb-1">
                          {info.title}
                        </p>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-primary-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Quick contact card */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-accent mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Precisa de uma resposta rápida?
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Ligue-nos directamente para uma conversa imediata sobre as suas necessidades de formação.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2">
                  <Phone className="h-4 w-4" />
                  +244 932 929 128
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
