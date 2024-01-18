
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
          href="https://fonts.googleapis.com/css2?family=Anybody&display=swap"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.topbackground}> 
        <div className={styles.imageContainer}>
          <Image
            src="/projectImages/code.png"
            height={461}
            width={800}
            alt="code"
          />
          <div className={styles.overlay}>
          <h1 className={styles.title}>Hey, i'm Bri-lynn Guemos</h1>
          </div>
        
        </div>
        </div>
       
   
        <div className={styles.middlecontent}>
       
            <Image
              src="/backgroundBlobs/frontend.png"
              height={1000}
              width={1000}
              alt="background"
            />
          </div>
          <div className={styles.thirdcontent}>
            <Image 
            src='/me.png'
            height={600}
            width={400}
            alt='me'
          />
          <div className={styles.aboutme}>
          <h1>About Me</h1>
          <div className={styles.horizontalLine}></div>
          <p>Hello! I’m Bri-lynn, I am a dedicated Front End Developer and UI/UX Designer. With a solid foundation in the hospitality industry and a keen eye for design, I bring a unique perspective to the world of development. Some of My skills include HTML, CSS, javascript, and react native. With years of experience in the hospitality industry, I've cultivated a strong customer-centric approach. </p>
          <p>This perspective influences my design choices, ensuring a delightful user experience. Beyond the world of coding, I'm passionate about fitness. In my spare time, you'll find me training to become a certified spin instructor. I believe in the balance of mind and body, applying the same dedication to my fitness journey as I do to my development projects.</p>
        
          </div>

          </div>

        
      </main>
      <Footer />
    </>
  )
}

