import { Separator } from '@/components/ui/separator'
import { LinkedinForm } from './linkedin-form'
import { ProfileForm } from './profile-form'

export default async function FormPage({
  searchParams,
}: {
  searchParams: Promise<{ url: string }>
}) {
  const { url } = await searchParams
  return (
    <div className="py-8">
      {url ? <LinkedinForm url={{ linkedinUrl: url }} /> : <></>}
      <Separator className="my-8" />
      <ProfileForm />
    </div>
  )
}
