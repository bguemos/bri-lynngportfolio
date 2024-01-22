

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Innersight.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'


export default function Innersight() {
  return (
    <>
      <Head>
        <title>Bri-lynn Guemos</title>
        <meta name="description" content="Bri-lynn Guemos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anybody&display=swap"
        />
      </Head>
      <Header />
      <main>
       <h1 className={styles.header}>InnerSight</h1>
       <div className={styles.main}>
        <div className={styles.firstcontent}>
            <h1>Project Introduction</h1>
            <h4>Summary</h4>
            <h4>My Roles</h4>

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent}>
                <h2 className={styles.caption}>Project Overview</h2>
                <p className={styles.body}>Identified problem and painpoint and how are app presented a solution</p>

            </div>
            <div className={styles.rightcontent}>
                <p className={styles.caption}>Project Image</p>

            </div>

        </div>
        <h1>Design Process</h1>
        <div>
            <hr className={styles.line}></hr>

        </div>

        <div className={styles.overview}>
            <div className={styles.leftcontent1}>
              <h1>Research</h1>

            </div>
         
            <div className={styles.rightcontent2}>
                <h2>Images</h2>
               

            </div>
          

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent2}>
              <h1>Findings</h1>

            </div>
         
            <div className={styles.rightcontent2}>
               
             <h2>Images</h2>
            </div>
          

        </div>
        <div className={styles.prototyping}>
            <h1>UX Design and Prototype</h1>

            <div className={styles.prototypingcontent}>
            <h1>Image</h1>
            <h1>Image</h1>
            <h1>Image</h1>
        
            </div>
            <div className={styles.prototypingcontent}>
            <h1>description</h1>
            <h1>description</h1>
            <h1>description</h1>
           
        
            </div>
            <div className={styles.overview}>
            <div className={styles.leftcontent}>
                <h2 className={styles.caption}>Logo</h2>
                <p className={styles.body}>Initital Design</p>

            </div>
            <div className={styles.rightcontent}>
                <p className={styles.caption}>Redesign</p>

            </div>

        </div>
        
        <div className={styles.persona}>
     <div className={styles.amaya}>
        <h1>User Persona</h1>
        <h2>Amaya</h2>
        <Image
        src=""
        height={100}
        width={100}
        alt='photo'
        
        />
        </div>
        <div className={styles.amaya2} >
        <h1>Identified pain points</h1>
        <p>Our Solution</p>
        </div>
        </div>
        <div className={styles.coding}>
            <h1>Coding Process</h1>


        </div>

    


        </div>

       </div>
      


     
        
        
      </main>
      <Footer />
    </>
  )
}