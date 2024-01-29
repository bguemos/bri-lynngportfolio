

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
          href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700;1,800;1,900&display=swap"
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