import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-sm font-semibold text-foreground">
            Montpackers Guest Experience
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Montpackers. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
