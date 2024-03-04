

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
      <main className={styles.main}>
        <div className={styles.maincontent}>
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
            <Image 
             src='/projectImages/pagepalhands.png'
            height={400}
            width={500}
            alt='hands'
            
            />
   
            </div>
         
          
            <div className={styles.description}>
            <div className={styles.concept}>
            <h1>Concept</h1>
             <p>This ebook manager, developed using the React framework, simplifies book organization and access. Leveraging the Google Books API, users can effortlessly add and manage books across customizable bookshelves.</p>
              <p>With flexible search options by title or author and convenient filtering capabilities, users can easily locate and organize their digital library to suit their preferences. Whether adding a single book or creating multiple bookshelves, this platform streamlines the process, providing users with a user-friendly and efficient ebook management solution</p>

            </div>

            <Image    
            className={styles.mainscreencomp}
            src="/projectImages/page.png"
            height={490}
            width={700}
            alt='interface'
            />

         
            </div>
        <div className={styles.designrow}>
            <div className={styles.design}>
            <h1>Design</h1>
            <p>
             In crafting this application's design, The primary aim was simplicity. Given its nature as an ebook organizer, the focus leaned heavily towards functionality over visual embellishments. The priority was on highlighting features that enhance user experience, minimizing any distractions that might detract from its primary purpose.</p>
            </div>
            <div className={styles.projimage}>
          
                  <Image className={styles.projlogo}
                  src="/projectImages/pagepallogo.png"
                  height={250}
                  width={250}
                  alt='page'
                  
                  />
          </div>
        </div>
        <div>
        <div className={styles.styleguide}>
          <div className={styles.colors}>
            <h1> Colour Pallet</h1>
            <Image className={styles.hex}
            src='/projectImages/ffffff.png'
            height={150}
            width={150}
            />
            <h2>#FFFFFF</h2>
            <Image className={styles.hex}
            src='/projectImages/a6633c.png'
            height={150}
            width={150}
            />
            <h2>#A6633C</h2>
            <Image className={styles.hex}
            src='/projectImages/593122.png'
            height={150}
            width={150}
            />
            <h2>#593122</h2>

          </div>
          <div className={styles.typography}>
            <h1>Typography</h1>
           
            <Image 
            src='/projectImages/pagepalfont.png'
            height={650}
            width={300}
            alt='font'
            
            />
            <h4>Quicksand Font Family</h4>

          </div>

        </div>
     </div>
            <div className={styles.thirdcontent}>
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


    </main>
   
      </>

  )
}