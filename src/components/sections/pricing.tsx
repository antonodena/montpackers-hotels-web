import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

const included = [
  "Licencia de software concierge digital",
  "1 tótem interactivo de 55\"",
  "Gestión y actualización de contenido turístico",
  "Configuración inicial del hotel",
  "Soporte técnico y mantenimiento del sistema",
]

export function Pricing() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un precio, todo incluido
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sin costes ocultos. Hardware, software y soporte en una sola cuota.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <Card className="relative border-primary/20">
            <CardHeader className="text-center">
              <Badge className="mx-auto mb-4">Todo incluido</Badge>
              <CardTitle className="text-2xl">
                Montpackers Guest Experience
              </CardTitle>
              <CardDescription>
                Licencia completa con hardware incluido
              </CardDescription>
              <div className="mt-6">
                <span className="text-sm text-muted-foreground">Desde</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    249€
                  </span>
                  <span className="text-lg text-muted-foreground">/mes</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="flex flex-col gap-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      className="size-5 shrink-0 text-primary"
                    />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="flex-col gap-3">
              <Button className="w-full" size="lg">
                Solicita tu presupuesto
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
              </Button>
              <p className="text-xs text-muted-foreground">
                Permanencia mínima: 24 meses
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
