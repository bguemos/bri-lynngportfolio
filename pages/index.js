
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Button from '@/components/buttons'
import Carousel from '@/components/carousel'

export default function Home() {
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
      <main className={styles.main}>
      <div className={styles.intro}>
      <h1 className={styles.title1}>Bri-lynn Guemos</h1>
      <h2>Hey I'm Bri, Take a look at my projects!</h2>
     
      </div>
      <div className={styles.maincontent}>
      
        <div className={styles.topbackground}> 
        <Carousel/>
     
        </div>
       
   
        <div className={styles.middlecontent}>
       
            <Image
              src="/backgroundBlobs/frontend.png"
              height={900}
              width={1000}
              alt="background"
            />
                 <Image 
            src='/me.png'
            height={600}
            width={400}
            alt='me'
          />
          </div>
          <div className={styles.thirdcontent}>
       
        </div>

        
      </div>
      </main>
      <Footer />
    </>
  )
}

