import { HugeiconsIcon } from "@hugeicons/react"
import {
  Touch01Icon,
  PaintBrush01Icon,
  ArrowUp01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons"

const steps = [
  {
    number: "01",
    icon: Touch01Icon,
    title: "Instalación",
    description:
      "Instalamos el tótem interactivo en la recepción o zona común de tu hotel.",
  },
  {
    number: "02",
    icon: PaintBrush01Icon,
    title: "Personalización",
    description:
      "Configuramos el sistema con la identidad visual de tu hotel: marca, colores y tipografía.",
  },
  {
    number: "03",
    icon: ArrowUp01Icon,
    title: "Contenido",
    description:
      "Cargamos toda la información de tu establecimiento y del destino turístico.",
  },
  {
    number: "04",
    icon: Rocket01Icon,
    title: "Activación",
    description:
      "Activamos el sistema. Desde ese momento, soporte continuo y actualizaciones incluidas.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En 4 pasos tu hotel tendrá un concierge digital operativo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <HugeiconsIcon icon={step.icon} className="size-7" />
              </div>
              <span className="mt-4 block text-sm font-bold text-primary">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
