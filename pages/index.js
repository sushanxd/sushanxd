import Head from 'next/head'
import ProfileHeader from '../components/ProfileHeader'

const posts = [
  { id: 1, category: 'Design' },
  { id: 2, category: 'Photography' },
  { id: 3, category: 'Videography' },
  { id: 4, category: 'Design' },
  { id: 5, category: 'Photography' },
  { id: 6, category: 'Videography' }
]

export default function Home() {
  return (
    <>
      <Head><title>Sushan's Portfolio</title></Head>
      <main className="max-w-4xl mx-auto px-4 py-6">
        <ProfileHeader />
        <div className="flex justify-center gap-4 text-sm font-medium mt-6 mb-4">
          <button className="hover:underline">All</button>
          <button className="hover:underline">Design</button>
          <button className="hover:underline">Photography</button>
          <button className="hover:underline">Videography</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map(({ id }) => (
            <div key={id} className="aspect-square overflow-hidden">
              <img src={`/img/post${id}.jpg`} alt={`Post ${id}`} className="w-full h-full object-cover rounded" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-700">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>I’m Sushan — a visual storyteller with a passion for design, photography, and videography. Based in London. This portfolio is a creative window into my universe.</p>
        </div>
      </main>
    </>
  )
}
