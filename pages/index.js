import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import butterflyBoyBranches from '../public/butterfly_boy_branches.png'
import faceForest from '../public/face_forest.png'
import orangesWoman from '../public/oranges_woman.png'
import flameMeditator from '../public/flame_meditator.png'
import greenGuyGourds from '../public/green_guy_gourds.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dilly-Dalle</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          favorite Dalle2 images I've spawned
        </h1>

        <p className={styles.description}>
          more about dalle2 <a class="link" href="https://openai.com/dall-e-2/">here</a>
        </p>

        <div className={styles.grid}>
          <Image alt="Butterfly boy w/ branches" src={butterflyBoyBranches} />
          <Image alt="Woman w/ oranges" src={orangesWoman} />
          <Image alt="Guy in jungle w/ gourds" src={greenGuyGourds} />
          <Image alt="Meditator w/ flame head" src={flameMeditator} />
          <Image alt="Face in forest" src={faceForest} />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
