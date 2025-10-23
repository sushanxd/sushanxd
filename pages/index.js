import Head from 'next/head'
import ProfileHeader from '@/components/ProfileHeader'

export default function Home() {
  return (
    <>
      <Head><title>Sushan's Portfolio</title></Head>
      <main className="min-h-screen bg-[#fefaf6] text-black">
        <ProfileHeader />
        <div className="p-4 text-center">🚧 Post Grid Coming Soon...</div>
      </main>
    </>
  )
}
