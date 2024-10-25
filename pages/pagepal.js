

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Pagepal.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

export default function Pagepal() {
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
      <h1 className={styles.header}>Pagepal Web Application</h1>
      </div>
      <main className={styles.main}>

   

  <div className={styles.firstcontent}>

       <div className={styles.overview}>
       <h4>Project Overview</h4>
         <h4 className={styles.innerapp}>PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. My roles were full stack developer and UX designer. </h4>

       </div>
       <div className={styles.overview}>
        <h4>identified Problem and the solution</h4>
       <h4 className={styles.innerapp}>PagePal addresses the needs of readers seeking to streamline the organization of their physical and e-book collections while also facilitating the discovery of new titles. Unlike other book organizers, PagePal integrates effortless organization and book exploration within a unified platform.</h4>

       </div>
</div>

     <div className={styles.purplediv}>
            <Image 
            src= '/projectImages/pagepalhands.png'
            height={350}
            width={450}
            alt='iphones'
            />
             <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://pagepal-library-app.vercel.app/', '_blank')}
           
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
<p className={styles.hexdescription}>In crafting this application's design, The primary aim was simplicity. Given its nature as an ebook organizer, the focus leaned heavily towards functionality over visual embellishments. The priority was on highlighting features that enhance user experience, minimizing any distractions that might detract from its primary purpose</p>
<div className={styles.heximage}>
  <Image style={{border: '1px solid brown'}}
  src="/projectImages/ffffff.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#FFFFFF</p>
</div>
<div className={styles.heximage}>
<Image style={{border: '1px solid brown'}}
  src="/projectImages/a6633c.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#A6633C</p>
</div>
<div className={styles.heximage}>
<Image style={{border: '1px solid brown'}}
  src="/projectImages/593122.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#593122</p>
</div>



</div>

  <h2>Logo</h2>
  <div className={styles.logogrid}>
  <p>For the logo design, it used the same simplistic style as the rest of the interface.</p>
              <Image
               src='/projectImages/pagepallogo.png'
               height={120}
               width={120}
               alt='initial logo'
              />
            
             <p>For the final logo, We went with a thicker stroke and rounder appearance</p>
              <Image
              src='/projectImages/pagepalwordmark.png'
              height={100}
              width={250}
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

Each screen is dedicated exclusively to its primary feature. The interface was designed to efficiently guide users to their destination with speed and seamlessness as the utmost priorities.
</p>
          
  <div className={styles.interface}>
  <div className={styles.photodescription}>
              <Image className={styles.web}
               src="/projectImages/addbook.png"
               height={300}
               width={400}
               alt='add'
              
              />
              <h3>Add a book to your bookshelf</h3>
              </div>
              <div className={styles.photodescription}>
               <Image className={styles.web}
               src="/projectImages/addshelf.png"
               height={300}
               width={400}
               alt='add'
              
              />
              <h3>Add a shelf to your Homepage</h3>
              </div>
               <div className={styles.photodescription}>
               <Image className={styles.web}
               src="/projectImages/inshelf.png"
               height={300}
               width={400}
               alt='add'
              
              />
              <h3>View the books within a shelf</h3>
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