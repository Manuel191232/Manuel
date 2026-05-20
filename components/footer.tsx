import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/logo.jpeg"
                alt="Nexus Práxis Logo"
                width={180}
                height={55}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Conectamos conhecimento à prática, gerando excelência. Transformamos pessoas e fortalecemos organizações através de formação e consultoria especializada.
            </p>
            <p className="text-lg font-semibold text-accent">
              Desenvolvemos Competências. Geramos Resultados.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Sobre Nós", href: "#sobre" },
                { name: "Serviços", href: "#servicos" },
                { name: "Contactos", href: "#contactos" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contactos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>+244 932 929 128</p>
                  <p>+244 932 461 572</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">antoniocoxe237@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  Empresas, Instituições Públicas e Organizações em Geral
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Nexus Práxis. Todos os direitos reservados.
            </p>
            <p className="text-sm text-accent font-medium">
              NEXUS PRÁXIS – CONECTAMOS CONHECIMENTO À PRÁTICA, GERANDO EXCELÊNCIA.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
