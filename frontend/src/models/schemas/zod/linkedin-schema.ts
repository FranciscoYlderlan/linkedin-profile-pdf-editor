import { z } from 'zod'

export const LinkedInSchema = z.object({
  linkedinUrl: z
    .string()
    .url('Invalid LinkedIn URL')
    .regex(
      /^https:\/\/(www\.)?linkedin\.com\/.*$/,
      'Must be a valid LinkedIn profile URL'
    ),
})
