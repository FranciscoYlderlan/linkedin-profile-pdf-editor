'use client'

import { InputWithLabel } from '@/components/inputs/input-with-label'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  LinkedInSchema,
  LinkedInSchemaType,
} from '@/models/schemas/zod/linkedin-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type LinkedinFormProps = {
  url?: LinkedInSchemaType
}

export function LinkedinForm({ url }: LinkedinFormProps) {
  const defaultValues: LinkedInSchemaType = {
    linkedinUrl: url?.linkedinUrl || '',
  }
  const form = useForm<LinkedInSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(LinkedInSchema),
    defaultValues,
  })

  async function submitForm({ linkedinUrl }: LinkedInSchemaType) {
    console.log('url', linkedinUrl)
  }

  return (
    <div className="flex flex-col gap-2 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold"> Research for a Linkedin Profile</h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="mx-auto flex w-4/5 items-end justify-center gap-2"
        >
          <InputWithLabel<LinkedInSchemaType>
            fieldTitle="Linkedin Url"
            nameInSchema="linkedinUrl"
          />
          <div className="flex w-2/4 items-center justify-center gap-2">
            <Button type="submit" className="w-full">
              Generate pdf
            </Button>
            <Button
              type="button"
              variant={'destructive'}
              className="w-1/3"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
