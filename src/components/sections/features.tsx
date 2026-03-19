import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Tv01Icon,
  CheckmarkBadge01Icon,
  SmartPhone01Icon,
  Hotel01Icon,
  MapsIcon,
  HeadsetIcon,
} from "@hugeicons/core-free-icons"

const features = [
  {
    icon: Tv01Icon,
    title: "Hardware incluido",
    badge: "Incluido",
    description: "Tótem interactivo de 55\" incluido en la cuota mensual. Listo para instalar en recepción o zona común.",
  },
  {
    icon: CheckmarkBadge01Icon,
    title: "Licencia ilimitada",
    badge: null,
    description: "Mapa interactivo, portal web completo, CMS autogestionable, branding personalizado y 4 idiomas (catalán, español, inglés y francés).",
  },
  {
    icon: SmartPhone01Icon,
    title: "Multicanal",
    badge: null,
    description: "Tótem físico, entorno web propio, integración iframe con tu web y continuidad con la App Montpackers.",
  },
  {
    icon: Hotel01Icon,
    title: "Información del hotel",
    badge: null,
    description: "Servicios e instalaciones, horarios, normas, FAQs, promociones y servicios adicionales del establecimiento.",
  },
  {
    icon: MapsIcon,
    title: "Información del destino",
    badge: null,
    description: "Rutas, actividades, puntos de interés, agenda de eventos, webcams, tiempo y módulo de juegos.",
  },
  {
    icon: HeadsetIcon,
    title: "Soporte continuo",
    badge: null,
    description: "Hosting, mantenimiento, actualizaciones del sistema y soporte técnico incluidos en la cuota.",
  },
]

export function Features() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas, incluido
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hardware, software, contenido y soporte. Sin sorpresas.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <HugeiconsIcon
                      icon={feature.icon}
                      className="size-5 text-primary"
                    />
                  </div>
                  {feature.badge && (
                    <Badge variant="secondary">{feature.badge}</Badge>
                  )}
                </div>
                <CardTitle className="mt-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
