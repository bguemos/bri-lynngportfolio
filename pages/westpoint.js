

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
        <div className={styles.maincontent}>
            <h1 className={styles.header}>Westpoint Hotel</h1>
            <div className={styles.description}>
            <div className={styles.topcontent}>
            <h2>Westpoint Hotel</h2>
            <p>The Westpoint Hotel website, built on WordPress, showcases a luxurious Caribbean resort. Through careful design decisions, such as color schemes and photography, the project aimed to evoke a sense of elegance and opulence. It sought to reflect the exclusive nature of the resort, extending its brand identity through meticulous branding strategies. The project's goal was to highlight the elegance and exclusivity synonymous with the resort's image.</p>
            <p>Project Roles: Designer, developed in Wordpress</p>
            <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://www.figma.com/proto/WzznboxjDFKUenSajAT4V6/West-Point-Hotel---Prototype?type=design&node-id=516-12550&t=3G9ZQNhSu4HtJw7M-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=516%3A12550&show-proto-sidebar=1&mode=design', '_blank')}
           
              >
            <h4 className={styles.rtitle}>View Prototype</h4>
              </button>
          </div>
           
            </div>
          <div className={styles.projimage}>
           <Image className={styles.projlogo}
              src="/projectImages/westpointlogo.png"
              height={250}
              width={200}
              alt='westpoint'
           
           />
           </div>
            </div>
          
            <div className={styles.secondcontent}>
            <div className={styles.concept}>
             <h1>Concept</h1>
             <p>The concept behind the Westpoint Hotel website encapsulates the luxury and tranquility nestled within the heart of the Caribbean. Embracing the beauty of its surroundings, the website invites visitors on a virtual journey of relaxation.</p>
              <p>From the moment users land on the homepage, they are greeted with a blend of captivating imagery and elegant design elements, echoing the refined ambiance of the resort. Each page intricately weaves together narratives of indulgence and comfort, offering a glimpse into the experiences that would await the guests.</p>

            </div>
            <Image className={styles.mainscreencomp}
            src="/projectImages/westpoint.png"
            height={490}
            width={700}
            alt='interface'
            />
            </div>
            <div className={styles.design}>
            <h1>Design</h1>
            <p>
            The design choices for the Westpoint Hotel website were aimed at emoting feelings of luxury and sophistication. Every image selected reflects elegance, inviting visitors into the beautiful island. The logos for the restaurant and lounge were created to extend a sense of exclusivity and prestige, setting the tone for the high-end experience the resort offers. The colour palette, featuring dark grey, dark teal, black, brown, and white, contributes to the overall ambiance, evoking a sense of tranquility and relaxation.</p>
            </div>
            <div className={styles.thirdcontent}>
              <div className={styles.hex}>
                <Image
                src="/projectImages/192d2b.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#192D2B</p>

              </div>
              <div className={styles.hex}>
              <Image
                src="/projectImages/252927.png"
                height={100}
                width={100}
                alt='hex'
                />
                
                <p>#252927</p>


              </div>
              <div className={styles.hex}>
              <Image
                src="/projectImages/515050.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#515050</p>

              </div>

            </div>
            <div className={styles.thirdcontent3}>
              <Image className={styles.web}
               src="/projectImages/dining.png"
               height={1000}
               width={400}
               alt='add'
              
              />
               <Image className={styles.web}
               src="/projectImages/experiences.png"
               height={1000}
               width={400}
               alt='add'
              
              />
               </div>
               <div className={styles.thirdcontent3}>
               <Image className={styles.web}
               src="/projectImages/accom.png"
               height={1000}
               width={400}
               alt='add'
              
              />
              <Image className={styles.web}
               src="/projectImages/occasions.png"
               height={1000}
               width={400}
               alt='add'
              
              />
              </div>

        


          



        </div>


    </main>

      </>

  )
}


