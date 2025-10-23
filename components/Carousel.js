
import { useState } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)
  const next = () => setCurrent((current + 1) % images.length)

  return (
    <div className="relative w-full">
      <img src={images[current]} alt="slide" className="w-full h-auto object-cover rounded-lg" />
      <button onClick={prev} className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-2xl">&#8592;</button>
      <button onClick={next} className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-2xl">&#8594;</button>
    </div>
  )
}
