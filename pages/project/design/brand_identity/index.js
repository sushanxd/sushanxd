
import Head from 'next/head'
import Carousel from '../../../../components/Carousel'

const images = ['../../../../img/brand_identity_1.jpg', '../../../../img/brand_identity_2.jpg', '../../../../img/brand_identity_3.jpg', '../../../../img/brand_identity_4.jpg', '../../../../img/brand_identity_5.jpg', '../../../../img/brand_identity_6.jpg', '../../../../img/brand_identity_7.jpg', '../../../../img/brand_identity_8.jpg']

export default function ProjectView() {
  return (
    <>
      <Head><title>Brand Identity</title></Head>
      <main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-6">
        <div className="w-full md:w-1/2">
          <Carousel images={images} />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-2">Brand Identity</h1>
          <p className="text-gray-600 mb-4">Tools: Photoshop, Premiere Pro, Lightroom</p>
          <p>This is a showcase project under the design category. Slide through to view multiple visuals, similar to an Instagram post layout.</p>
        </div>
      </main>
    </>
  )
}
