import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function FinalCta() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Un punto inteligente en tu recepción
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
            Mejora la experiencia del huésped. Optimiza el tiempo de tu equipo.
            Incrementa la interacción con los servicios del hotel. Posiciona tu
            establecimiento como innovador.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              variant="secondary"
              className="text-base"
            >
              Solicita una demo gratuita
              <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
