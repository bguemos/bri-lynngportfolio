
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
      <main>
      <div className={styles.intro}>
      <h1 className={styles.title1}>Bri-lynn Guemos</h1>
     
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
       
          <div className={styles.aboutme}>
          <h1>About Me</h1>
          <div className={styles.horizontalLine}></div>
          <p>Hello! I’m Bri-lynn, I am a dedicated Front End Developer and UI/UX Designer. With a solid foundation in the hospitality industry and a keen eye for design, I bring a unique perspective to the world of development. Some of My skills include HTML, CSS, javascript, and react native. With years of experience in the hospitality industry, I've cultivated a strong customer-centric approach. </p>
          <p>This perspective influences my design choices, ensuring a delightful user experience. Beyond the world of coding, I'm passionate about fitness. In my spare time, you'll find me training to become a certified spin instructor. I believe in the balance of mind and body, applying the same dedication to my fitness journey as I do to my development projects.</p>
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

          </div>

        
      </div>
      </main>
      <Footer />
    </>
  )
}

