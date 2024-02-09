
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
        <h1>Hey, I'm Bri-lynn</h1>
        <h3>I am a front-end developer and UX Designer. Take a look at some of my projects.</h3>
        <div className={styles.thirdbuttons}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://drive.google.com/file/d/1vkSSjWxWgkldoDBDuX-uLoP2NsLAH6bD/view?usp=sharing', '_blank')}
            title="View Resume"
              >
            <h4 className={styles.rtitle}>View Resume</h4>
              </button>
            <Button 
            title="Contact Me"
            link="mailto:bguemos.work@gmail.com"
            />
        </div>
        </div>
        <div className={styles.carouselcontainer}>
        <Carousel/>
        </div>
       

     
      </main>
   
    </>
  )
}

