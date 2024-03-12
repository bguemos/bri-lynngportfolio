

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Innersight.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Project from '@/components/projects'
import Button from '@/components/buttons'
import { useRef, useState, useEffect } from 'react'


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
          href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,700;1,800;1,900&display=swap"
        />
      </Head>
      <Header />
      <main className={styles.main}>
       <h1 className={styles.header}>Innersight Mobile Application</h1>
   

  <div className={styles.firstcontent}>

       <div className={styles.overview}>
       <h4>Project Overview</h4>
         <h4 className={styles.innerapp}>Innersight was developed to provide individuals who maintain regular journals with a secure platform to express their emotions and thoughts conveniently and universally. 
         By employing AI sentiment recognition, Innersight assesses previous journal entries, assisting users in better understanding their emotions and behaviours. My roles were UX Designer and front-end developer </h4>

       </div>
       <div className={styles.overview}>
        <h4>identified Problem and the solution</h4>
       <h4 className={styles.innerapp}>It has the potential to identify events that may contribute to worsening symptoms while also highlights positive experiences in their daily lives. This tool is beneficial for individuals, whether diagnosed or undiagnosed, as it allows the AI to analyze entries spanning weeks, months, or years. 
       This eliminates the need to manually revisit past entries to identify potential triggers, events, and patterns.</h4>

       </div>
</div>

     <div className={styles.purplediv}>
            <Image 
            src= '/projectImages/innersightphones.png'
            height={400}
            width={350}
            alt='iphones'
            />
      </div>
      <div className={styles.line}>
        <hr></hr>
      </div>
    
     
        <div className={styles.projectoverview}>
            <div className={styles.leftcontent}>
                <h2>User Research, The User Persona and Key Features</h2>
            </div>
            <div className={styles.rightcontent}>
            <p>At the beginning of the process, there was high focus on competitive and user research. Through this, 3 major painpoints were identified that innersights target market were experiencing with traditional journaling and exisiting journaling apps, those painpoints were:</p>
                <ul>People who journal frequently have a hard time identifying patterns in their behaviour because it is challenging and time consuming to go back and analyze all of your entries. </ul>
                <ul>Organizing and being able to recall entries is challenging because it is hard to organize traditional journals or digital applications currently used to journal.</ul>
                <ul>People who journal often sometimes encounter writers block or find it hard to start.</ul>

            </div>

        </div>
     
  <div className={styles.persona}>

          <Image className={styles.personaimage}
          src="/projectImages/userpersona.png"
          height={700}
          width={600}
          alt='userpersona'
          />
          <div className={styles.rightpersona}>
          <p>Creating the persona serves as a vital step in the development process of innersight. By personifying the target audience through a fictional character like Amaya, we gain a clear understanding of the diverse needs, preferences, and expectations of our users. </p>
          </div>

  </div>

    <div className={styles.features}>
          <p className={styles.personaintro}>By identifying the essential requirements of the target audience, Innersight determined three primary features. They are:</p>
  
          <div className={styles.feature1}>
          <Image className={styles.featurepic}
            src="/features/aiinsights.png"
            height={200}
            width={200}
            alt='insights'
            />
            <p className={styles.featuredescription}>Ai generated insights</p>

          </div>

         <div className={styles.feature1}>
         <Image className={styles.featurepic}
            src="/features/emostats.png"
            height={200}
            width={200}
            alt='insights'
            />
            <p className={styles.featuredescription}>Emotional insight Statistics</p>

         </div>
         <div className={styles.feature1}>
         <Image className={styles.featurepic}
            src="/features/recs.png"
            height={200}
            width={200}
            alt='insights'
            />
            <p className={styles.featuredescription}>Personalized Recommendations</p>
      </div>
        
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>
  

  

 
<div className={styles.leftcontent1}>
<h1 className={styles.designprocess}>Design Process</h1>
<h2>Colour palette</h2>

<div className={styles.colorpallet}>
<p className={styles.hexdescription}>In crafting the design, the goal was to ensure a high level of user-friendliness. The monochromatic purple palette was chosen to enhance feelings of calmness, safety, and relaxation.</p>
<div className={styles.heximage}>
  <Image
  src="/projectImages/2d3180.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#2D3180</p>
</div>
<div className={styles.heximage}>
<Image
  src="/projectImages/d5d7ff.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#D5D7FF</p>
</div>
<div className={styles.heximage}>
<Image
  src="/projectImages/6164c3.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#6164C3</p>
</div>
<div className={styles.heximage}>
<Image
  src="/projectImages/c5c757.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#C5C757</p>
</div>
<div className={styles.heximage}>
<Image
  src="/projectImages/525585.png"
  height={100}
  width={100}
  alt='hex'
  />
  <p>#525585</p>
</div>

</div>

  <h2>Logo</h2>
  <div className={styles.logogrid}>
  <p>For the logo design, it used the same monochromatic pallet, the initial logo was designed to look like a person kneeling.</p>
              <Image className={styles.logos}
               src='/projectImages/initiallogo.png'
               height={120}
               width={120}
               alt='initial logo'
              />
              <p>After considering the concept of the app, a new logo was designed that was more open and hopeful creating the concept of an open flower that can be percieved as open pages of a book.</p>
              <Image className={styles.logos}
              src='/projectImages/logo.png'
              height={120}
              width={120}
              alt='final logo'
              
               />
             <p>The final logo with the wordmark</p>
              <Image className={styles.logos3}
              src='/projectImages/logo:wordmark.png'
              height={70}
              width={250}
              alt='final logo'
              
               />

  </div>
            
            

        
         
  
      <h1>Mascots</h1>

         <div className={styles.mascots}>
         <div className={styles.mascotgrid}>
                <Image
                src="/mascots/Panda.png"
                height={100}
                width={100}
                alt='panda'
                />
                  <Image
                src="/mascots/Frog.png"
                height={100}
                width={100}
                alt='frog'
                />
                  <Image
                src="/mascots/Otter.png"
                height={100}
                width={100}
                alt='otter'
                />
                  <Image
                src="/mascots/Sloth.png"
                height={100}
                width={100}
                alt='sloth'
                />
      </div>
      <p style={{width: '500px'}}>to add a personal and engaging touch, mascots were introduced to the application.
      The <strong>panda</strong>  to represent peace and friendship, the <strong>frog </strong> for wisdom, the <strong>otter</strong> to represent kindness, and the <strong>sloth</strong> for relaxation and patience.
      You can encounter the mascots across the app, offering personalized recommendations and AI analysis to assist you in navigating through your next steps.
      </p>
      
      <div className={styles.mascotgrid}>
      <Image
                src="/projectImages/pandaexercising.png"
                height={110}
                width={100}
                alt='panda'
                />
                  <Image
                src="/projectImages/slothknitting.png"
                height={110}
                width={100}
                alt='frog'
                />
                  <Image
                src="/projectImages/slothPhone.png"
                height={110}
                width={100}
                alt='otter'
                />
                  <Image
                src="/projectImages/ottersleeping.png"
                height={110}
                width={100}
                alt='sloth'
                />


      </div>

     </div>
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>
          
<div className={styles.prototyping}>

<div className={styles.userflow}>

<p className={styles.description}>
<h2>User Journey Map</h2>
Prior to transitioning to the wireframes, a user journey map tracking the steps a user would undergo when interacting with the app. The aim was to ensure that the users could effortlessly access the primary features without encountering confusion or unnecessary steps.
</p>
          
  <div>
                            <Image
                                className={styles.journeymapimg}
                                src="/projectImages/userjourney.png"
                                height={900}
                                width={800}
                                alt='user journey'
                              
                            />
   </div>

</div>
          
  </div>
  <div className={styles.line}>
        <hr></hr>
  </div>

  <div className={styles.prototypingcontent}>
  <div className={styles.lowfi}>
  <div className={styles.protodescription}>
            <h2 className={styles.prototypeheader}>Lo-fi Prototype</h2>
            <p style={{textAlign: 'left'}} className={styles.description}>
             When developing the lo-fi prototype,  there was an aim to maintain a consistent and user-friendly layout. Given that the app targets individuals with mental health concerns, there was a priority in preserving its primary purpose: providing a safe space for users to journal their thoughts and emotions without distractions.</p>

            </div>

         
           <Image className={styles.screenshotsimg}
            src="/Wireframes/journalslowfi.png"
            height={400}
            width={200}
            alt='wireframe'
            />
            <Image className={styles.screenshotsimg}
            src="/Wireframes/entrieslowfi.png"
            height={400}
            width={200}
            alt='wireframe'
            />
    </div>

    <div className={styles.lowfi}>
    <Image className={styles.screenshotsimg}
            src="/Wireframes/journalshighfi.png"
            height={400}
            width={200}
            alt='wireframe'
            />
            <Image className={styles.screenshotsimg}
            src="/Wireframes/entries.png"
            height={400}
            width={200}
            alt='wireframe'
            />
            <div className={styles.protodescription}>
            <h2 style={{textAlign: 'right'}} className={styles.prototypeheader}>High-fi Prototype</h2>
            <p style={{textAlign: 'right'}}className={styles.description}>In crafting the high-fidelity prototype, the chosen color palette, mascots, and images were integrated to finalize the design. The aim was to create a cohesive visual identity that resonates with the target audience while ensuring a seamless user experience. By incorporating these elements thoughtfully, we sought to enhance engagement and maintain the app's core focus as a supportive platform for journaling thoughts and emotions, particularly for individuals grappling with mental health concerns</p>

            </div>
  </div>
  </div>
  <div className={styles.prototyping2}>
    
          
              
               <p>IOS Screenshots</p>
                <Image className={styles.screenshotsimg}
                 src='/projectImages/screenshotone.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image className={styles.screenshotsimg}
                 src='/projectImages/screenshottwo.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />
                <Image className={styles.screenshotsimg}
                 src='/projectImages/screenshotthree.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />

                <Image className={styles.screenshotsimg}
                 src='/projectImages/screenshotfour.png'
                 height={400}
                 width={200}
                 alt='screenshot'
                />
 </div>
 <div className={styles.code}>

            <p className={styles.codingdescription}>
                In sprinting out the frontend development of the screens, the main focus was on user experience to ensure seamless interaction and engagement. Here's how the design is brought to life:</p>
               <ul className={styles.codingdescription} ><strong>User-Centric Design:</strong> Every aspect of the interface is meticulously crafted with the user in mind, aiming for intuitive navigation and clarity in functionality.</ul> 
               <ul className={styles.codingdescription}> <strong>Key Features:</strong> emphasize the accessibility of key features, ensuring users can easily locate and utilize them without encountering unnecessary complexity.</ul>
               <ul className={styles.codingdescription}> <strong>Responsive Design:</strong> The design approach prioritizes responsiveness across various devices and screen sizes, guaranteeing a consistent and optimized experience for all users.</ul>
               <ul className={styles.codingdescription}><strong> Accessibility:</strong> adhere to accessibility standards, making our interface inclusive and accessible to users with diverse needs and abilities.</ul>
    
          



 </div>
 <div className={styles.vid}>
 <video controls className={styles.video}
             src='techdemo.mov' type="video/mp4">

</video>
<div className={styles.buttoncontainer}>
             <button className={styles.resumebutton}
          onClick={() => window.open('https://github.com/Mariessa-Pinto/innersight.git', '_blank')}>
            <h4 className={styles.rtitle}>View Code</h4>
        </button>
          </div>

 </div>

      <div className={styles.webcontainer}>
           <div className={styles.webdescription}>
           <h4>Innersight Website</h4>
            <p>To enhance the application, an Innersight web app was developed, offering users a desktop-based interface to access their accounts.</p>
            <div className={styles.buttongroup}>
            <button className={styles.resumebutton}
            onClick={() => window.open("https://webapp.innersightapp.ca/", '_blank')}
           
              >
            <h4 className={styles.rtitle}>Website</h4>
              </button>
            
              <Button 
              title="View Other Projects"
              link="/"
              />

            </div>
           </div>
     
          
            <Image className={styles.websiteimg}
            src={'/projectImages/websupp.png'}
            height={600}
            width={1000}
            alt='web'
            />
          
           
       

            
          </div>

     
      


     
        
        
      </main>
  
    </>
  )
}