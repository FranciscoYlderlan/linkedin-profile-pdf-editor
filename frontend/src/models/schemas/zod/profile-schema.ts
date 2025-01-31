import { z } from 'zod'

export const contactInfoSchema = z.object({
  header: z.string().optional(),
  links: z.array(z.string()).optional(),
})

export const experienceSchema = z.object({
  company: z.string().optional(),
  duration: z.string().optional(),
  jobTitle: z.string().optional(),
  description: z.string().optional(),
})

export const educationSchema = z.object({
  institution: z.string().optional(),
  degree: z.string().optional(),
})

export const certificationSchema = z.object({
  certificationName: z.string().optional(),
  issuer: z.string().optional(),
  dateIssued: z.string().optional(),
})

export const profileSchema = z.object({
  name: z.string().optional(),
  contactInfos: z.array(contactInfoSchema).default([]),
  about: z.string().optional(),
  experiences: z.array(experienceSchema).default([]),
  educations: z.array(educationSchema).default([]),
  certifications: z.array(certificationSchema).default([]),
})

export type ProfileSchema = z.infer<typeof profileSchema>
