import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Button from '@/components/buttons'
import Carousel from '@/components/carousel'
import Descriptors from '@/components/description'


export default function Home() {
  return (
    <>
      <Head>
        <title>Bri-lynn Guemos</title>
        <meta name="description" content="Bri-lynn Guemos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
     
      </Head>
    
    <Header/>
    
   <main className={styles.main}>
        <div className={styles.top}>
          <div className={styles.titledescription}> 
        <h1 className={styles.title}>Bri-lynn Guemos</h1>
        <Descriptors/>
     
        </div>
        <div className={styles.intro}>
     
     <h3 className={styles.description}>Hi i'm Bri-lynn! Combining my skills in front-end development and UX design, I create seamless and user-friendly interfaces. Take a look at some of my work!</h3>
     <section id="contact">
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
        </section>

     </div>
    <div className={styles.line}>
        <hr></hr>
    </div>
     <section id="projects">
        <Carousel/>
      </section>
        </div>
   </main>
  
      <Footer/>
    </>
  )
}




