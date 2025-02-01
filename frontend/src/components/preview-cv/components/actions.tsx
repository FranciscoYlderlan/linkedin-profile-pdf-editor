import { Button } from '@/components/ui/button'

export function Actions() {
  return (
    <div className="absolute right-4 top-4 flex w-fit items-center justify-center gap-2">
      <Button className="h-fit border border-muted-foreground py-1 font-semibold shadow-md">
        View CV
      </Button>
      <Button
        variant={'success'}
        className="h-fit border border-muted-foreground bg-green-600 py-1 font-semibold shadow-md"
      >
        Export PDF
      </Button>
    </div>
  )
}
