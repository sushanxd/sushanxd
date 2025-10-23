
import Head from 'next/head'
import Carousel from '../../../../components/Carousel'

const images = ['../../../../img/nepal_trip_1.jpg', '../../../../img/nepal_trip_2.jpg', '../../../../img/nepal_trip_3.jpg', '../../../../img/nepal_trip_4.jpg', '../../../../img/nepal_trip_5.jpg', '../../../../img/nepal_trip_6.jpg', '../../../../img/nepal_trip_7.jpg', '../../../../img/nepal_trip_8.jpg']

export default function ProjectView() {
  return (
    <>
      <Head><title>Nepal Trip</title></Head>
      <main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/2">
          <Carousel images={images} />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-2">Nepal Trip</h1>
          <p className="text-gray-600 mb-4">Tools: Photoshop, Premiere Pro, Lightroom</p>
          <p>This is a showcase project under the photography category. Slide through to view multiple visuals, similar to an Instagram post layout.</p>
        </div>
      </main>
    </>
  )
}
