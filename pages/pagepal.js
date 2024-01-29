

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Pagepal.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

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
        <div className={styles.main}>
            <h1>PagePal</h1>
            <p>PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. PagePal was designed for readers who want to organize their physical and e-books they currently have as well as give them the ability to discover new ones</p>
            <p>My role: Full stack web developer, UX Designer</p>


            <div className={styles.imagegroup}>
            <Image 
            src='/projectImages/pagepal.png'
            height={600}
            width={1100}
            alt='pagepal'
            />
            <Button
            title="View Application"
            link='https://pagepal-library-app.vercel.app/'
            />

            </div>



        </div>


    </main>
    <Footer/>
      </>

  )
}