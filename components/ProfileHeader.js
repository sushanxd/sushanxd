export default function ProfileHeader() {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">Sushan</h1>
      <p className="text-sm text-gray-600">Designer | Photographer | Videographer</p>
      <a href="mailto:sushan@example.com" className="text-red-600 underline">sushan@example.com</a>
      <p className="text-sm mt-1">London, UK</p>
      <div className="mt-2 space-x-2">
        <span>🎥</span>
        <span>🐦</span>
        <span>#VisualStoryteller</span>
      </div>
    </div>
  )
}
