import { Award, Users, Building2, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "+500",
    label: "Profissionais Formados",
    description: "em diversas áreas",
  },
  {
    icon: Building2,
    value: "+50",
    label: "Organizações Atendidas",
    description: "públicas e privadas",
  },
  {
    icon: Award,
    value: "+100",
    label: "Formações Realizadas",
    description: "com excelência",
  },
  {
    icon: Clock,
    value: "+5",
    label: "Anos de Experiência",
    description: "no mercado angolano",
  },
]

export function Stats() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p 
                  className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </p>
                <p className="text-primary-foreground font-medium">{stat.label}</p>
                <p className="text-primary-foreground/70 text-sm">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
