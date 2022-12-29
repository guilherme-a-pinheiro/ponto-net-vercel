import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import Mainimg from '../components/mainimg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Mainimg />
      </main>
    </>
  )
}
