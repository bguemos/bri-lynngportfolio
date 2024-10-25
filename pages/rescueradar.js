

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Rescue.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

export default function RescueRadar() {
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
      <div className={styles.banner}>
      <h1 className={styles.header}>Rescue Radar Web Application</h1>
      </div>
      <main className={styles.main}>
     
   

  <div className={styles.firstcontent}>

       <div className={styles.overview}>
       <h4>Project Overview</h4>
         <h4 className={styles.innerapp}>
           RescueRadar, created using Next.js, TypeScript, and Tailwind, was designed to link individuals with the dog breed most suitable for their lifestyle. By taking a brief quiz about your pet preferences, RescueRadar matches you with the most compatible breed. Leveraging the PetFinder API, RescueRadar not only facilitates connections but also provides resources and statistics advocating for adoption and highlighting the positive impact of pet ownership on your life. My roles were UX Designer, graphic designer and front-end developer.</h4>

       </div>
       <div className={styles.overview}>
        <h4>identified Problem and the solution</h4>
       <h4 className={styles.innerapp}>
       In a world where countless dog breeds exist, finding the perfect match for your lifestyle and preferences can be overwhelming. Many potential pet owners struggle to navigate this complex decision-making process, often resulting in mismatches and challenges in pet ownership. However, RescueRadar solves this painpoint by giving users the opportunity to input their preferences and matches them with a breed that suits them and their lifestyle. </h4>

       </div>
</div>

     <div className={styles.purplediv}>
            <Image 
            src= '/projectImages/rescueradar.png'
            height={300}
            width={450}
            alt='iphones'
            />
          <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://rescue-radar-tawny.vercel.app/', '_blank')}
           
              >
            <h4 className={styles.rtitle}>View Website</h4>
              </button>
          </div>
      </div>
      <div className={styles.line}>
        <hr></hr>
      </div>

  

  

 
<div className={styles.leftcontent1}>
<h1 className={styles.designprocess}>Design Process</h1>
<h2>Colour palette</h2>

<div className={styles.colorpallet}>
<p className={styles.hexdescription}>
The color palette chosen deliberately maintains bright and lively hues to evoke emotions of positivity, friendliness, and happiness, mirroring the joy that pets bring into one's life.</p>
<div className={styles.heximage}>
                <Image
                src="/projectImages/1fcbff.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#1FCBFF</p>

              </div>
              <div className={styles.heximage}>
              <Image
                src="/projectImages/c41c4c.png"
                height={100}
                width={100}
                alt='hex'
                />
                
                <p>#C41C4C</p>


              </div>
            




</div>

  <h2>Logo</h2>
  <div className={styles.logogrid}>
  <p>For the logo design, I wanted to have the a dog infront of a radar to extend the branding</p>
              <Image
               src='/projectImages/radar.png'
               height={140}
               width={160}
               alt='initial logo'
              />
            
             <p>The final logo with the wordmark.</p>
              <Image
              src='/projectImages/rescuewordmark.png'
              height={150}
              width={170}
              alt='final logo'
              
               />

  </div>
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>
          
<div className={styles.prototyping}>

<div className={styles.userflow}>

<p className={styles.description}>
<h2>The Interface</h2>

The objective for the application's visual presentation aimed for a bright, entertaining, and captivating appeal. Each screen features a distinctive color scheme to reinforce the branding. Carefully selected images of cheerful dogs were incorporated to spark user engagement and enthusiasm for utilizing the application.
</p>
          
  <div className={styles.interface}>
  <div className={styles.photodescription}>
  <Image className={styles.web}
               src="/projectImages/whyrescue.png"
               height={610}
               width={410}
               alt='add'
              
              />
              </div>
              <div className={styles.photodescription}>
              <Image className={styles.web}
               src="/projectImages/rescuequiz.png"
               height={610}
               width={410}
               alt='add'
              
              />
              </div>
               <div className={styles.photodescription}>
               <Image className={styles.web}
               src="/projectImages/alldogs.png"
               height={610}
               width={410}
               alt='add'
              
              />
              </div>
                            
   </div>

</div>
          
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>

 
 



    

  </main>
  <Footer/>
   
      </>

  )
}