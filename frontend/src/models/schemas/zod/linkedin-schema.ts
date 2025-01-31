import { z } from 'zod'

const LinkedInSchema = z.object({
  linkedinUrl: z
    .string()
    .url('Invalid LinkedIn URL')
    .regex(
      /^https:\/\/(www\.)?linkedin\.com\/.*$/,
      'Must be a valid LinkedIn profile URL'
    ),
})

type LinkedInSchemaType = z.infer<typeof LinkedInSchema>

export { LinkedInSchema, type LinkedInSchemaType }
