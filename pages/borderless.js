

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
       <h1 className={styles.header}>Borderless Web Application</h1>
   

  <div className={styles.firstcontent}>

       <div className={styles.overview}>
       <h4>Project Overview</h4>
         <h4 className={styles.innerapp}>Borderless, a web application tailored for refugees newly arrived in Canada, offers a personalized experience to ease their transition. It begins with a brief quiz inquiring about their country of origin and the Canadian province they are settling into.
         Based on these geographic variables, Borderless customizes their homepage, providing access to local resources and suggesting activities within their new community. Additionally, the platform shares stories of hope from their country of origin, fostering a sense of connection and belonging amidst their journey. My roles were UX designer and front-end developer
         </h4>

       </div>
       <div className={styles.overview}>
        <h4>identified Problem and the solution</h4>
       <h4 className={styles.innerapp}>Borderless addresses the critical need for personalized support and guidance for refugees transitioning to life in Canada. The application solves the challenge of navigating a new environment by tailoring its content to the specific needs and circumstances of each user. By offering a brief quiz to understand the refugee's country of origin and chosen Canadian province, Borderless creates a personalized homepage that provides access to local resources and suggests community activities relevant to their new location. </h4>

       </div>
</div>

     <div className={styles.purplediv}>
            <Image 
            src= '/projectImages/borderless.png'
            height={400}
            width={300}
            alt='iphones'
            />
          <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://www.figma.com/proto/hdIdkVjbjpEIa1zUWJmwMO/Set-F-%E2%80%93-BorderLess?type=design&node-id=419-1587&t=NQ90VJZ3nGcUfFqC-1&scaling=scale-down&page-id=419%3A1056&starting-point-node-id=419%3A1587&mode=design', '_blank')}
           
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
<p className={styles.hexdescription}>In the design approach, simplicity and user-friendliness were paramount considerations for crafting an interface that resonates with clarity and ease of navigation. Drawing inspiration from Canada's breathtaking natural landscapes, borderless uses earthy tones to evoke a sense of connection with the country's stunning outdoors.</p>
<div className={styles.heximage}>
                <Image
                src="/projectImages/7aaf71.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#7AAF71</p>

              </div>
              <div className={styles.heximage}>
              <Image
                src="/projectImages/73baf4.png"
                height={100}
                width={100}
                alt='hex'
                />
                
                <p>#73BAF4</p>


              </div>
              <div className={styles.heximage}>
              <Image
                src="/projectImages/424344.png"
                height={100}
                width={100}
                alt='hex'
                />
                <p>#424344</p>

              </div>




</div>

  <h2>Logo</h2>
  <div className={styles.logogrid}>
  <p>The logo was created to combine the earthy tones that represent Canada, the mountains and how Canada can be a home for everyone.</p>
              <Image
               src='/projectImages/borderlesslogo.png'
               height={140}
               width={150}
               alt='initial logo'
              />
            
             <p>The final logo with the wordmark.</p>
              <Image
              src='/projectImages/borderlesswordmark.png'
              height={150}
              width={290}
              alt='final logo'
              
               />

  </div>
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>
          


<div className={styles.userflow}>

<p className={styles.description}>
<h2>The Interface</h2>

The choice of earthy colours not only pays homage to Canada's natural beauty but also enhances the overall user experience, ensuring that the platform's key features remain readily accessible to all users.
</p>
          
  <div className={styles.interface}>
  <div className={styles.photodescription}>
  <Image className={styles.web}
               src="/projectImages/clothing.png"
               height={400}
               width={150}
               alt='add'
              
              />
              </div>
              <div className={styles.photodescription}>
              <Image className={styles.web}
               src="/projectImages/food.png"
               height={400}
               width={150}
               alt='add'
              
              />
              </div>
               <div className={styles.photodescription}>
               <Image className={styles.web}
               src="/projectImages/stats.png"
               height={300}
               width={150}
               alt='add'
              
              />
            
              </div>
              <div className={styles.photodescription}>
              <Image className={styles.web}
               src="/projectImages/stories.png"
               height={300}
               width={150}
               alt='add'
              
              />

            
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