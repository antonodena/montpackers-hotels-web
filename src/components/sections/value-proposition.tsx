import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import {
  Clock01Icon,
  StarIcon,
  ChartIncreaseIcon,
  Rocket01Icon,
  InformationCircleIcon,
  Compass01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons"

const hotelBenefits = [
  {
    icon: Clock01Icon,
    title: "Menos preguntas en recepción",
    description:
      "Reduce la carga de consultas repetitivas. Tu equipo se centra en lo que importa.",
  },
  {
    icon: StarIcon,
    title: "Mejor experiencia desde el día uno",
    description:
      "El huésped accede a información útil desde que llega, sin esperas ni fricciones.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Más consumo de servicios",
    description:
      "Promociona extras, restaurante y actividades directamente en el tótem.",
  },
  {
    icon: Rocket01Icon,
    title: "Imagen innovadora",
    description:
      "Posiciona tu hotel como un establecimiento moderno y tecnológicamente avanzado.",
  },
]

const guestBenefits = [
  {
    icon: InformationCircleIcon,
    title: "Información clara y verificada",
    description:
      "Todo lo que necesitan saber del hotel y el destino, en un solo punto.",
  },
  {
    icon: Compass01Icon,
    title: "Actividades y experiencias",
    description:
      "Descubren rutas, restaurantes, eventos y puntos de interés cercanos.",
  },
  {
    icon: Clock01Icon,
    title: "Sin esperas",
    description:
      "Consultan horarios, servicios y normas del hotel en cualquier momento.",
  },
  {
    icon: Shield01Icon,
    title: "Acompañados toda la estancia",
    description:
      "Se sienten guiados y atendidos durante toda su experiencia en el hotel.",
  },
]

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: IconSvgElement
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <HugeiconsIcon icon={icon} className="size-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function ValueProposition() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Beneficios para todos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una solución que mejora la operativa del hotel y la experiencia del
            huésped al mismo tiempo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
              Para tu hotel
            </h3>
            <div className="flex flex-col gap-8">
              {hotelBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
              Para tus huéspedes
            </h3>
            <div className="flex flex-col gap-8">
              {guestBenefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
