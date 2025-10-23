import { useRouter } from 'next/router'

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Project: {slug}</h1>
      <p className="text-gray-600 mt-2">More details coming soon.</p>
    </div>
  )
}
