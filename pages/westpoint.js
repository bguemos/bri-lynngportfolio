

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Westpoint.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

export default function Westpoint() {
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
       <h1 className={styles.header}>Westpoint Hotel Wordpress Website</h1>
   

  <div className={styles.firstcontent}>

       <div className={styles.overview}>
       <h4>Project Overview</h4>
         <h4 className={styles.innerapp}>The Westpoint Hotel website, built on WordPress, showcases a luxurious Caribbean resort. Through careful design decisions, such as color schemes and photography, the project aimed to evoke a sense of elegance and opulence. It sought to reflect the exclusive nature of the resort, extending its brand identity through meticulous branding strategies. The project's goal was to highlight the elegance and exclusivity synonymous with the resort's image.</h4>

       </div>
       <div className={styles.overview}>
        <h4>identified Problem and the solution</h4>
       <h4 className={styles.innerapp}>
        Luxury hotel websites often encounter the challenge of striking a delicate balance between conveying exclusivity and ensuring user-friendliness in their design. Many struggle with maintaining a sense of opulence while also offering intuitive navigation and accessibility. This Westpoint Hotel website tackled this dilemma by extending its branding essence through a careful collaboration of colors, layout, and typography. </h4>

       </div>
</div>

     <div className={styles.purplediv}>
            <Image 
            src= '/projectImages/westpoint.png'
            height={300}
            width={450}
            alt='iphones'
            />
          <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://www.figma.com/proto/WzznboxjDFKUenSajAT4V6/West-Point-Hotel---Prototype?type=design&node-id=516-12550&t=3G9ZQNhSu4HtJw7M-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=516%3A12550&show-proto-sidebar=1&mode=design', '_blank')}
           
              >
            <h4 className={styles.rtitle}>View Prototype</h4>
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
<p className={styles.hexdescription}>The colour palette, featuring dark grey, dark teal, black, brown, and white, contributes to the overall ambiance, evoking a sense of tranquility and relaxation</p>
<div className={styles.heximage}>
                <Image
                src="/projectImages/192d2b.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#192D2B</p>

              </div>
              <div className={styles.heximage}>
              <Image
                src="/projectImages/252927.png"
                height={100}
                width={100}
                alt='hex'
                />
                
                <p>#252927</p>


              </div>
              <div className={styles.heximage}>
              <Image
                src="/projectImages/515050.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#515050</p>

              </div>




</div>

  <h2>Logo</h2>
  <div className={styles.logogrid}>
  <p>For the logo design, the goal was to keep a simplistic elegance.</p>
              <Image
               src='/projectImages/westpointlogo.png'
               height={140}
               width={90}
               alt='initial logo'
              />
            
             <p>The final logo with the wordmark.</p>
              <Image
              src='/projectImages/westpointwordmark.png'
              height={150}
              width={190}
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

From the moment users land on the homepage, they are greeted with a blend of captivating imagery and elegant design elements, echoing the refined ambiance of the resort. Each page intricately weaves together narratives of indulgence and comfort, offering a glimpse into the experiences that would await the guests.
</p>
          
  <div className={styles.interface}>
  <div className={styles.photodescription}>
  <Image className={styles.web}
               src="/projectImages/dining.png"
               height={1000}
               width={400}
               alt='add'
              
              />
              </div>
              <div className={styles.photodescription}>
              <Image className={styles.web}
               src="/projectImages/experiences.png"
               height={1000}
               width={400}
               alt='add'
              
              />
              </div>
               <div className={styles.photodescription}>
               <Image className={styles.web}
               src="/projectImages/accom.png"
               height={1000}
               width={400}
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
   
      </>

  )
}