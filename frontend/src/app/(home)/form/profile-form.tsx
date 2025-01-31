'use client'

import { InputWithLabel } from '@/components/inputs/input-with-label'
import { TextareaWithLabel } from '@/components/inputs/textarea-with-label'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  ProfileSchema,
  ProfileSchemaType,
} from '@/models/schemas/zod/profile-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type ProfileFormProps = {
  profile?: ProfileSchemaType
}

export function ProfileForm({ profile }: ProfileFormProps) {
  const defaultValues: ProfileSchemaType = {
    name: profile?.name || '',
    contactInfos: profile?.contactInfos || [],
    about: profile?.about || '',
    experiences: profile?.experiences || [],
    educations: profile?.educations || [],
    certifications: profile?.certifications || [],
  }
  const form = useForm<ProfileSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(ProfileSchema),
    defaultValues,
  })

  async function submitForm(profile: ProfileSchemaType) {
    console.log('profile', profile)
  }

  return (
    <div className="flex flex-col gap-2 sm:px-8">
      <div>
        <h2 className="text-2xl font-bold"> Update Linkedin Profile</h2>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            className="mx-auto flex w-4/5 flex-col items-end justify-center gap-2"
          >
            <InputWithLabel<ProfileSchemaType>
              fieldTitle="My Name"
              nameInSchema="name"
            />
            <TextareaWithLabel<ProfileSchemaType>
              fieldTitle="About me"
              nameInSchema={'about'}
            />
            <div className="flex w-2/4 items-center justify-center gap-2">
              <Button type="submit" className="w-full">
                Update pdf
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
    </div>
  )
}
