export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-6">
      <img src="/img/profile.jpg" alt="Sushan DP" className="w-20 h-20 rounded-full object-cover" />
      <div className="text-left">
        <h1 className="text-2xl font-bold">Sushan</h1>
        <p className="text-gray-600 text-sm">Designer | Photographer | Videographer</p>
        <p className="text-sm mt-1">📍 London, UK</p>
        <div className="mt-1 text-lg space-x-2">
          <span>🎥</span>
          <span>🐦</span>
          <span>#VisualStoryteller</span>
        </div>
      </div>
    </div>
  )
}
