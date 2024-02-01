

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Pagepal.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Carousel from '@/components/carousel'
import Button from '@/components/buttons'

export default function Projects() {
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
        <div className={styles.main}>
            <h1 className={styles.header}>PagePal</h1>
            <div className={styles.description}>
            <div className={styles.topcontent}>
            <h2>PagePal</h2>
            <p>PagePal is a personal library management web app using React, powered by Google Books API. This application allows users to effortlessly organize and digitally track records for both physical books and e-books in a unified platform. PagePal was designed for readers who want to organize their physical and e-books they currently have as well as give them the ability to discover new ones.</p>
            <p>Project Roles: Full stack web developer, UX Designer</p>
            <div className={styles.buttoncontainer}>
          <button className={styles.resumebutton}
            onClick={() => window.open('https://pagepal-library-app.vercel.app/', '_blank')}
           
              >
            <h4 className={styles.rtitle}>View Website</h4>
              </button>
          </div>
           
            </div>
          
        
            </div>
            <h1>Concept</h1>
            <div className={styles.secondcontent}>
            <div className={styles.concept}>
             <p>This ebook manager, developed using the React framework, simplifies book organization and access. Leveraging the Google Books API, users can effortlessly add and manage books across customizable bookshelves.</p>
              <p>With flexible search options by title or author and convenient filtering capabilities, users can easily locate and organize their digital library to suit their preferences. Whether adding a single book or creating multiple bookshelves, this platform streamlines the process, providing users with a user-friendly and efficient ebook management solution</p>

            </div>
            <Image
            src="/projectImages/page.png"
            height={500}
            width={700}
            alt='interface'
            />
            </div>
            <div className={styles.design}>
            <h1>Design</h1>
            <p>
             In crafting this application's design, our primary aim was simplicity. Given its nature as an ebook organizer, our focus leaned heavily towards functionality over visual embellishments. We prioritized highlighting features that enhance user experience, minimizing any distractions that might detract from its primary purpose.</p>
            </div>
            <div className={styles.thirdcontent}>
              <Image className={styles.web}
               src="/projectImages/addbook.png"
               height={300}
               width={400}
               alt='add'
              
              />
               <Image className={styles.web}
               src="/projectImages/addshelf.png"
               height={300}
               width={400}
               alt='add'
              
              />
               <Image className={styles.web}
               src="/projectImages/inshelf.png"
               height={300}
               width={400}
               alt='add'
              
              />

            </div>


          



        </div>


    </main>
    <Footer/>
      </>

  )
}