import Head from 'next/head'
import ProfileHeader from '../components/ProfileHeader'

const posts = [1, 2, 3, 4, 5, 6]

export default function Home() {
  return (
    <>
      <Head><title>Sushan's Portfolio</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-6">
        <ProfileHeader />
        <div className="grid grid-cols-3 gap-2 mt-6">
          {posts.map((n) => (
            <div key={n} className="aspect-square overflow-hidden">
              <img src={`/img/post${n}.jpg`} alt={`Post ${n}`} className="w-full h-full object-cover rounded" />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
