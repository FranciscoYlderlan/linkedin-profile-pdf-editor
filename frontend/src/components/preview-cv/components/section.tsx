import { Separator } from '@/components/ui/separator'

type SectionProps<GenericItemProps> = {
  title: string
  items: GenericItemProps[]
  renderItem: (item: GenericItemProps, index: number) => React.ReactElement
}

export function Section<GenericItemProps>({
  title,
  items,
  renderItem,
}: SectionProps<GenericItemProps>) {
  return (
    <section className="my-8 w-full">
      <h4 className="font-semibold">{title}</h4>
      <Separator className="mb-4" />
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            // className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            className="flex items-center justify-start"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </section>
  )
}
