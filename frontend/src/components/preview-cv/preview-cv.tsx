import { ProfileSchemaType } from '@/models/schemas/zod/profile-schema'
import { Separator } from '../ui/separator'
import { Actions } from './components/actions'
import { Section } from './components/section'

type PreviewCVProps = { profile: ProfileSchemaType }

export function PreviewCV({ profile }: PreviewCVProps) {
  const { name, contactInfos, about, educations, certifications, experiences } =
    profile

  return (
    <div className="relative mx-auto h-[1123px] w-[794px] rounded-md bg-foreground px-8 py-16 text-background shadow-lg">
      <Actions />
      <h3 className="text-2xl font-semibold">{name}</h3>
      <div className="grid grid-cols-2 text-sm">
        {contactInfos.map(({ header, links }, index) => {
          return (
            <div
              key={header + index}
              className={index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
            >
              <span>{header}</span>: <span>{links[0]}</span>
            </div>
          )
        })}
      </div>
      <section className="my-8 w-full">
        <h4 className="font-semibold">Summary</h4>
        <Separator className="mb-4" />
        <p className="text-sm">{about}</p>
      </section>

      <Section
        title="Experiences"
        items={experiences}
        renderItem={(experience) => (
          <div>
            <div className="flex items-center justify-start gap-2">
              <span className="size-1.5 rounded-full border"></span>{' '}
              <h4 className="font-semibold">{experience.jobTitle}</h4>
            </div>
            <p className="ml-3 text-xs text-muted">
              {experience.company} • {experience.duration}
            </p>
            <p className="ml-3 mt-2 text-sm">{experience.description}</p>
          </div>
        )}
      />

      <Section
        title="Education"
        items={educations}
        renderItem={(education) => (
          <div>
            <div className="flex items-center justify-start gap-2">
              <span className="size-1.5 rounded-full border"></span>{' '}
              <h3 className="font-semibold">{education.degree}</h3>
            </div>
            <p className="ml-3.5 text-xs text-muted">{education.institution}</p>
          </div>
        )}
      />

      <Section
        title="Certifications"
        items={certifications}
        renderItem={(certification) => (
          <div>
            <div className="flex items-center justify-start gap-2">
              <span className="size-1.5 rounded-full border"></span>{' '}
              <h3 className="font-semibold">
                {certification.certificationName}
              </h3>
            </div>
            <p className="ml-3 text-xs text-muted">
              {certification.issuer} • {certification.dateIssued}
            </p>
          </div>
        )}
      />
    </div>
  )
}
