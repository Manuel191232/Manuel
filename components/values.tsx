import { Target, Lightbulb, Rocket } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "FOCO EM",
    highlight: "RESULTADOS",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Lightbulb,
    title: "SOLUÇÕES",
    highlight: "PRÁTICAS",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    icon: Rocket,
    title: "COMPROMISSO COM",
    highlight: "A SUA EVOLUÇÃO",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
]

export function Values() {
  return (
    <section className="py-16 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={index}
                className={`flex items-center gap-4 p-6 rounded-2xl border ${value.borderColor} ${value.bgColor} transition-all hover:shadow-md`}
              >
                <div className={`p-3 rounded-full ${value.bgColor}`}>
                  <Icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{value.title}</p>
                  <p className={`text-lg font-bold ${value.color}`} style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.highlight}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
