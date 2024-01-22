

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Projects.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Bri-lynn Guemos</title>
        <meta name="description" content="Bri-lynn Guemos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anybody&display=swap"
        />
      </Head>
      <Header />
      <main>

    
        <h1 className={styles.header}>Projects</h1>
     
        
      <div className={styles.main}>
      <Carousel/>
      </div>
     
     
        
        
      </main>
      <Footer />
    </>
  )
}