import { PreviewCV } from '@/components/preview-cv/preview-cv'
import { Separator } from '@/components/ui/separator'
import { LinkedinForm } from './linkedin-form'
import { ProfileForm } from './profile-form'

const testProfile = {
  name: 'John Doe',
  contactInfos: [
    {
      header: 'Email',
      links: ['john.doe@example.com', 'j.doe@company.com'],
    },
    {
      header: 'LinkedIn',
      links: ['https://linkedin.com/in/johndoe'],
    },
  ],
  about:
    'Experienced software developer with a passion for building scalable applications and learning new technologies.',
  experiences: [
    {
      company: 'Tech Corp',
      duration: '2 years',
      jobTitle: 'Frontend Developer',
      description:
        'Developed and maintained web applications using React.js and TypeScript. Collaborated with a team of developers to create efficient and user-friendly interfaces.',
    },
    {
      company: 'Web Solutions Inc.',
      duration: '3 years',
      jobTitle: 'Backend Developer',
      description:
        'Built RESTful APIs using Node.js and Express, and worked on integrating them with frontend applications. Focused on scalability and performance optimization.',
    },
  ],
  educations: [
    {
      institution: 'University of Technology',
      degree: "Bachelor's in Computer Science",
    },
  ],
  certifications: [
    {
      certificationName: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      dateIssued: '2023-05-15',
    },
    {
      certificationName: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      dateIssued: '2022-11-10',
    },
  ],
}

export default async function FormPage({
  searchParams,
}: {
  searchParams: Promise<{ url: string }>
}) {
  const { url } = await searchParams
  return (
    <div className="py-8">
      <LinkedinForm url={{ linkedinUrl: url }} />
      <Separator className="my-8" />
      <ProfileForm />
      <PreviewCV profile={testProfile} />
    </div>
  )
}
