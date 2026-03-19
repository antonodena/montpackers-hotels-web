import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Touch01Icon } from "@hugeicons/core-free-icons"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
            <HugeiconsIcon icon={Touch01Icon} className="size-4" />
            Concierge digital para hoteles
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Libera tu recepción.{" "}
            <span className="text-primary">Mejora la experiencia.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Un tótem interactivo de 55&quot; que centraliza toda la información
            de tu hotel y del destino. Tus huéspedes resuelven dudas y descubren
            experiencias de forma autónoma, rápida y visual.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">
              Solicita una demo
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#como-funciona">Ver cómo funciona</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-lg rounded-2xl border bg-muted/50 p-8 text-center">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10">
                <HugeiconsIcon
                  icon={Touch01Icon}
                  className="size-10 text-primary"
                />
              </div>
              <p className="text-sm font-medium">
                Tótem interactivo de 55&quot; incluido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
