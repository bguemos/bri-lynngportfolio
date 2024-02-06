

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Borderless.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

export default function Borderless() {
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
            <h1 className={styles.header}>Borderless</h1>
            <div className={styles.description}>
            <div className={styles.topcontent}>
            <h2>Borderless</h2>
            <p> Borderless, a web application tailored for refugees newly arrived in Canada, offers a personalized experience to ease their transition. It begins with a brief quiz inquiring about their country of origin and the Canadian province they are settling into.</p>
            <p>Based on these geographic variables, Borderless customizes their homepage, providing access to local resources and suggesting activities within their new community. Additionally, the platform shares stories of hope from their country of origin, fostering a sense of connection and belonging amidst their journey.</p>
            <p>Project Roles: Developer, UX Designer</p>
            <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://www.figma.com/proto/hdIdkVjbjpEIa1zUWJmwMO/Set-F-%E2%80%93-BorderLess?type=design&node-id=419-1587&t=NQ90VJZ3nGcUfFqC-1&scaling=scale-down&page-id=419%3A1056&starting-point-node-id=419%3A1587&mode=design', '_blank')}
           
              >
            <h4 className={styles.rtitle}>View Prototype</h4>
              </button>
          </div>
           
            </div>
            <div className={styles.projimage}>
           <Image 
           src="/projectImages/borderlesslogo.png"
           height={300}
           width={300}
           alt='logo'
           />
           </div>
        
            </div>
        
            <div className={styles.secondcontent}>
            <div className={styles.concept}>
            <h1>Concept</h1>
             <p>Designed with Next.js, this web applications main purpose is to extend a welcoming embrace to refugees joining our communities. Its core mission is to ensure individuals feel secure, equipped with essential resources, and empowered to explore and integrate into themselves into their new community with confidence.</p>
              <p>By filtering the users' results and curating a personalized dashboard with local resources and stories from home, the platform ensures that newcomers receive tailored support and guidance, enhancing their sense of belonging and facilitating their integration into their new community.</p>

            </div>
            <Image
            src="/projectImages/borderless.png"
            height={500}
            width={400}
            alt='interface'
            />
            </div>
            <div className={styles.design}>
            <h1>Design</h1>
            <p>In the design approach, simplicity and user-friendliness were paramount considerations for crafting an interface that resonates with clarity and ease of navigation. Drawing inspiration from Canada's breathtaking natural landscapes, borderless uses earthy tones to evoke a sense of connection with the country's stunning outdoors. By embracing clean dashboards and uncluttered layouts, The aim was to create an interface that prioritizes accessibility and intuitive interaction. </p>
            <p>The choice of earthy colours not only pays homage to Canada's natural beauty but also enhances the overall user experience, ensuring that the platform's key features remain readily accessible to all users.</p>
            </div>
            <div className={styles.thirdcontent}>
              <div className={styles.hex}>
                <Image
                src="/projectImages/7aaf71.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#7AAF71</p>

              </div>
              <div className={styles.hex}>
              <Image
                src="/projectImages/73baf4.png"
                height={100}
                width={100}
                alt='hex'
                />
                
                <p>#73BAF4</p>


              </div>
              <div className={styles.hex}>
              <Image
                src="/projectImages/424344.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#424344</p>

              </div>

            </div>
            <div className={styles.thirdcontent}>
              <Image className={styles.web}
               src="/projectImages/clothing.png"
               height={400}
               width={150}
               alt='add'
              
              />
               <Image className={styles.web}
               src="/projectImages/food.png"
               height={400}
               width={150}
               alt='add'
              
              />
               <Image className={styles.web}
               src="/projectImages/stats.png"
               height={300}
               width={150}
               alt='add'
              
              />
                <Image className={styles.web}
               src="/projectImages/stories.png"
               height={300}
               width={150}
               alt='add'
              
              />

            </div>


          



        </div>


    </main>
    <Footer/>
      </>

  )
}