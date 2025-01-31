import { z } from 'zod'

const contactInfoSchema = z.object({
  header: z.string().min(1, 'Header cannot be empty'),
  links: z
    .array(z.string().min(1, 'Link cannot be empty'))
    .min(1, 'At least one link is required'),
})

const experienceSchema = z.object({
  company: z.string().min(1, 'Company cannot be empty'),
  duration: z.string().min(1, 'Duration cannot be empty'),
  jobTitle: z.string().min(1, 'Job title cannot be empty'),
  description: z.string().min(1, 'Description cannot be empty'),
})

const educationSchema = z.object({
  institution: z.string().min(1, 'Institution cannot be empty'),
  degree: z.string().min(1, 'Degree cannot be empty'),
})

const certificationSchema = z.object({
  certificationName: z.string().min(1, 'Certification name cannot be empty'),
  issuer: z.string().min(1, 'Issuer cannot be empty'),
  dateIssued: z.string().min(1, 'Date issued cannot be empty'),
})

const ProfileSchema = z.object({
  name: z.string().min(1, 'Name cannot be empty'),
  contactInfos: z
    .array(contactInfoSchema)
    .min(1, 'At least one contact info is required'),
  about: z.string().min(1, 'About section cannot be empty'),
  experiences: z
    .array(experienceSchema)
    .min(1, 'At least one experience is required'),
  educations: z
    .array(educationSchema)
    .min(1, 'At least one education is required'),
  certifications: z
    .array(certificationSchema)
    .min(1, 'At least one certification is required'),
})

type ProfileSchemaType = z.infer<typeof ProfileSchema>
export { ProfileSchema, type ProfileSchemaType }
