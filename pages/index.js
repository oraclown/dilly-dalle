import Head from 'next/head'
import Image from 'next/image'
import butterflyBoyBranches from '../public/butterfly_boy_branches.png'
import faceForest from '../public/face_forest.png'
import orangesWoman from '../public/oranges_woman.png'
import flameMeditator from '../public/flame_meditator.png'
import greenGuyGourds from '../public/green_guy_gourds.png'
import junglePond from '../public/reflection_jungle_pond.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Dilly-Dalle</title>
      </Head>

      <main className="font-mono text-stone-800">
        <h1 className="text-center text-lg md:text-4xl font-semibold py-2 mt-4 mb-2 bg-teal-500">
          favorite Dalle2 images I&apos;ve spawned
        </h1>

        <p className="text-center mb-2">
          more about Dalle2 <a className="hover:bg-green-300 text-blue-600" href="https://openai.com/dall-e-2/">here</a>
        </p>

        <div className="grid sm:grid-cols-2 items-center gap-2">
          <div className="p-10 aspect-square">
            <Image alt="Butterfly boy w/ branches" src={butterflyBoyBranches} />
          </div>
          <div className="p-10 aspect-square">
            <Image alt="Woman w/ oranges" src={orangesWoman} />
          </div>
          <div className="p-10 aspect-square">
            <Image alt="Guy in jungle w/ gourds" src={greenGuyGourds} />
          </div>
          <div className="p-10 aspect-square">
            <Image alt="A pond in a jungle" src={junglePond} />
          </div>
          <div className="p-10 aspect-square">
            <Image alt="Face in forest" src={faceForest} />
          </div>
          <div className="p-10 aspect-square">
            <Image alt="Meditator w/ flame head" src={flameMeditator} />
          </div>
        </div>
      </main>
    </div>
  )
}
