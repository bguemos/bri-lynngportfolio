

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Innersight.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'


export default function Innersight() {



  function handleMouseMove(e) {
    const element = e.target;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bgPosX = `${(x / rect.width) * 100}%`;
    const bgPosY = `${(y / rect.height) * 100}%`;
    element.style.backgroundPosition = `${bgPosX} ${bgPosY}`;
  }
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
       <h1 className={styles.header}>Innersight</h1>
       <div className={styles.main}>
        <div className={styles.firstcontent}>
            <h1>Innersight is a digital journaling Application to assist people with their mental health.</h1>
            <h4>Innersight was developed to provide individuals who maintain regular journals with a secure platform to express their emotions and thoughts conveniently and universally. By employing AI sentiment recognition, Innersight assesses previous journal entries, assisting users in better understanding their emotions and behaviours. </h4>
              <h4>It has the potential to identify events that may contribute to worsening symptoms while also highlights positive experiences in their daily lives. This tool is beneficial for individuals, whether diagnosed or undiagnosed, as it allows the AI to analyze entries spanning weeks, months, or years. This eliminates the need to manually revisit past entries to identify potential triggers, events, and patterns.</h4>
            <h4>My Roles: Front-end Developer, UI/UX Designer</h4>

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent}>
                <h2 className={styles.caption}>Project Overview</h2>
                <p className={styles.body}>Identified pain points and why we created this app</p>
                <ul className={styles.body}>People who journal frequently have a hard time identifying patterns in their behaviour because it is challenging and time consuming to go back and analyze all of your entries. </ul>
                <ul className={styles.body}>Organizing and being able to recall entries is challenging because it is hard to organize traditional journals or digital applications currently used to journal.</ul>
                <ul className={styles.body}>People who journal often sometimes encounter writers block or find it hard to start.</ul>

            </div>
            <div className={styles.rightcontent}>
                <Image
                src="/projectImages/img01.png"
                height={500}
                width={600}
                alt='phone'
               
                />

            </div>

        </div>
        <h1>Design Process</h1>
        <div>
            <hr className={styles.line}></hr>

        </div>

        <div className={styles.overview}>
            <div className={styles.leftcontent1}>
              <h1>Logo and colour pallet</h1>
              
              <p>In crafting our design, our goal was to ensure a high level of user-friendliness. We opted for a monochromatic purple palette to enhance feelings of calmness, safety, and relaxation.</p>
              <Image 
              src="/projectImages/innersighthex.png"
              height={120}
              width={450}
              alt='hex'
              
              />
              <h2>Logo</h2>
              <p>For our logo design, we used the same monochromatic pallet, Our initial logo was designed to look like a person kneeling.</p>
              <Image
               src='/projectImages/initiallogo.png'
               height={80}
               width={80}
               alt='initial logo'
              />
              <p>After considering the concept of our app, we decided to go with a logo that was more open and hopeful creating the concept of an open flower that can be percieved as open pages of a book.</p>
              <Image
              src='/projectImages/logo.png'
              height={80}
              width={80}
              alt='final logo'
              
               />
            

            </div>
         
            <div className={styles.rightcontent2}>
                <h1>Mascots</h1>
                <p>To add a personal and engaging touch, we introduced mascots to the application.</p>
              <p>We used the panda to represent peace and friendship, the frog for wisdom, the otter to represent kindness, and the sloth for relaxation and patience.</p>
              <div className={styles.mascots}>
                <Image
                src="/mascots/Panda.png"
                height={80}
                width={80}
                alt='panda'
                />
                  <Image
                src="/mascots/Frog.png"
                height={80}
                width={80}
                alt='frog'
                />
                  <Image
                src="/mascots/Otter.png"
                height={80}
                width={80}
                alt='otter'
                />
                  <Image
                src="/mascots/Sloth.png"
                height={80}
                width={80}
                alt='sloth'
                />

             

              </div>
              <div className={styles.mascots}>
              <h4>Panda</h4>
                <h4>Frog</h4>
                <h4>Otter</h4>
                <h4>Sloth</h4>
              </div>
              <p>You can encounter our mascots across our app, offering personalized recommendations and AI analyses to assist you in navigating through your next steps.</p>
              <div className={styles.mascots}>
              <Image
                src="/projectImages/pandaexercising.png"
                height={100}
                width={80}
                alt='panda'
                />
                  <Image
                src="/projectImages/slothknitting.png"
                height={100}
                width={80}
                alt='frog'
                />
                  <Image
                src="/projectImages/slothPhone.png"
                height={100}
                width={80}
                alt='otter'
                />
                  <Image
                src="/projectImages/pandaexercising.png"
                height={100}
                width={80}
                alt='sloth'
                />
                </div>
                <p>We felt that Incorporating mascots throughout the app was a way for us to instill a sense of comfort and familiarity, enhancing user experience and creating a welcoming environment</p>
          
        
               

            </div>
          

        </div>
        <div className={styles.overview}>
            <div className={styles.leftcontent2}>
              <h1>IOS Screenshots</h1>
              <div className={styles.mascots}>
                <Image 
                 src='/projectImages/screenshot1.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image 
                 src='/projectImages/screenshot2.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

               
              </div>

            </div>
         
            <div className={styles.rightcontent3}>
             
               
            <div className={styles.screenshots}>
                <Image 
                 src='/projectImages/screenshot3.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image 
                 src='/projectImages/screenshot4.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

               
              </div>
            </div>
          

        </div>
        <div className={styles.prototyping}>
            <h1>UX Design and Prototype</h1>

            <div className={styles.prototypingcontent}>
            <div className={styles.lowfi}>
            <div
                    className={`${styles.zoomImage} ${styles.highFiImage}`}
                    style={{ backgroundImage: `url('/projectImages/innersightlofi.png')` }}
                    onMouseMove={(e) => handleMouseMove(e)}
                  />
            <h2>Lo-fi Prototype</h2>
            <p className={styles.description}>
             We worked together to develop the lo-fi prototype, aiming to maintain a consistent and user-friendly layout. Given that our app targets individuals with mental health concerns, we prioritized preserving its primary purpose: providing a safe space for users to journal their thoughts and emotions without distractions.</p>
            </div>
            <div className={styles.lowfi}>
            <div
                    className={`${styles.zoomImage} ${styles.highFiImage}`}
                    style={{ backgroundImage: `url('/projectImages/hifi.png')` }}
                    onMouseMove={(e) => handleMouseMove(e)}
                  />
            <h2>High-fi Prototype</h2>
            <p className={styles.description}>

            In crafting the high-fidelity prototype, we deliberately integrated our chosen color palette, mascots, and images to finalize the design. Our aim was to create a cohesive visual identity that resonates with our target audience while ensuring a seamless user experience. By incorporating these elements thoughtfully, we sought to enhance engagement and maintain the app's core focus as a supportive platform for journaling thoughts and emotions, particularly for individuals grappling with mental health concerns
            </p>
            </div>
            
           
           
        
            </div>
          
            <div className={styles.overview}>
            <div className={styles.leftcontent4}>
                <h1>User Persona</h1>
                <Image
                src="/projectImages/amaya.png"
                height={500}
                width={500}
                alt='amaya'
                
                />

            </div>
            <div className={styles.rightcontent4}>
              <h1>Amaya Ali</h1>
              <p>Amaya Ali was our main user persona. She is a 24 year old full time student at BCIT. Amaya has been diagnosed with anxiety and depression and journals conisistently to help her deal with her symptoms.</p>
              <p>Amaya encounters challenges expressing her feelings in writing and often gets stuck in the process. She refrains from carrying her journal outside due to fear of loss or exposure, resorting to the Notes app while on the go. Revisiting past entries triggers intense emotions for her, hindering her ability to reflect, especially during therapist-guided exercises. The prospect of reliving negative experiences is daunting and unwelcome.</p>
              <p>These issues represent Amaya's primary pain points with traditional journaling. Innersight addresses these concerns by offering AI analysis, ensuring journals are securely locked with passwords, and providing prompts to facilitate writing sessions.</p>
              

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